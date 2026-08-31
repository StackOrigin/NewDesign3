import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { academicPrograms, resultsData } from '../../data/schoolData';

const methodologies = [
  { number: '01', title: 'Question-First Inquiry Pedagogy', desc: 'Transforming passive textbook memorization into active hypothesis formulation, experimentation, and critical reasoning.' },
  { number: '02', title: 'University-Grade Laboratory Immersion', desc: 'Weekly hands-on laboratory sessions in physics, chemistry, biology, robotics, and coding from Grade 4 onward.' },
  { number: '03', title: 'Diagnostic Assessment & 1-on-1 Clinics', desc: 'Weekly adaptive diagnostic tests identify individual learning gaps early, followed by custom remedial mentorship.' },
  { number: '04', title: 'Bilingual Oratory & Research Literacy', desc: 'Extensive debate training in English and Nepali, term thesis papers, and Model United Nations simulation.' }
];

export default function Academics() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const prog = academicPrograms[activeTab];

  return (
    <div className="academics-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Scholastic Excellence</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Academic Divisions & Streams
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            A rigorous continuum from sensory early childhood exploration to nationally ranked Secondary (SEE) and Higher Secondary (+2) board mastery.
          </p>
        </div>
      </section>

      {/* KPI Outcomes Strip */}
      <section style={{ background: 'var(--navy-deep)', color: '#ffffff', padding: '40px 0', borderBottom: '2px solid var(--gold)' }}>
        <div className="container">
          <div className="stats-strip-grid">
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--gold-light)' }}>{resultsData.summary.passRate}</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Board Exam Pass Rate</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: '#ffffff' }}>{resultsData.summary.gpa4Count}</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Perfect 4.0 GPA Achievers (2024)</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--gold-light)' }}>1:20</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Teacher-Student Ratio</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: '#059669' }}>100%</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>University & IOE/CEE Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stream Explorer */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Academic Spectrum</span>
            <h2 className="section-title">Explore Academic Levels</h2>
            <p className="section-subtitle">Select any stage below to inspect curriculum objectives, subject modules, and student opportunities.</p>
          </div>

          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
            {academicPrograms.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`program-tab-button ${activeTab === i ? 'active' : ''}`}
              >
                {p.icon} {p.level}
              </button>
            ))}
          </div>

          <div className="card reveal" style={{ padding: 48, borderTop: `6px solid ${prog.color}`, boxShadow: 'var(--shadow-lg)', background: '#ffffff' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 44, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: prog.color, background: 'var(--navy-soft)', padding: '4px 14px', borderRadius: 'var(--radius-full)' }}>
                    {prog.tag}
                  </span>
                  <span style={{ fontSize: '0.92rem', color: 'var(--gray-500)', fontWeight: 600 }}>{prog.grades}</span>
                </div>

                <h3 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: 14 }}>{prog.level}</h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 28 }}>{prog.desc}</p>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: 14 }}>Specialized Pedagogical Highlights</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
                  {prog.features.map((feat, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: 'var(--charcoal)' }}>
                      <span style={{ color: prog.color, fontWeight: 700 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link to="/admissions" className="btn btn-primary">Apply for {prog.level}</Link>
                  <Link to="/results" className="btn btn-navy">View Topper Records</Link>
                </div>
              </div>

              {/* Subject Breakdown Container */}
              <div style={{ background: 'var(--cream)', padding: 36, borderRadius: 'var(--radius-lg)', border: '1px solid rgba(10,25,47,0.06)' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: 16 }}>Core & Elective Subject Units</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {prog.subjects.map((sub, si) => (
                    <span key={si} style={{ background: '#ffffff', color: 'var(--navy)', padding: '10px 18px', borderRadius: 'var(--radius-full)', fontSize: '0.88rem', fontWeight: 600, border: '1px solid rgba(10,25,47,0.08)', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                      {sub}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(10,25,47,0.08)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)', display: 'block', marginBottom: 10 }}>
                    Need detailed curriculum syllabus and evaluation marks distribution?
                  </span>
                  <Link to="/publications" style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Download Syllabus Guide PDF →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogical Methodology */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Our Methodology</span>
            <h2 className="section-title">The Excelsior Pedagogical Advantage</h2>
            <p className="section-subtitle">How our master faculty transforms standard textbook curricula into visionary real-world problem solving.</p>
          </div>

          <div className="grid-4">
            {methodologies.map((m, i) => (
              <div key={i} className="card reveal" style={{ padding: 32, transitionDelay: `${i * 80}ms` }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: 14 }}>
                  {m.number}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: 10 }}>{m.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', color: '#ffffff', padding: '90px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: 14 }}>
            Prepare for Medical, Engineering & Global University Success
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 580, margin: '0 auto 30px', fontSize: '1.05rem' }}>
            Speak directly with our academic counselors or schedule a diagnostic assessment test for the 2025–26 session.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold btn-lg">Apply for Enrollment</Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">Schedule Counseling Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
