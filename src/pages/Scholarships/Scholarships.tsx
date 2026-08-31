import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { scholarshipsData } from '../../data/schoolData';

const applicationSteps = [
  { step: '01', title: 'Submit General Admission Application', desc: 'Complete standard admission registration online or at the administrative admissions desk.' },
  { step: '02', title: 'Scholarship Form & Evidence', desc: 'Attach past grade transcripts, income certificates (for financial aid), or sports/science awards.' },
  { step: '03', title: 'Scholarship Assessment Exam', desc: 'Applicants sit for a competitive scholarship evaluation exam in English, Math, and General Aptitude.' },
  { step: '04', title: 'Committee Interview & Grant', desc: 'Shortlisted candidates meet the scholarship board and receive official award letters.' },
];

export default function Scholarships() {
  useScrollReveal();

  return (
    <div className="scholarships-page">
      {/* Hero Header */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
        color: 'white',
        padding: '140px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Financial Aid & Recognition</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', margin: '14px 0', color: 'white' }}>
            Scholarships & Grants
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 620, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Over NPR 10 Million in annual scholarships awarded to nurture deserving minds, athletic talents, and young innovators.
          </p>
        </div>
      </section>

      {/* Available Schemes */}
      <section style={{ padding: '90px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header centered reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
            <span className="section-eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Scholarship Categories</span>
            <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}>Award Schemes (2025–26)</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: 580, margin: '10px auto 0' }}>Explore fee waiver options tailored for scholastic brilliance, athletic distinction, and financial need.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {scholarshipsData.map((s, idx) => (
              <div key={s.id} className="card reveal" style={{ padding: 32, display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 'var(--radius-lg)', transitionDelay: `${idx * 80}ms` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: 'var(--gold)', letterSpacing: 1 }}>{s.tier || `0${idx + 1}`}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', background: 'var(--navy-soft)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>{s.quota}</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 8 }}>{s.title}</h3>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold)', marginBottom: 14 }}>{s.coverage}</div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{s.description}</p>
                
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--gray-100)', fontSize: '0.85rem' }}>
                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 4 }}>Eligibility:</strong>
                  <span style={{ color: 'var(--gray-500)' }}>{s.eligibility}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Procedure */}
      <section style={{ padding: '90px 0', background: 'white' }}>
        <div className="container">
          <div className="section-header centered reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
            <span className="section-eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center' }}>How to Apply</span>
            <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}>Application Process</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {applicationSteps.map((st, i) => (
              <div key={i} className="card reveal" style={{ padding: 30, position: 'relative', borderRadius: 'var(--radius-lg)', background: 'var(--cream)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', display: 'block', marginBottom: 10 }}>{st.step}</span>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: 8 }}>{st.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>{st.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/contact" className="btn btn-primary">Download Scholarship Form</Link>
          </div>
        </div>
      </section>

      {/* FAQ Banner */}
      <section style={{ background: 'var(--navy)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: 12 }}>
            Questions Regarding Scholarship Deadlines?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 24px' }}>
            Our financial counselor is available to answer all questions regarding documentation and renewals.
          </p>
          <Link to="/contact" className="btn btn-secondary">Speak With Counselor</Link>
        </div>
      </section>
    </div>
  );
}
