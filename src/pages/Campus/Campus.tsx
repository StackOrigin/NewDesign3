import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { campusFacilities } from '../../data/schoolData';

const safetyFeatures = [
  { number: '01', title: '24/7 Security & CCTV Surveillance', desc: 'Over 120 high-definition IP cameras covering all gates, corridors, auditoriums, and playground perimeters with professional security guards.' },
  { number: '02', title: 'GPS-Monitored Transport Fleet', desc: 'Fleet of 25+ air-conditioned buses equipped with speed governors, female care attendants, first-aid kits, and live GPS map tracking for parents.' },
  { number: '03', title: 'Full-Time Medical Infirmary', desc: 'Staffed by certified registered nurses and emergency medical equipment, with formal ties to nearby tertiary hospitals.' },
  { number: '04', title: 'Nutritious Organic Dining Hall', desc: 'Hygienic multi-cuisine dining preparing balanced, nutritionist-vetted hot meals, purified RO drinking water stations, and zero-junk policy.' },
  { number: '05', title: 'Solar Clean Energy & Power Backup', desc: 'Environmentally sustainable campus powered by 100kW rooftop solar panels and uninterrupted generator backups.' },
  { number: '06', title: 'Botanical Gardens & Open Plazas', desc: 'Lush greenery, peaceful open-air reading gardens, and earthquake-resilient architectural structures.' }
];

export default function Campus() {
  useScrollReveal();

  return (
    <div className="campus-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Infrastructure & Environment</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Our 15-Ropani World-Class Campus
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            A serene academic sanctuary in Jawalakhel, Lalitpur, meticulously engineered for scientific discovery, athletic mastery, and student wellbeing.
          </p>
        </div>
      </section>

      {/* Flagship Facilities Grid */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Academic & Co-Curricular Spaces</span>
            <h2 className="section-title">Built for Extraordinary Learning</h2>
            <p className="section-subtitle">Take a closer look at our specialized pavilions, laboratories, libraries, and athletic grounds.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {campusFacilities.map((f, i) => (
              <div key={f.id} className="card reveal" style={{ overflow: 'hidden', padding: 0, transitionDelay: `${i * 70}ms` }}>
                <div style={{ height: 230, position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={f.image}
                    alt={f.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    padding: '4px 12px', borderRadius: 'var(--radius-full)',
                    background: 'rgba(6, 13, 26, 0.85)', backdropFilter: 'blur(6px)',
                    color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5
                  }}>
                    Facility 0{i + 1}
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/virtual-tour" className="btn btn-primary btn-lg">Experience 360° Virtual Tour →</Link>
          </div>
        </div>
      </section>

      {/* Safety & Student Welfare */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Student Wellbeing</span>
            <h2 className="section-title">Safety, Health & Campus Care</h2>
            <p className="section-subtitle">A secure, nurturing haven where parents enjoy complete peace of mind.</p>
          </div>

          <div className="grid-3">
            {safetyFeatures.map((s, i) => (
              <div key={i} className="card reveal" style={{ padding: 32, transitionDelay: `${i * 70}ms` }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: 14 }}>
                  {s.number}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Campus CTA */}
      <section style={{ background: 'var(--navy)', color: '#ffffff', padding: '90px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: 14 }}>
            Experience Our Campus in Person
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 540, margin: '0 auto 30px', fontSize: '1.05rem' }}>
            Book a private guided campus walkthrough led by our admissions team.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">Book a Guided Campus Tour</Link>
            <Link to="/gallery" className="btn btn-outline-white btn-lg">View Photo Gallery</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
