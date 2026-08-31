import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { alumniStories } from '../../data/schoolData';

const alumniChapters = [
  { region: 'Kathmandu Valley Chapter', members: '1,800+ Alumni', focus: 'Medical, Engineering & Civil Services Network' },
  { region: 'United States & Canada', members: '450+ Alumni', focus: 'Ivy League, MIT, Stanford & Tech Startups' },
  { region: 'United Kingdom & Europe', members: '320+ Alumni', focus: 'Oxford, Cambridge & Finance/Policy' },
  { region: 'Australia & Asia-Pacific', members: '280+ Alumni', focus: 'Healthcare, Corporate & Research Fellowships' },
];

export default function Alumni() {
  useScrollReveal();
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => setRegistered(false), 5000);
  };

  return (
    <div className="alumni-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Global Alumni Association</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Our Global Alumni Network
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            Over 4,500+ Excelsior graduates leading with distinction across pediatric surgery, artificial intelligence, international diplomacy, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* Featured Alumni Spotlights */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Pioneers of Impact</span>
            <h2 className="section-title">Distinguished Alumni Spotlights</h2>
            <p className="section-subtitle">Real-world journeys that started in our classrooms and laboratories.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {alumniStories.map((story, idx) => (
              <article key={story.id} className="card reveal" style={{ padding: 36, display: 'flex', flexDirection: 'column', background: '#ffffff', transitionDelay: `${idx * 80}ms` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20 }}>
                  <img src={story.image} alt={story.name} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--gold)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', margin: 0 }}>{story.name}</h3>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase' }}>{story.batch}</span>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginTop: 2 }}>{story.role}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--navy-light)', fontWeight: 600 }}>{story.org}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--gray-700)', fontStyle: 'italic', lineHeight: 1.7, fontSize: '0.95rem', flex: 1, borderLeft: '3px solid var(--gold)', paddingLeft: 16 }}>
                  "{story.quote}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global Chapters */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Worldwide Footprint</span>
            <h2 className="section-title">Alumni Chapters Across the Globe</h2>
          </div>

          <div className="grid-4">
            {alumniChapters.map((ch, i) => (
              <div key={i} className="card reveal" style={{ padding: 28, transitionDelay: `${i * 70}ms`, borderTop: '4px solid var(--navy)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: 6 }}>{ch.region}</h3>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--gold-dark)', display: 'block', marginBottom: 10 }}>{ch.members}</span>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.88rem', lineHeight: 1.5 }}>{ch.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="card reveal" style={{ padding: 48, background: '#ffffff', boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--gold)' }}>
            <div style={{ textAlign: 'center', marginBottom: 30 }}>
              <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Stay Reconnected</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--navy)' }}>Register in the Official Alumni Directory</h2>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem' }}>
                Join our mentoring network, receive exclusive alumni reunion invitations, and support graduating scholars.
              </p>
            </div>

            <form onSubmit={handleRegister} style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input type="text" required placeholder="Full Name" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                <input type="text" required placeholder="Graduation Batch Year (e.g. 2018)" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input type="email" required placeholder="Email Address" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                <input type="text" required placeholder="Current Organization / University" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
              </div>
              <input type="text" placeholder="Current Role / Job Title / Specialization" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                Join Alumni Directory →
              </button>
            </form>

            {registered && (
              <div style={{ marginTop: 18, padding: '14px 20px', borderRadius: 8, background: '#059669', color: '#fff', fontWeight: 600, fontSize: '0.92rem', textAlign: 'center' }}>
                Welcome back! Your alumni profile has been submitted for directory verification.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
