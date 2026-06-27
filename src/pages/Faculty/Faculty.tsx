import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Faculty.css';

const departments = ['All', 'Mathematics', 'Sciences', 'Humanities', 'Languages', 'Arts', 'Physical Education', 'Technology'];

const faculty = [
  { name: 'Dr. Eleanor Marsh', role: 'Head of Mathematics', dept: 'Mathematics', edu: 'PhD Mathematics, MIT', exp: '18 yrs', initials: 'EM', color: '#1e4d9e', philosophy: 'Math is the language of the universe — I teach students to speak it fluently.' },
  { name: 'Prof. Aisha Karimova', role: 'Senior Science Teacher', dept: 'Sciences', edu: 'MSc Chemistry, Cambridge', exp: '14 yrs', initials: 'AK', color: '#059669', philosophy: 'Every experiment is an adventure. Science is curiosity made systematic.' },
  { name: 'Mr. Thomas Bennett', role: 'Head of English', dept: 'Humanities', edu: 'MA English Literature, Oxford', exp: '20 yrs', initials: 'TB', color: '#7c3aed', philosophy: 'Great writing begins with great reading. I help students find their voice.' },
  { name: 'Dr. Yuki Tanaka', role: 'Physics & AP Coordinator', dept: 'Sciences', edu: 'PhD Physics, Tokyo University', exp: '16 yrs', initials: 'YT', color: '#0284c7', philosophy: 'Physics is everywhere. From sports to smartphones — I make it visible.' },
  { name: 'Ms. Sophie Laurent', role: 'French & IB French Teacher', dept: 'Languages', edu: 'MA Linguistics, Sorbonne', exp: '11 yrs', initials: 'SL', color: '#dc2626', philosophy: 'Language learning is culture learning — and culture is empathy in practice.' },
  { name: 'Dr. Marcus Chen', role: 'Head of Technology', dept: 'Technology', edu: 'PhD Computer Science, Stanford', exp: '13 yrs', initials: 'MC', color: '#c9a84c', philosophy: 'The best code solves real problems for real people — I teach students to build for impact.' },
  { name: 'Ms. Priya Menon', role: 'Visual Arts Lead', dept: 'Arts', edu: 'MFA Fine Arts, RISD', exp: '9 yrs', initials: 'PM', color: '#e11d48', philosophy: 'Art is not talent — it is seeing the world differently and sharing that vision.' },
  { name: 'Mr. James Okafor', role: 'History & TOK Teacher', dept: 'Humanities', edu: 'MA History, Yale University', exp: '15 yrs', initials: 'JO', color: '#b45309', philosophy: 'Understanding the past is the only reliable compass for navigating the future.' },
  { name: 'Dr. Lena Hoffmann', role: 'Biology & IB Coordinator', dept: 'Sciences', edu: 'PhD Biology, Heidelberg', exp: '12 yrs', initials: 'LH', color: '#059669', philosophy: 'Biology is life itself. I want my students to see science as a living, breathing story.' },
  { name: 'Mr. Ricardo Silva', role: 'Physical Education Head', dept: 'Physical Education', edu: 'BSc Sports Science, USP', exp: '10 yrs', initials: 'RS', color: '#1e4d9e', philosophy: 'Physical education is mental education. A fit body nurtures a resilient mind.' },
  { name: 'Ms. Naomi Park', role: 'Music & Performing Arts', dept: 'Arts', edu: 'MM Performance, Juilliard', exp: '8 yrs', initials: 'NP', color: '#7c3aed', philosophy: 'Music builds confidence, discipline, and empathy — skills for all of life.' },
  { name: 'Dr. Ivan Petrov', role: 'Advanced Mathematics', dept: 'Mathematics', edu: 'PhD Applied Math, Moscow', exp: '17 yrs', initials: 'IP', color: '#0284c7', philosophy: 'Every student who believes they cannot do math simply hasn\'t found the right approach — yet.' },
];

