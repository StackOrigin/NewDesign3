import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { resultsData } from '../../data/schoolData';

export default function Results() {
  useScrollReveal();

  return (
    <div className="results-page">
      {/* Hero Header */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
        color: 'white',
        padding: '140px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Academic Excellence</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', margin: '14px 0', color: 'white' }}>
            Board Examination Results
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 620, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Consistently leading national rankings with historic pass rates, GPA 4.0 toppers, and distinction accolades.
          </p>
        </div>
      </section>

      {/* Summary KPI Strip */}
      <section style={{ background: 'var(--navy-soft)', padding: '50px 0' }}>
        <div className="container">
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { label: 'SEE Pass Rate', val: resultsData.summary.passRate, sub: 'Class of 2024' },
              { label: 'GPA 4.0 Students', val: `${resultsData.summary.gpa4Count}`, sub: 'Outstanding distinction' },
              { label: 'GPA 3.6 & Above', val: `${resultsData.summary.gpa36Count}`, sub: 'A+ Grade percentage' },
              { label: 'Average Batch GPA', val: resultsData.summary.averageGpa, sub: 'School-wide average' },
            ].map((stat, i) => (
              <div key={i} className="card reveal" style={{ padding: 30, textAlign: 'center', background: 'white', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--gold)' }}>{stat.val}</div>
                <div style={{ fontWeight: 700, color: 'var(--navy)', marginTop: 6, fontSize: '1.05rem' }}>{stat.label}</div>
                <div style={{ color: 'var(--gray-500)', fontSize: '0.85rem', marginTop: 4 }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honor Roll / Top Achievers Gallery */}
      <section style={{ padding: '90px 0', background: 'white' }}>
        <div className="container">
          <div className="section-header centered reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
            <span className="section-eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Hall of Fame</span>
            <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}>Academic Toppers 2024</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: 580, margin: '10px auto 0' }}>Saluting the grit, focus, and scholastic brilliancy of our top rankers.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {resultsData.toppers.map((t, idx) => (
              <div key={t.id} className="card reveal" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', transitionDelay: `${idx * 80}ms` }}>
                <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 14, right: 14, background: 'var(--gold)', color: 'var(--navy)', fontWeight: 800, padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                    {t.gpa} GPA
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: 1 }}>{t.rank}</span>
                  <h3 style={{ fontSize: '1.25rem', margin: '6px 0 2px', color: 'var(--navy)' }}>{t.name}</h3>
                  <p style={{ color: 'var(--navy-light)', fontWeight: 600, fontSize: '0.9rem' }}>{t.stream}</p>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', marginTop: 12, lineHeight: 1.6 }}>{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-by-Year Historical Breakdown */}
      <section style={{ padding: '80px 0', background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="section-header centered reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Track Record</span>
            <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}>Historical Performance Trend</h2>
          </div>

          <div className="card reveal" style={{ padding: 0, overflowX: 'auto', borderRadius: 'var(--radius-lg)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 600 }}>
              <thead>
                <tr style={{ background: 'var(--navy)', color: 'white' }}>
                  <th style={{ padding: '18px 24px' }}>Examination Year</th>
                  <th style={{ padding: '18px 20px' }}>Total Pass Rate</th>
                  <th style={{ padding: '18px 20px' }}>GPA 4.0 Count</th>
                  <th style={{ padding: '18px 20px' }}>GPA 3.6+ Count</th>
                  <th style={{ padding: '18px 24px' }}>Highest Scored GPA</th>
                </tr>
              </thead>
              <tbody>
                {resultsData.yearWise.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--gray-100)', background: i % 2 === 0 ? 'white' : 'var(--cream)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 700, color: 'var(--navy)' }}>Academic Year {row.year}</td>
                    <td style={{ padding: '18px 20px', color: '#059669', fontWeight: 700 }}>{row.passRate}</td>
                    <td style={{ padding: '18px 20px', color: 'var(--gold)', fontWeight: 700 }}>{row.gpa4} Students</td>
                    <td style={{ padding: '18px 20px', color: 'var(--navy-light)', fontWeight: 600 }}>{row.gpa36} Students</td>
                    <td style={{ padding: '18px 24px', fontWeight: 700, color: 'var(--navy)' }}>{row.topGpa} GPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', color: 'white', padding: '90px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: 14 }}>
            Empower Your Child with High Academic Standards
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto 30px', fontSize: '1.05rem' }}>
            Learn more about our rigorous curriculum, test preparation camps, and individualized faculty guidance.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-primary">Apply for Next Session</Link>
            <Link to="/scholarships" className="btn btn-secondary">Explore Scholarships</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
