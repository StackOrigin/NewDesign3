import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { schoolProfile, facultyMembers } from '../../data/schoolData';

const values = [
  { roman: 'I', title: 'Scholastic Distinction', desc: 'Uncompromising academic rigor, critical inquiry, and individualized mentorship leading to historic board exam records.' },
  { roman: 'II', title: 'Integrity & Moral Courage', desc: 'Instilling classical Nepali values of honesty, empathy, civic responsibility, and unshakeable ethical character.' },
  { roman: 'III', title: 'Scientific & Creative Innovation', desc: 'Equipping scholars with hands-on robotics, AI coding, experimental laboratories, and visual arts expression.' },
  { roman: 'IV', title: 'Global Competence & Vision', desc: 'Preparing graduates who are grounded in their heritage yet seamlessly competitive at the world’s elite universities.' },
];

const milestones = [
  { year: '1994', title: 'Establishment of Excelsior Apex', desc: 'Founded with a pioneering vision to introduce modern student-centered pedagogy in Kathmandu Valley.' },
  { year: '2004', title: 'SEE Board Topper Distinction', desc: 'Secured #1 District Rank in national SLC/SEE board examinations, establishing our academic benchmark.' },
  { year: '2012', title: '15-Ropani Modern Campus Inauguration', desc: 'Relocated to purpose-built academic pavilions, Olympic sports courts, and university-grade laboratories.' },
  { year: '2018', title: 'Higher Secondary (+2) Science & Management', desc: 'Affiliated with NEB, launching specialized pre-medical, pre-engineering, and FinTech business divisions.' },
  { year: '2024', title: 'Historic 52 GPA 4.0 Achievers', desc: 'Celebrated national record of 52 students securing perfect 4.0 GPAs with over NPR 12M in university scholarships.' }
];

export default function About() {
  useScrollReveal();

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Heritage & Philosophy</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            About {schoolProfile.name}
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 640 }}>
            Over three decades of nurturing scholars of profound intellect, moral courage, and global leadership in Lalitpur, Nepal.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 60 }}>
            <div className="reveal">
              <span className="section-eyebrow">Our Legacy</span>
              <h2 className="section-title">A Tradition of Intellectual Mastery</h2>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 18 }}>
                Established in 1994, Excelsior Apex Academy was born from a transformative conviction: that true education must challenge the intellect while refining the human soul.
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 28 }}>
                Today, on our serene 15-ropani campus in Jawalakhel, we serve over 3,200 ambitious young scholars. Supported by 110+ master educators, our students consistently sweep national Olympiads, SEE board topper ranks, and admissions into top medical and engineering institutions worldwide.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/admissions" className="btn btn-primary">Join Our Community</Link>
                <Link to="/campus" className="btn btn-outline">Explore Campus Life</Link>
              </div>
            </div>

            <div className="reveal">
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid rgba(212, 175, 55, 0.25)' }}>
                <img
                  src="/images/campus-aerial.jpg"
                  alt="Excelsior Apex Campus"
                  style={{ width: '100%', height: 480, objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6, 13, 26, 0.95), transparent)', padding: '30px', color: '#ffffff' }}>
                  <span style={{ color: 'var(--gold-light)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Jawalakhel Campus, Lalitpur</span>
                  <h3 style={{ color: '#ffffff', margin: '4px 0 0', fontSize: '1.3rem' }}>15+ Ropanies of Purpose-Built Educational Splendor</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Pillars of Excellence</span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">Four foundational values that guide our pedagogical philosophy, faculty mentorship, and campus culture.</p>
          </div>

          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className="card reveal" style={{ padding: 32, transitionDelay: `${i * 80}ms`, borderTop: '4px solid var(--gold)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--gold-pale)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-serif)', marginBottom: 18 }}>
                  {v.roman}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Year Milestones Timeline */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Three Decades of Impact</span>
            <h2 className="section-title">Key Institutional Milestones</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 3, background: 'var(--gold)', borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {milestones.map((m, idx) => (
                <div key={idx} className="reveal" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', transitionDelay: `${idx * 70}ms` }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--navy)', border: '4px solid var(--gold)', marginLeft: 24, marginTop: 8, flexShrink: 0, zIndex: 2 }} />
                  <div className="card" style={{ padding: 28, flex: 1, background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold-dark)' }}>{m.year}</span>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', margin: 0 }}>{m.title}</h3>
                    </div>
                    <p style={{ color: 'var(--gray-500)', lineHeight: 1.65, fontSize: '0.92rem', margin: 0 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Academic Governance</span>
            <h2 className="section-title">Meet Our Executive Leadership</h2>
            <p className="section-subtitle">Distinguished educators with decades of global administrative, pedagogical, and research experience.</p>
          </div>

          <div className="grid-3">
            {facultyMembers.slice(0, 3).map((leader, i) => (
              <div key={leader.id} className="card reveal" style={{ padding: 32, textAlign: 'center', transitionDelay: `${i * 80}ms` }}>
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 18px', border: '3px solid var(--gold)' }} />
                ) : (
                  <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'var(--navy)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 800, margin: '0 auto 18px', border: '3px solid var(--gold)' }}>
                    {leader.initial}
                  </div>
                )}
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 4 }}>{leader.name}</h3>
                <p style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 0.8 }}>{leader.role}</p>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.88rem', margin: '12px 0 16px', lineHeight: 1.6 }}>{leader.bio}</p>
                <div style={{ fontSize: '0.8rem', color: 'var(--navy)', fontWeight: 600, background: 'var(--cream)', padding: '6px 12px', borderRadius: 'var(--radius-full)' }}>
                  {leader.qualification}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/faculty" className="btn btn-navy">View Full Faculty Directory ({facultyMembers.length}+ Teachers) →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
