import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './About.css';

const timeline = [
  { year: '1978', title: 'Foundation', desc: 'Excelsior Academy was founded by Dr. Eleanor Whitfield with a vision for world-class international education in New England.' },
  { year: '1985', title: 'IB Authorization', desc: 'Became one of the first schools in the United States to receive IB World School authorization for the Diploma Programme.' },
  { year: '1992', title: 'Campus Expansion', desc: 'Opened the Science & Innovation Complex and expanded campus to 45 acres, adding dormitories for international boarding students.' },
  { year: '2001', title: 'Global Recognition', desc: 'Received the National Blue Ribbon Award and NEASC accreditation. Launched partnerships with Oxford and MIT.' },
  { year: '2010', title: 'Digital Transformation', desc: 'Pioneered 1:1 technology program and smart classroom initiative, setting the standard for edtech integration in international schools.' },
  { year: '2018', title: 'Innovation Hub', desc: 'Opened the Whitfield Center for Innovation — a $28M facility housing robotics labs, biotech research, and design studios.' },
  { year: '2024', title: 'Century of Excellence', desc: 'Ranked #1 International School in the Northeast US. Celebrated 12,000+ alumni worldwide including Nobel laureates and world leaders.' },
];

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We pursue the highest standards in everything we do — academic, athletic, artistic, and personal.' },
  { icon: '🌍', title: 'Global Citizenship', desc: 'We embrace diversity and prepare students to thrive as responsible members of our interconnected world.' },
  { icon: '🤝', title: 'Integrity', desc: 'We uphold honesty, transparency, and ethical leadership in all our interactions and decisions.' },
  { icon: '💡', title: 'Innovation', desc: 'We cultivate curiosity, creative thinking, and the courage to challenge the status quo.' },
  { icon: '🌱', title: 'Sustainability', desc: 'We steward our planet with care, embedding environmental responsibility into our curriculum and campus.' },
  { icon: '❤️', title: 'Compassion', desc: 'We lead with empathy, serving our community and supporting one another through every challenge.' },
];

const leadership = [
  { name: 'Dr. James Whitfield', role: 'Principal & CEO', dept: 'Executive Leadership', initials: 'JW', color: '#1e4d9e' },
  { name: 'Dr. Amara Osei', role: 'Deputy Principal – Academics', dept: 'Academic Affairs', initials: 'AO', color: '#059669' },
  { name: 'Ms. Sarah Lancaster', role: 'Director of Admissions', dept: 'Enrollment & Admissions', initials: 'SL', color: '#7c3aed' },
  { name: 'Mr. Daniel Park', role: 'Dean of Students', dept: 'Student Affairs', initials: 'DP', color: '#dc2626' },
  { name: 'Dr. Priya Nair', role: 'Head of Curriculum', dept: 'Academic Development', initials: 'PN', color: '#0284c7' },
  { name: 'Ms. Rachel Torres', role: 'Director of Finance', dept: 'Finance & Operations', initials: 'RT', color: '#c9a84c' },
];