export default function Faculty() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? faculty : faculty.filter(f => f.dept === activeFilter);

  return (
    <div className="faculty-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Faculty</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Our Educators</span>
          <h1>Meet Our Distinguished Faculty</h1>
          <p>World-class educators from leading universities, bringing expertise, passion, and global perspective to every classroom.</p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="faculty-stats-bar">
        <div className="container">
          <div className="faculty-stats-inner">
            {[
              { num:'280+', label:'Faculty Members' },
              { num:'45+', label:'Nationalities Represented' },
              { num:'78%', label:'Hold Advanced Degrees' },
              { num:'14 yrs', label:'Average Experience' },
              { num:'95%', label:'IB/AP Certified' },
            ].map((s, i) => (
              <div key={i} className="faculty-stat">
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Faculty by Department</h2>
          </div>
          <div className="faculty-filters reveal">
            {departments.map(dept => (
              <button
                key={dept}
                className={`filter-btn ${activeFilter === dept ? 'active' : ''}`}
                onClick={() => setActiveFilter(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="faculty-grid">
            {filtered.map((f, i) => (
              <div key={`${f.name}-${i}`} className="faculty-card reveal" style={{transitionDelay:`${(i % 6) * 0.08}s`}}>
                <div className="faculty-card-top" style={{background:`linear-gradient(135deg, ${f.color}, ${f.color}bb)`}}>
                  <div className="faculty-avatar">{f.initials}</div>
                </div>
                <div className="faculty-card-body">
                  <h4>{f.name}</h4>
                  <span className="faculty-role">{f.role}</span>
                  <div className="faculty-meta">
                    <span>🎓 {f.edu}</span>
                    <span>⏱ {f.exp} Experience</span>
                  </div>
                  <div className="faculty-philosophy">
                    <span className="philosophy-icon">"</span>
                    <p>{f.philosophy}</p>
                  </div>
                  <span className="faculty-dept-badge">{f.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Our Teaching Philosophy</h2>
            <p className="section-subtitle">At Excelsior, our educators are more than content experts — they are mentors, coaches, and lifelong learners themselves.</p>
          </div>
          <div className="philosophy-grid">
            {[
              { icon:'🧠', title:'Student-Centered Learning', desc:'Every lesson is designed around student needs, learning styles, and real-world application.' },
              { icon:'🔗', title:'Cross-Disciplinary Connections', desc:'Our faculty collaborates across subjects to create integrated, meaningful learning experiences.' },
              { icon:'📊', title:'Data-Informed Instruction', desc:'Regular assessment data guides personalized support and targeted intervention for each student.' },
              { icon:'🌱', title:'Growth Mindset Culture', desc:'We teach students that intelligence grows with effort, and mistakes are essential to learning.' },
            ].map((p, i) => (
              <div key={i} className="philosophy-card reveal" style={{transitionDelay:`${i * 0.12}s`}}>
                <span>{p.icon}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Faculty CTA */}
      <section className="section join-faculty-section">
        <div className="container">
          <div className="join-faculty-inner reveal">
            <div>
              <span className="section-label">Career Opportunities</span>
              <h2 className="section-title">Join Our World-Class Team</h2>
              <p style={{color:'var(--gray-600)', lineHeight:'1.9', marginBottom:'28px'}}>
                We're always looking for passionate, qualified educators who share our commitment 
                to academic excellence and student development. Explore current openings.
              </p>
              <Link to="/contact" className="btn btn-primary">View Open Positions</Link>
            </div>
            <div className="join-benefits">
              {[
                '🌍 International community of educators',
                '📚 Continuous professional development',
                '💰 Competitive compensation & benefits',
                '🏠 Relocation support for international faculty',
                '🎓 Free education for faculty children',
                '✈️ Annual travel allowance',
              ].map((b, i) => (
                <div key={i} className="join-benefit">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
