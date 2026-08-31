import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  heroSlides,
  academicPrograms,
  resultsData,
  campusFacilities,
  alumniStories,
  notices,
  calendarEvents,
  schoolProfile
} from '../../data/schoolData';
import './Home.css';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2200;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  useScrollReveal();

  // Hero carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Program tab
  const [selectedProgram, setSelectedProgram] = useState(0);

  // Testimonial / Toppers index
  const [activeTopper, setActiveTopper] = useState(0);

  const activeProg = academicPrograms[selectedProgram];

  return (
    <div className="home">
      {/* 1. LUXURY HERO SECTION */}
      <section className="hero-luxury">
        {heroSlides.map((slide, idx) => (
          <div key={idx} className={`hero-slide-bg ${idx === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
        <div className="hero-backdrop-gradient" />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content-grid">
            <div>
              <div className="hero-badge-pill">{heroSlides[currentSlide].badge}</div>
              <h1 className="hero-main-title">{heroSlides[currentSlide].title}</h1>
              <p className="hero-sub-text">{heroSlides[currentSlide].subtitle}</p>

              <div className="hero-button-group">
                <Link to="/admissions" className="btn btn-primary btn-lg">
                  {heroSlides[currentSlide].ctaPrimary} →
                </Link>
                <Link to="/virtual-tour" className="btn btn-outline-white btn-lg">
                  {heroSlides[currentSlide].ctaSecondary}
                </Link>
              </div>

              <div className="hero-controls">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`hero-dot-btn ${i === currentSlide ? 'active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Glassmorphic Quick Admissions Portal Box */}
            <div className="hero-floating-card">
              <div className="hero-floating-header">
                <div className="hero-floating-tag" style={{ background: 'var(--gold-gradient)', color: 'var(--navy-deep)', fontWeight: 800, padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>OPEN</div>
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0 }}>Admissions 2025–26</h3>
                  <span style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: 600 }}>Pre-Primary to Grade 11/12</span>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: 20 }}>
                Seats are evaluated on academic merit and entrance aptitude. Early applications receive scholarship priority.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link to="/admissions" className="btn btn-gold btn-sm" style={{ width: '100%' }}>
                  Submit Online Application
                </Link>
                <Link to="/scholarships" className="btn btn-outline-white btn-sm" style={{ width: '100%' }}>
                  Check Scholarship Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE NOTICES & EVENTS TICKER */}
      <div className="events-ticker">
        <div className="events-ticker-inner">
          {[...notices, ...notices].map((n, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
              <span className="ticker-item">
                <strong>[{n.category}]</strong> {n.title}
              </span>
              <span className="ticker-bullet" />
            </span>
          ))}
        </div>
      </div>

      {/* 3. STATS STRIP COUNTER */}
      <div className="container">
        <div className="stats-strip">
          <div className="stats-strip-grid">
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--gold-dark)' }}>
                <AnimatedCounter target={schoolProfile.stats.yearsExcellence} suffix="+" />
              </div>
              <div className="stat-strip-label">Years of Academic Prestige</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--navy)' }}>
                <AnimatedCounter target={schoolProfile.stats.studentsEnrolled} suffix="+" />
              </div>
              <div className="stat-strip-label">Scholars Enrolled</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--gold-dark)' }}>
                <AnimatedCounter target={52} suffix=" GPA 4.0" />
              </div>
              <div className="stat-strip-label">SEE Distinction Toppers 2024</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: '#059669' }}>
                {schoolProfile.stats.seePassRate}
              </div>
              <div className="stat-strip-label">Board Examination Pass Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PRINCIPAL'S EXECUTIVE WELCOME */}
      <section className="section section-cream">
        <div className="container">
          <div className="principal-spotlight reveal">
            <div className="principal-image-wrap">
              <img src="/images/principal.jpg" alt="Prof. Dr. Rajan Kumar Sharma" />
            </div>
            <div className="principal-quote-body">
              <span className="section-eyebrow">Institutional Leadership</span>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--navy)', marginBottom: 20 }}>
                "We do not merely teach students to pass exams; we prepare them to lead civilizations."
              </h2>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: 28 }}>
                At Excelsior Apex Academy, our mission is built on high academic rigor paired with emotional intelligence, cultural rootedness, and scientific innovation. Every child possesses unique genius—our faculty’s sacred duty is to illuminate and elevate it.
              </p>
              <div>
                <strong style={{ fontSize: '1.2rem', color: 'var(--navy)', display: 'block' }}>Prof. Dr. Rajan Kumar Sharma</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--gold-dark)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Executive Principal & Director | Ph.D. (TU), M.Ed. (UK)
                </span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/about" className="btn btn-navy">Read Complete Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ACADEMIC STREAMS EXPLORER */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Curriculum Pathways</span>
            <h2 className="section-title">Comprehensive Learning Divisions</h2>
            <p className="section-subtitle">
              From foundational early childhood discovery through intensive secondary and higher secondary (+2) excellence.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
            {academicPrograms.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelectedProgram(i)}
                className={`program-tab-button ${selectedProgram === i ? 'active' : ''}`}
              >
                <span style={{ opacity: 0.7, marginRight: 6, fontWeight: 700 }}>{p.index}</span> {p.level}
              </button>
            ))}
          </div>

          {/* Active Program Showcase Card */}
          <div className="card reveal" style={{ padding: 48, borderTop: `5px solid ${activeProg.color}`, boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: activeProg.color, background: 'var(--navy-soft)', padding: '4px 14px', borderRadius: 'var(--radius-full)' }}>
                    {activeProg.tag}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--gray-500)', fontWeight: 600 }}>{activeProg.grades}</span>
                </div>
                <h3 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: 14 }}>{activeProg.level}</h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 28 }}>{activeProg.desc}</p>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: 14 }}>Key Features & Offerings</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 30 }}>
                  {activeProg.features.map((feat, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: 'var(--charcoal)' }}>
                      <span style={{ color: activeProg.color, fontWeight: 700 }}>•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link to="/admissions" className="btn btn-primary">Apply for {activeProg.level}</Link>
                  <Link to="/academics" className="btn btn-outline">Explore Full Curriculum</Link>
                </div>
              </div>

              {/* Subjects Pill Box */}
              <div style={{ background: 'var(--cream)', padding: 32, borderRadius: 'var(--radius-lg)', border: '1px solid rgba(10,25,47,0.06)' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: 16 }}>Core Subject Modules</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {activeProg.subjects.map((sub, si) => (
                    <span key={si} style={{ background: '#ffffff', color: 'var(--navy)', padding: '8px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(10,25,47,0.08)' }}>
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS & TOPPERS HIGHLIGHT CAROUSEL */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Academic Distinction</span>
            <h2 className="section-title">Hall of Board Toppers (SEE 2024)</h2>
            <p className="section-subtitle">
              Celebrating our historic achievement with 52 students securing perfect GPA 4.0 in national examinations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {resultsData.toppers.map((t, idx) => (
              <div key={t.id} className="card reveal" style={{ padding: 0, borderRadius: 'var(--radius-lg)', transitionDelay: `${idx * 80}ms` }}>
                <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'var(--gold-gradient)', color: 'var(--navy-deep)', fontWeight: 800, padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                    {t.gpa} GPA
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gold-dark)', letterSpacing: 1 }}>{t.rank}</span>
                  <h3 style={{ fontSize: '1.25rem', margin: '4px 0 2px', color: 'var(--navy)' }}>{t.name}</h3>
                  <p style={{ color: 'var(--navy-light)', fontWeight: 600, fontSize: '0.88rem' }}>{t.stream}</p>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', marginTop: 10, lineHeight: 1.6, fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                  <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--gray-100)', fontSize: '0.8rem', color: 'var(--navy)' }}>
                    <strong>Ambition:</strong> {t.ambition}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/results" className="btn btn-navy btn-lg">View Complete Results Archive & Stats →</Link>
          </div>
        </div>
      </section>

      {/* 7. CAMPUS INFRASTRUCTURE & VIRTUAL TOUR PREVIEW */}
      <section className="section section-navy">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>World-Class Facilities</span>
            <h2 className="section-title">Built for Discovery & Athletics</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
              15 Ropanies of purpose-built academic blocks, research laboratories, and sports grounds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {campusFacilities.map((fac, fi) => (
              <div key={fac.id} className="card reveal" style={{ background: 'rgba(22, 47, 86, 0.75)', borderColor: 'rgba(212, 175, 55, 0.2)', transitionDelay: `${fi * 70}ms` }}>
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={fac.image} alt={fac.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(6, 13, 26, 0.85)', backdropFilter: 'blur(6px)', color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    Facility 0{fi + 1}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: 10 }}>{fac.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.92rem', lineHeight: 1.65 }}>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/virtual-tour" className="btn btn-gold btn-lg">Experience 360° Interactive Virtual Tour</Link>
          </div>
        </div>
      </section>

      {/* 8. SCHOLARSHIPS & FINANCIAL AID PROMO */}
      <section className="section section-white">
        <div className="container">
          <div className="card reveal" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)', color: '#ffffff', padding: 56, borderRadius: 'var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -60, bottom: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
            <div style={{ maxWidth: 700, position: 'relative', zIndex: 2 }}>
              <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Over NPR 12 Million Disbursed</span>
              <h2 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: 16 }}>
                Merit & Need-Based Scholarships 2025–26
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.08rem', lineHeight: 1.75, marginBottom: 32 }}>
                We ensure that financial constraints never stand in the way of brilliance. Up to 100% full tuition fee waivers available for board exam distinction scorers, national athletes, and underprivileged scholars.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/scholarships" className="btn btn-gold btn-lg">Check Scholarship Schemes</Link>
                <Link to="/admissions" className="btn btn-outline-white btn-lg">Apply for Assessment Test</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ALUMNI SUCCESS VOICES */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Alumni Excellence</span>
            <h2 className="section-title">Where Are They Now?</h2>
            <p className="section-subtitle">Excelsior graduates leading surgical teams, developing artificial intelligence, and shaping global policy.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {alumniStories.map((al, ai) => (
              <div key={al.id} className="card reveal" style={{ padding: 36, display: 'flex', flexDirection: 'column', transitionDelay: `${ai * 80}ms` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <img src={al.image} alt={al.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', margin: 0 }}>{al.name}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-dark)' }}>{al.batch}</span>
                    <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: 2 }}>{al.role} · {al.org}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--gray-700)', fontStyle: 'italic', lineHeight: 1.7, flex: 1, fontSize: '0.95rem' }}>
                  "{al.quote}"
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/alumni" className="btn btn-outline">Explore Alumni Network Directory →</Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL VIP ADMISSION CTA */}
      <section style={{ background: 'var(--navy-deep)', color: '#ffffff', padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 780 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Secure Your Child's Future</span>
          <h2 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', color: '#ffffff', marginBottom: 18 }}>
            Begin the Journey to Educational Brilliance
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: 36 }}>
            Admissions for Academic Session 2025–26 are filling rapidly. Schedule a private campus tour or apply online today.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold btn-lg">Apply Online Now →</Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">Schedule Campus Visit</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