const achievements = [
  { icon: '🏆', number: '340+', label: 'Awards & Recognitions' },
  { icon: '📚', number: '#1', label: 'Northeast Ranking 2024' },
  { icon: '🎓', number: '98%', label: 'University Placement' },
  { icon: '🌐', number: '60+', label: 'Countries Represented' },
  { icon: '💰', number: '$2.4M', label: 'Scholarships Awarded' },
  { icon: '🔬', number: '15+', label: 'Research Partnerships' },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="about-page page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About Us</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Our Story</span>
          <h1>Shaping Futures Since 1978</h1>
          <p>Nearly five decades of academic excellence, global community, and transformative education.</p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section" id="principal">
        <div className="container">
          <div className="principal-grid">
            <div className="principal-img-wrap reveal-left">
              <div className="principal-img-frame">
                <div className="principal-avatar-large">JW</div>
                <div className="principal-quote-badge">
                  <span>"Education is the passport to the future"</span>
                </div>
              </div>
              <div className="principal-sig">
                <strong>Dr. James Whitfield</strong>
                <span>Principal & CEO</span>
                <span>M.Ed, PhD — Harvard University</span>
              </div>
            </div>
            <div className="principal-message reveal-right">
              <span className="section-label">A Message from Our Principal</span>
              <h2 className="section-title">Welcome to Excelsior</h2>
              <div className="gold-divider"/>
              <div className="principal-text">
                <p>
                  Welcome to Excelsior International Academy — a community where the boundaries 
                  of learning are limitless and the possibilities for every child are boundless. 
                  Since our founding in 1978, we have remained steadfast in our belief that 
                  education is not merely the transfer of knowledge, but the awakening of potential.
                </p>
                <p>
                  Our students come from over 60 countries, bringing with them a rich tapestry 
                  of cultures, languages, and perspectives. It is this diversity that makes our 
                  community extraordinary — and it is our responsibility to nurture each student's 
                  unique gifts while building the global competencies they will need to lead 
                  meaningful lives.
                </p>
                <p>
                  At Excelsior, academic excellence and character development are inseparable. 
                  We hold our students to the highest standards not because we demand perfection, 
                  but because we believe in their capacity to achieve it. Our world-class faculty, 
                  state-of-the-art facilities, and innovative curriculum provide the environment 
                  where brilliance can flourish.
                </p>
                <p>
                  I invite you to explore our campus, meet our community, and discover what 
                  makes Excelsior unlike any school in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section section--gray mvv-section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>

          <div className="mvv-cards">
            <div className="mvv-card mvv-mission reveal">
              <div className="mvv-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To inspire and empower every student with the knowledge, skills, creativity, 
                and values to lead meaningful, impactful lives and contribute positively to 
                local and global communities.
              </p>
            </div>
            <div className="mvv-card mvv-vision reveal delay-200">
              <div className="mvv-card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the world's most transformative learning community — where rigorous 
                academics meet human development, and where every student discovers their 
                extraordinary potential.
              </p>
            </div>
            <div className="mvv-card mvv-promise reveal delay-400">
              <div className="mvv-card-icon">🤝</div>
              <h3>Our Promise</h3>
              <p>
                We promise every student a safe, inclusive, and intellectually stimulating 
                environment where they are known, valued, and challenged to become their 
                best selves.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h3 className="values-title reveal">Core Values</h3>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                  <span className="value-icon">{v.icon}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section timeline-section" id="history">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">A Legacy of Excellence</h2>
            <p className="section-subtitle">
              From a small classroom in 1978 to one of North America's premier international schools — 
              our story is one of vision, dedication, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`} style={{transitionDelay: `${i * 0.1}s`}}>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="timeline-dot"/>
              </div>
            ))}
            <div className="timeline-line"/>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section section--gray" id="leadership">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">
              Guided by experienced educators and visionary leaders committed to our school's mission.
            </p>
          </div>
          <div className="leadership-grid">
            {leadership.map((l, i) => (
              <div key={i} className="leader-card reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                <div className="leader-avatar" style={{background: `linear-gradient(135deg, ${l.color}, ${l.color}99)`}}>
                  {l.initials}
                </div>
                <div className="leader-info">
                  <h4>{l.name}</h4>
                  <span className="leader-role">{l.role}</span>
                  <span className="leader-dept">{l.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">Awards & Achievements</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((a, i) => (
              <div key={i} className="achievement-card reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                <span className="achievement-icon">{a.icon}</span>
                <strong>{a.number}</strong>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section section--navy culture-section">
        <div className="container">
          <div className="culture-inner">
            <div className="reveal-left">
              <span className="section-label" style={{color:'var(--gold-light)'}}>School Culture</span>
              <h2 className="section-title" style={{color:'var(--white)'}}>More Than a School — A Family</h2>
              <div className="gold-divider"/>
              <p style={{color:'rgba(255,255,255,0.75)', lineHeight:'1.9', marginBottom:'24px'}}>
                At Excelsior, culture is everything. We've built a community where students 
                from every background feel at home, where teachers are mentors and champions, 
                and where every achievement — academic, artistic, athletic — is celebrated.
              </p>
              <p style={{color:'rgba(255,255,255,0.75)', lineHeight:'1.9', marginBottom:'32px'}}>
                Our traditions, from the annual International Culture Festival to the 
                Excelsior Honors Ceremony, create bonds that last a lifetime. Alumni return 
                for reunions not just out of nostalgia — but because this community shaped who they are.
              </p>
              <Link to="/student-life" className="btn btn-gold">Explore Student Life</Link>
            </div>
            <div className="culture-stats-grid reveal-right">
              {[
                { n:'60+', l:'Nationalities' },
                { n:'120+', l:'Clubs & Activities' },
                { n:'25+', l:'Sports Teams' },
                { n:'100%', l:'Student Participation' },
              ].map((s, i) => (
                <div key={i} className="culture-stat">
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
