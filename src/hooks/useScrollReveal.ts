import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Small timeout to allow DOM to render
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  });
}

export function useCounter(end: number, duration: number = 2000, start: boolean = true) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start || !countRef.current) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * (end - startValue) + startValue);

      if (countRef.current) {
        countRef.current.textContent = current.toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start]);

  return countRef;
}
