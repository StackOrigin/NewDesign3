import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { parentResources, portalFeatures } from '../../data/schoolData';

const quickLinks = [
  { step: '01', title: 'Academic Master Calendar', desc: 'Access examination timetables, sports events, and national holiday schedules.', path: '/calendar' },
  { step: '02', title: 'GPS Bus Routes & Fleet', desc: 'Pickup and drop-off guidelines across 25+ Kathmandu Valley routes.', path: '/campus' },
  { step: '03', title: 'Tuition Fee Structure', desc: 'Grade-wise fee schedule, installment payment policies, and aid.', path: '/admissions' },
  { step: '04', title: 'Parent Helpdesk & Support', desc: 'Direct administrative contact lines and counseling appointments.', path: '/contact' }
];

export default function Parents() {
  useScrollReveal();

  return (
    <div className="parents-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Parent Partnership</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Parents & Guardians Hub
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            Fostering strong family-school collaboration through transparent communication, real-time portal tracking, and academic resources.
          </p>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Digital Access</span>
            <h2 className="section-title">Everything Parents Need at a Glance</h2>
          </div>

          <div className="grid-4">
            {quickLinks.map((link, i) => (
              <div key={i} className="card reveal" style={{ padding: 32, background: '#ffffff', transitionDelay: `${i * 70}ms` }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: 14 }}>{link.step}</div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: 8 }}>{link.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 20 }}>{link.desc}</p>
                <Link to={link.path} style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.88rem' }}>
                  Access Hub →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Association & Direct Download Documents */}
      <section className="section section-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 50, alignItems: 'start' }}>
            <div className="reveal">
              <span className="section-eyebrow">Document Repository</span>
              <h2 className="section-title">Official Parent Resources</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: 28 }}>
                Download official institutional publications, academic guidelines, transportation schedules, and nutrition menus.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {parentResources.map(r => (
                  <div key={r.id} className="card" style={{ padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--cream)', border: '1px solid rgba(10,25,47,0.06)' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', margin: '0 0 4px' }}>{r.title}</h3>
                      <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', margin: 0 }}>{r.description}</p>
                    </div>
                    <button
                      onClick={() => alert(`Downloading ${r.title}...`)}
                      className="btn btn-navy btn-sm"
                      style={{ flexShrink: 0, marginLeft: 16 }}
                    >
                      Download {r.type}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Parent Teacher Association (PTA) Card */}
            <div className="card reveal" style={{ padding: 40, background: 'var(--navy)', color: '#ffffff', boxShadow: 'var(--shadow-lg)' }}>
              <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Collaborative Governance</span>
              <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: 14 }}>Parent-Teacher Association (PTA)</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 20 }}>
                Excelsior Apex operates an active, elected Parent-Teacher Executive Council meeting quarterly to discuss curriculum enhancements, safety improvements, and festive celebrations.
              </p>
              <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.08)', borderRadius: 10, marginBottom: 24, fontSize: '0.85rem' }}>
                <strong>Next General PTA Assembly:</strong> Saturday, Ashoj 25 (11:00 AM in Grand Auditorium)
              </div>
              <Link to="/contact" className="btn btn-gold btn-sm" style={{ width: '100%' }}>Contact PTA Secretariat</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
