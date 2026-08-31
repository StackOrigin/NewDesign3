import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { facultyMembers } from '../../data/schoolData';

const departments = ['All Departments', 'Executive Leadership', 'Science & Technology', 'Mathematics', 'Humanities & Languages', 'Sports & Physical Education', 'Primary Division'];

export default function Faculty() {
  useScrollReveal();
  const [activeDept, setActiveDept] = useState('All Departments');

  const filtered = activeDept === 'All Departments'
    ? facultyMembers
    : facultyMembers.filter(f => f.department === activeDept);

  return (
    <div className="faculty-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Master Educators</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Faculty & Academic Leadership
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            Over 110+ passionate, highly qualified master educators committed to nurturing intellectual brilliance, scientific discovery, and moral character.
          </p>
        </div>
      </section>

      {/* Stats Summary Strip */}
      <section style={{ background: 'var(--navy-deep)', color: '#ffffff', padding: '36px 0', borderBottom: '2px solid var(--gold)' }}>
        <div className="container">
          <div className="stats-strip-grid">
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--gold-light)' }}>110+</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Full-Time Faculty Members</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: '#ffffff' }}>92%</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Hold Masters & Ph.D. Degrees</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: 'var(--gold-light)' }}>14+ Yrs</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Average Teaching Experience</div>
            </div>
            <div className="stat-strip-item">
              <div className="stat-strip-number" style={{ color: '#059669' }}>1:20</div>
              <div className="stat-strip-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Student-Faculty Mentorship Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Faculty Grid */}
      <section className="section section-cream">
        <div className="container">
          {/* Department Filter Tabs */}
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
            {departments.map(d => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`program-tab-button ${activeDept === d ? 'active' : ''}`}
                style={{ fontSize: '0.88rem', padding: '10px 20px' }}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Teachers Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
            {filtered.map((teacher, idx) => (
              <div key={teacher.id} className="card reveal" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', transitionDelay: `${idx * 70}ms` }}>
                <div style={{ height: 240, overflow: 'hidden', position: 'relative', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {teacher.image ? (
                    <img src={teacher.image} alt={teacher.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--gold-gradient)', color: 'var(--navy-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', fontWeight: 800 }}>
                      {teacher.initial}
                    </div>
                  )}
                  <span style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(6, 13, 26, 0.9)', color: 'var(--gold-light)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700 }}>
                    {teacher.experience} Exp.
                  </span>
                </div>

                <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gold-dark)', letterSpacing: 0.8 }}>{teacher.department}</span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', margin: '4px 0 2px' }}>{teacher.name}</h3>
                  <p style={{ color: 'var(--navy-light)', fontWeight: 600, fontSize: '0.88rem', marginBottom: 12 }}>{teacher.role}</p>
                  
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1, marginBottom: 16 }}>{teacher.bio}</p>

                  <div style={{ padding: '12px 14px', background: 'var(--cream)', borderRadius: 8, marginBottom: 14, fontSize: '0.82rem', color: 'var(--navy)' }}>
                    <strong>Qualification:</strong> {teacher.qualification}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                    {teacher.subjects.map((sub, si) => (
                      <span key={si} style={{ background: 'var(--navy-soft)', color: 'var(--navy)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Recruitment CTA */}
      <section style={{ background: 'var(--navy)', color: '#ffffff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Join Our Distinguished Faculty</span>
          <h2 style={{ fontSize: '2.3rem', color: '#ffffff', marginBottom: 14 }}>
            Interested in Teaching at Excelsior Apex?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 540, margin: '0 auto 28px' }}>
            We provide competitive remuneration, institutional research grants, and a world-class teaching environment.
          </p>
          <Link to="/careers" className="btn btn-gold btn-lg">Explore Career Opportunities →</Link>
        </div>
      </section>
    </div>
  );
}
