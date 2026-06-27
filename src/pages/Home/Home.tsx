import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Home.css';

/* ── Stat counter hook ── */
function useCounter(end: number, duration = 2000, active: boolean = false) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!active || !ref.current) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      if (ref.current) ref.current.textContent = Math.floor(ease * end).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end, duration]);
  return ref;
}

const stats = [
  { value: 46, suffix: '+', label: 'Years of Excellence' },
  { value: 3200, suffix: '+', label: 'Students Enrolled' },
  { value: 280, suffix: '+', label: 'Qualified Teachers' },
  { value: 340, suffix: '+', label: 'Awards Received' },
];

const programs = [
  {
    icon: '🎓',
    level: 'Primary (K–5)',
    title: 'Foundation Excellence Program',
    desc: 'Building strong academic foundations through inquiry-based learning, creativity, and character development.',
    color: '#1e4d9e',
  },
  {
    icon: '📚',
    level: 'Middle School (6–8)',
    title: 'Discovery & Leadership Program',
    desc: 'Bridging childhood curiosity and teenage ambition with STEM integration, arts, and global citizenship.',
    color: '#059669',
  },
  {
    icon: '🔬',
    level: 'High School (9–12)',
    title: 'Advanced Scholars Program',
    desc: 'IB Diploma, AP courses, and university preparation with college counseling and research opportunities.',
    color: '#7c3aed',
  },
];

const whyUs = [
  { icon: '🏆', title: 'Academic Excellence', desc: '98% university acceptance rate with graduates at Harvard, Oxford, MIT, and world\'s top institutions.' },
  { icon: '🌍', title: 'Global Curriculum', desc: 'International Baccalaureate and AP programs preparing students for a globally connected world.' },
  { icon: '🧠', title: 'Innovative Learning', desc: 'State-of-the-art technology, project-based learning, and a future-ready curriculum.' },
  { icon: '🎭', title: 'Holistic Development', desc: 'From robotics to orchestra, sports to debate — we nurture every dimension of student potential.' },
  { icon: '🤝', title: 'Diverse Community', desc: 'Students from 60+ countries creating a vibrant, multicultural, and inclusive campus community.' },
  { icon: '🔬', title: 'Research & Innovation', desc: 'Dedicated research labs, innovation hubs, and partnerships with leading universities worldwide.' },
];

