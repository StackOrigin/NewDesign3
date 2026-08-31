import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const houseSystem = [
  { name: 'Sagarmatha House', color: '#c2410c', letter: 'S', motto: 'Scaling Peaks of Virtue', desc: 'Fosters resilience, mountain spirit, athletic dominance, and unyielding fortitude.' },
  { name: 'Kanchanjunga House', color: '#1e3a8a', letter: 'K', motto: 'Truth in Leadership', desc: 'Champions analytical rigor, integrity, student council leadership, and service.' },
  { name: 'Annapurna House', color: '#059669', letter: 'A', motto: 'Nurturing Compassion', desc: 'Dedicated to ecological stewardship, community outreach, debate, and empathy.' },
  { name: 'Lhotse House', color: '#7c3aed', letter: 'L', motto: 'Innovation & Honor', desc: 'Celebrates innovation, artistic distinction, coding mastery, and musical theater.' },
];

const clubs = [
  { number: '01', name: 'Model United Nations (MUN)', desc: 'Training delegates in diplomacy, global treaty drafting, and persuasive parliamentary speech.' },
  { number: '02', name: 'Robotics & AI Innovation Guild', desc: 'Designing autonomous robotics, Arduino sensor arrays, Python algorithms, and 3D printing.' },
  { number: '03', name: 'Thespian Drama & Theater Society', desc: 'Directing annual theatrical plays, musical drama performances, and bilingual street theater.' },
  { number: '04', name: 'Bilingual Parliamentary Debating', desc: 'Regular inter-school debate tournaments in English and Nepali focusing on policy and ethics.' },
  { number: '05', name: 'Visual Arts & Photography Guild', desc: 'Canvas painting, traditional Nepali Paubha arts, digital graphic design, and darkroom photography.' },
  { number: '06', name: 'Orchestra & Eastern Classical Choir', desc: 'Training in violin, piano, tabla, sitar, and classical choral harmony.' },
  { number: '07', name: 'Eco-Warriors Sustainability Club', desc: 'Zero-waste campus drives, botanical gardening, tree plantations, and organic compost projects.' },
  { number: '08', name: 'Junior Red Cross & Community Service', desc: 'Blood donation drives, disaster relief volunteering, and village primary school book donations.' }
];

export default function StudentLife() {
  useScrollReveal();

  return (
    <div className="student-life-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Co-Curricular Enrichment</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Vibrant Student Life
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            Discovering passions, building lifelong friendships, and cultivating fearless leadership through over 20+ clubs, sports, and house competitions.
          </p>
        </div>
      </section>

      {/* House System Spotlight */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">House Camaraderie</span>
            <h2 className="section-title">The Four Imperial Houses</h2>
            <p className="section-subtitle">Every student belongs to one of four legendary houses, building healthy rivalry, brotherhood, and collective pride.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {houseSystem.map((h, i) => (
              <div key={i} className="card reveal" style={{ padding: 32, borderTop: `6px solid ${h.color}`, background: '#ffffff', transitionDelay: `${i * 80}ms` }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', background: `${h.color}15`,
                  color: h.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-serif)', marginBottom: 16
                }}>
                  {h.letter}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 4 }}>{h.name}</h3>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: h.color, textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>{h.motto}</span>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Student Clubs & Societies</span>
            <h2 className="section-title">Pursue Your True Calling</h2>
            <p className="section-subtitle">Student-led, faculty-mentored clubs meeting weekly for competitions, projects, and creative showcases.</p>
          </div>

          <div className="grid-4">
            {clubs.map((c, i) => (
              <div key={i} className="card reveal" style={{ padding: 28, transitionDelay: `${i * 60}ms` }}>
                <div style={{
                  fontSize: '0.95rem', fontWeight: 800, color: 'var(--gold-dark)',
                  fontFamily: 'var(--font-serif)', marginBottom: 12
                }}>
                  {c.number}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: 8 }}>{c.name}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.88rem', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Mega Events Preview */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Campus Traditions</span>
            <h2 className="section-title">Annual Flagship Festivals</h2>
          </div>

          <div className="grid-3">
            {[
              { title: 'Annual Sports Olympiad', time: 'Winter Term', desc: '3 days of track athletics, football finals, basketball championships, and martial arts demonstrations.', img: '/images/sports.jpg' },
              { title: 'Valley STEM & AI Expo', time: 'Autumn Term', desc: 'Over 80 student innovations presented to university professors, entrepreneurs, and technology judges.', img: '/images/science-lab.jpg' },
              { title: 'Grand Cultural & Musical Gala', time: 'Spring Term', desc: 'Orchestral symphonies, classical dance ballets, and drama productions attended by over 3,000 parents.', img: '/images/outing.jpg' },
            ].map((ev, i) => (
              <div key={i} className="card reveal" style={{ background: '#ffffff', overflow: 'hidden', transitionDelay: `${i * 80}ms` }}>
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={ev.img} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase' }}>{ev.time}</span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', margin: '6px 0 10px' }}>{ev.title}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', color: '#ffffff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.3rem', color: '#ffffff', marginBottom: 14 }}>
            Experience an Unrivaled Campus Journey
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 540, margin: '0 auto 28px' }}>
            Discover how Excelsior Apex balances rigorous academic mastery with joyful creative discovery.
          </p>
          <Link to="/admissions" className="btn btn-gold btn-lg">Apply for Next Session</Link>
        </div>
      </section>
    </div>
  );
}