const facilities = [
  { img: 'https://images.pexels.com/photos/8423119/pexels-photo-8423119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Smart Classrooms', desc: 'Interactive digital learning environments' },
  { img: 'https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'World-Class Library', desc: '80,000+ volumes & digital resources' },
  { img: 'https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Sports Complex', desc: 'Olympic-standard athletic facilities' },
  { img: 'https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Innovation Labs', desc: 'Cutting-edge STEM research spaces' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Parent — Grade 10 student',
    avatar: 'SC',
    text: 'Excelsior has transformed my daughter\'s perspective on learning. The faculty\'s commitment to each student\'s growth is unmatched. She\'s now applying to Ivy League universities with confidence.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Alumni — Class of 2022, Now at MIT',
    avatar: 'MJ',
    text: 'The research opportunities and teacher mentorship at Excelsior prepared me for MIT better than any other experience could have. I felt genuinely ready for university-level challenges.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Parent — Two children enrolled',
    avatar: 'PS',
    text: 'The multicultural environment and holistic approach to education here is extraordinary. Both my children have developed into confident, empathetic, and academically outstanding young people.',
    rating: 5,
  },
];

const newsItems = [
  {
    date: 'June 12, 2025',
    category: 'Achievement',
    title: 'Excelsior Students Sweep National Science Olympiad',
    img: 'https://images.pexels.com/photos/34162713/pexels-photo-34162713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    excerpt: 'Our science team brought home gold in 8 of 15 events at the National Science Olympiad...',
  },
  {
    date: 'June 5, 2025',
    category: 'Event',
    title: 'Annual International Cultural Festival Returns',
    img: 'https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    excerpt: 'Students from 60+ nationalities celebrate diversity through art, food, music, and performance...',
  },
  {
    date: 'May 28, 2025',
    category: 'Admissions',
    title: '2025–2026 Enrollment Now Open',
    img: 'https://images.pexels.com/photos/32476662/pexels-photo-32476662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    excerpt: 'Applications for the upcoming academic year are now being accepted. Limited seats available...',
  },
];

export default function Home() {
  useScrollReveal();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  /* Observe stats section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  /* Testimonial auto-rotate */
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home page-enter">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/hero-bg.jpg"
            alt="Excelsior International Academy Campus"
            className="hero-bg-img"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>

        <div className="container hero-content">
          <div className="hero-badge animate-fadeInDown">
            <span>🏆 Ranked #1 International School — Northeast US 2024</span>
          </div>
          <h1 className="hero-title animate-fadeInUp">
            Where <span className="hero-title-accent">Brilliance</span><br />
            Meets <em>Purpose</em>
          </h1>
          <p className="hero-subtitle animate-fadeInUp">
            Excelsior International Academy nurtures curious minds, courageous hearts, and 
            compassionate leaders who shape the future. Excellence is not our goal — 
            it's our standard.
          </p>
          <div className="hero-actions animate-fadeInUp">
            <Link to="/admissions" className="btn btn-gold btn-lg">
              Apply Now 
              <svg viewBox="0 0 20 20" fill="currentColor" width="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
            </Link>
            <Link to="/academics" className="btn btn-outline btn-lg">
              Explore Programs
            </Link>
          </div>

          <div className="hero-quick-stats">
            <div className="hero-quick-stat">
              <strong>IB World School</strong>
              <span>Certified</span>
            </div>
            <div className="hero-quick-stat-divider"/>
            <div className="hero-quick-stat">
              <strong>98%</strong>
              <span>University Placement</span>
            </div>
            <div className="hero-quick-stat-divider"/>
            <div className="hero-quick-stat">
              <strong>60+</strong>
              <span>Nationalities</span>
            </div>
            <div className="hero-quick-stat-divider"/>
            <div className="hero-quick-stat">
              <strong>Since 1978</strong>
              <span>Years of Legacy</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"/>
        </div>
      </section>

      {/* ── STATISTICS ── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} active={statsVisible} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-media reveal-left">
              <div className="intro-img-stack">
                <img
                  src="https://images.pexels.com/photos/17144608/pexels-photo-17144608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500"
                  alt="School campus"
                  className="intro-img-main"
                />
                <img
                  src="https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=280&w=340"
                  alt="Students in class"
                  className="intro-img-secondary"
                />
                <div className="intro-img-badge">
                  <span>🏆</span>
                  <div>
                    <strong>46 Years</strong>
                    <span>of Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="intro-content reveal-right">
              <span className="section-label">Our Philosophy</span>
              <h2 className="section-title">Education Beyond the Classroom</h2>
              <div className="gold-divider"/>
              <p style={{color: 'var(--gray-600)', lineHeight: '1.9', marginBottom: '20px'}}>
                At Excelsior International Academy, we believe education is the most powerful 
                tool for transforming lives and communities. Founded in 1978, our institution 
                has stood at the forefront of educational innovation for nearly five decades.
              </p>
              <p style={{color: 'var(--gray-600)', lineHeight: '1.9', marginBottom: '32px'}}>
                We go beyond textbooks — fostering critical thinking, global awareness, and 
                the personal integrity that defines true leadership. Every student who walks 
                through our doors discovers not just knowledge, but their unique potential.
              </p>
              <div className="intro-pillars">
                {[
                  { icon: '🎯', title: 'Our Mission', desc: 'To inspire and empower every student with the knowledge, skills, and values to lead meaningful lives and contribute positively to the world.' },
                  { icon: '🔭', title: 'Our Vision', desc: 'To be the world\'s most transformative learning community — where academic excellence meets human development.' },
                ].map(p => (
                  <div key={p.title} className="intro-pillar">
                    <span className="pillar-icon">{p.icon}</span>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary" style={{marginTop: '12px'}}>
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="section section--gray programs-section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Academic Excellence</span>
            <h2 className="section-title">World-Class Programs for Every Stage</h2>
            <p className="section-subtitle">
              Our internationally accredited programs are designed to challenge, inspire, 
              and prepare students for the world's top universities.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div key={i} className="program-card reveal" style={{transitionDelay: `${i * 0.15}s`}}>
                <div className="program-card-top" style={{background: p.color}}>
                  <span className="program-icon">{p.icon}</span>
                  <span className="program-level">{p.level}</span>
                </div>
                <div className="program-card-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link to="/academics" className="program-link">
                    Learn More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-header reveal-left">
              <span className="section-label">Why Excelsior</span>
              <h2 className="section-title">A Different Kind of Education</h2>
              <div className="gold-divider"/>
              <p style={{color: 'var(--gray-600)', lineHeight: '1.9', maxWidth: '440px', marginBottom: '32px'}}>
                We don't just prepare students for university — we prepare them for life. 
                Our approach combines academic rigor with emotional intelligence and global perspective.
              </p>
              <Link to="/about" className="btn btn-primary">Learn About Our Approach</Link>
            </div>
            <div className="why-grid">
              {whyUs.map((item, i) => (
                <div key={i} className="why-card reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                  <span className="why-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="section section--gray facilities-section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Our Campus</span>
            <h2 className="section-title">Premium Facilities for Premium Learning</h2>
            <p className="section-subtitle">
              Our 45-acre campus features cutting-edge facilities designed to inspire creativity, 
              collaboration, and academic achievement.
            </p>
          </div>
          <div className="facilities-grid">
            {facilities.map((f, i) => (
              <div key={i} className="facility-card reveal" style={{transitionDelay: `${i * 0.12}s`}}>
                <div className="facility-img-wrap">
                  <img src={f.img} alt={f.title} loading="lazy" />
                  <div className="facility-overlay">
                    <Link to="/campus" className="btn btn-gold btn-sm">Explore</Link>
                  </div>
                </div>
                <div className="facility-info">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <Link to="/campus" className="btn btn-outline-navy btn-lg">
              Take a Virtual Tour
            </Link>
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className="section success-section">
        <div className="success-bg">
          <img
            src="https://images.pexels.com/photos/32476657/pexels-photo-32476657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600"
            alt="Campus at night"
          />
          <div className="success-overlay"/>
        </div>
        <div className="container success-content">
          <div className="section-header centered reveal">
            <span className="section-label" style={{color: 'var(--gold-light)'}}>Alumni Success</span>
            <h2 className="section-title" style={{color: 'var(--white)'}}>Where Our Graduates Go</h2>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.75)'}}>
              Our alumni are making their mark at the world's most prestigious institutions and organizations.
            </p>
          </div>
          <div className="universities-grid reveal">
            {['Harvard', 'MIT', 'Oxford', 'Stanford', 'Yale', 'Cambridge', 'Princeton', 'Columbia'].map(u => (
              <div key={u} className="university-badge">{u}</div>
            ))}
          </div>
          <div className="success-stats reveal">
            <div className="success-stat">
              <strong>98%</strong>
              <span>University Placement Rate</span>
            </div>
            <div className="success-stat">
              <strong>$2.4M+</strong>
              <span>Scholarships Won in 2024</span>
            </div>
            <div className="success-stat">
              <strong>12,000+</strong>
              <span>Alumni Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">What They Say</span>
            <h2 className="section-title">Voices from Our Community</h2>
          </div>
          <div className="testimonials-carousel">
            <div className="testimonial-main reveal">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
              <div className="testimonial-rating">
                {'★'.repeat(testimonials[activeTestimonial].rating)}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
            <div className="testimonials-mini-grid">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  className={`testimonial-mini ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                >
                  <div className="mini-avatar">{t.avatar}</div>
                  <div className="mini-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="section section--gray news-section">
        <div className="container">
          <div className="news-header">
            <div className="reveal-left">
              <span className="section-label">Latest Updates</span>
              <h2 className="section-title">News & Events</h2>
            </div>
            <Link to="/news" className="btn btn-outline-navy reveal-right">
              View All News
            </Link>
          </div>
          <div className="news-grid">
            {newsItems.map((item, i) => (
              <div key={i} className="news-card reveal" style={{transitionDelay: `${i * 0.15}s`}}>
                <div className="news-img-wrap">
                  <img src={item.img} alt={item.title} loading="lazy"/>
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-body">
                  <span className="news-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                  <Link to="/news" className="news-link">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-bg"/>
        <div className="container">
          <div className="cta-banner-content reveal">
            <span className="section-label" style={{color: 'var(--gold-light)'}}>Join Our Community</span>
            <h2>Begin Your Excelsior Journey Today</h2>
            <p>
              Applications for the 2025–2026 academic year are now open. Limited seats available. 
              Take the first step toward an extraordinary education.
            </p>
            <div className="cta-banner-actions">
              <Link to="/admissions" className="btn btn-gold btn-lg">
                Apply Now
                <svg viewBox="0 0 20 20" fill="currentColor" width="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Schedule a Visit</Link>
            </div>
            <p className="cta-note">🎓 Scholarships available for exceptional students</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ stat, active, delay }: { stat: typeof stats[0]; active: boolean; delay: number }) {
  const ref = useCounter(stat.value, 2200, active);
  return (
    <div className="stat-card" style={{animationDelay: `${delay}ms`}}>
      <div className="stat-number">
        <span ref={ref}>0</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <p className="stat-label">{stat.label}</p>
      <div className="stat-bar"/>
    </div>
  );
}
