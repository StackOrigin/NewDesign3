import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Academics.css';

const programs = [
  {
    id: 'primary',
    level: 'Primary Education',
    grades: 'Kindergarten – Grade 5',
    icon: '🌱',
    color: '#059669',
    desc: 'Our Primary Years Programme (PYP) fosters inquiry, independence, and a love of learning through transdisciplinary themes and real-world connections.',
    subjects: ['Language Arts & Literacy', 'Mathematics & Logic', 'Science & Nature', 'Social Studies', 'Arts & Music', 'Physical Education', 'Digital Literacy', 'World Languages'],
    outcomes: ['Strong foundational skills', 'Curiosity and creativity', 'Social and emotional intelligence', 'Basic global awareness'],
  },
  {
    id: 'secondary',
    level: 'Secondary Education',
    grades: 'Grade 6 – Grade 8',
    icon: '📐',
    color: '#0284c7',
    desc: 'The Middle Years Programme (MYP) builds on primary foundations, developing analytical thinking, interdisciplinary connections, and community engagement.',
    subjects: ['Advanced Mathematics', 'Sciences (Biology, Chemistry, Physics)', 'Humanities & Geography', 'Literature & Language', 'Second/Third Languages', 'Design & Technology', 'Arts (Visual, Performing)', 'Physical & Health Education'],
    outcomes: ['Critical and creative thinking', 'Intercultural understanding', 'Self-management skills', 'Research and communication'],
  },
  {
    id: 'higher',
    level: 'Higher Secondary',
    grades: 'Grade 9 – Grade 12',
    icon: '🎓',
    color: '#7c3aed',
    desc: 'The IB Diploma Programme (IBDP) and Advanced Placement (AP) tracks prepare students for the world\'s most selective universities with rigorous academic challenge.',
    subjects: ['IB Diploma Programme', 'Advanced Placement (AP) Courses', 'Extended Essay Research', 'Theory of Knowledge', 'Calculus & Advanced Math', 'AP Sciences', 'University Preparation', 'Leadership & Service'],
    outcomes: ['University acceptance 98%', 'Global recognition', 'Independent research skills', 'Executive leadership qualities'],
  },
];

const methodology = [
  { icon: '🔍', title: 'Inquiry-Based Learning', desc: 'Students explore questions, investigate problems, and construct knowledge through guided discovery.' },
  { icon: '🤝', title: 'Collaborative Projects', desc: 'Team-based assignments develop communication, leadership, and cross-cultural competencies.' },
  { icon: '💻', title: 'Technology Integration', desc: '1:1 device program with AI tools, coding, and digital citizenship woven throughout the curriculum.' },
  { icon: '🌍', title: 'Global Perspective', desc: 'Every subject is taught through a lens of international-mindedness and cultural awareness.' },
  { icon: '🎨', title: 'Creative Thinking', desc: 'Design thinking workshops, maker spaces, and arts integration fuel innovation across disciplines.' },
  { icon: '📊', title: 'Data-Driven Assessment', desc: 'Regular formative and summative assessments guide personalized learning paths for each student.' },
];

const calendar = [
  { period: 'August–September', event: 'Back to School & Orientation Week' },
  { period: 'October', event: 'Mid-Term Examinations' },
  { period: 'November', event: 'Parent-Teacher Conferences' },
  { period: 'December', event: 'Winter Break & Holiday Celebrations' },
  { period: 'January', event: 'Second Semester Begins' },
  { period: 'February', event: 'Science & Innovation Fair' },
  { period: 'March', event: 'Model United Nations Conference' },
  { period: 'April', event: 'Spring Break' },
  { period: 'May', event: 'IB/AP Examinations' },
  { period: 'June', event: 'Graduation & Awards Ceremony' },
];

export default function Academics() {
  useScrollReveal();

  return (
    <div className="academics-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Academics</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Academic Programs</span>
          <h1>A World-Class Curriculum</h1>
          <p>Internationally accredited programs designed to challenge every student and prepare them for the world's top universities.</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section" id="curriculum">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Curriculum Overview</h2>
            <p className="section-subtitle">
              Excelsior follows the International Baccalaureate (IB) framework integrated with 
              Advanced Placement (AP) courses, creating a uniquely powerful academic experience.
            </p>
          </div>

          <div className="curriculum-overview-grid">
            <div className="curr-feature reveal">
              <span className="curr-icon">🌐</span>
              <h3>International Baccalaureate</h3>
              <p>IB World School offering PYP, MYP, and IBDP programs — recognized by universities worldwide as the gold standard in secondary education.</p>
            </div>
            <div className="curr-feature reveal delay-200">
              <span className="curr-icon">🎯</span>
              <h3>Advanced Placement</h3>
              <p>35+ AP courses offering university-level academic challenge with globally recognized examinations that earn college credit at top institutions.</p>
            </div>
            <div className="curr-feature reveal delay-400">
              <span className="curr-icon">🏆</span>
              <h3>NEASC Accreditation</h3>
              <p>Full accreditation from the New England Association of Schools and Colleges ensures our programs meet the highest standards of academic quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="section section--gray" id="primary">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Education Pathways</span>
            <h2 className="section-title">Programs for Every Stage</h2>
          </div>
          {programs.map((prog, i) => (
            <div key={prog.id} id={prog.id} className={`program-detail ${i % 2 !== 0 ? 'reverse' : ''} reveal`}>
              <div className="prog-visual" style={{background: `linear-gradient(135deg, ${prog.color}22, ${prog.color}11)`}}>
                <div className="prog-icon-large" style={{background: prog.color}}>
                  {prog.icon}
                </div>
                <div className="prog-outcomes">
                  <h4>Key Outcomes</h4>
                  {prog.outcomes.map((o, j) => (
                    <div key={j} className="prog-outcome">
                      <span className="outcome-check">✓</span>
                      {o}
                    </div>
                  ))}
                </div>
              </div>
              <div className="prog-info">
                <span className="prog-grade-tag">{prog.grades}</span>
                <h2 className="section-title">{prog.level}</h2>
                <div className="gold-divider"/>
                <p style={{color:'var(--gray-600)', lineHeight:'1.9', marginBottom:'24px'}}>{prog.desc}</p>
                <h4 style={{marginBottom:'12px', fontSize:'15px', fontFamily:'var(--font-sans)'}}>Core Subjects:</h4>
                <div className="subjects-grid">
                  {prog.subjects.map((s, j) => (
                    <span key={j} className="subject-tag">{s}</span>
                  ))}
                </div>
                <Link to="/admissions" className="btn btn-primary" style={{marginTop:'28px'}}>
                  Apply for This Program
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">How We Teach</span>
            <h2 className="section-title">Learning Methodology</h2>
            <p className="section-subtitle">
              Our teaching philosophy goes beyond content delivery — we build thinkers, 
              creators, and global citizens.
            </p>
          </div>
          <div className="method-grid">
            {methodology.map((m, i) => (
              <div key={i} className="method-card reveal" style={{transitionDelay:`${i * 0.1}s`}}>
                <span className="method-icon">{m.icon}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section section--gray" id="calendar">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Planning Ahead</span>
            <h2 className="section-title">Academic Calendar 2025–2026</h2>
          </div>
          <div className="calendar-grid">
            {calendar.map((c, i) => (
              <div key={i} className="calendar-item reveal" style={{transitionDelay:`${i * 0.08}s`}}>
                <div className="calendar-period">{c.period}</div>
                <div className="calendar-event">{c.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Opportunities */}
      <section className="section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Beyond the Classroom</span>
            <h2 className="section-title">Extra Learning Opportunities</h2>
          </div>
          <div className="extra-grid">
            {[
              { icon:'🔬', title:'Research Program', desc:'Students partner with MIT and Harvard on real scientific research from Grade 10.' },
              { icon:'🏛️', title:'Model UN', desc:'Annual participation in Harvard HMUN and NAIMUN international conferences.' },
              { icon:'🌿', title:'Environmental Club', desc:'Student-led sustainability initiatives with real campus implementation.' },
              { icon:'💼', title:'Business Academy', desc:'Student-run companies with mentorship from industry leaders and entrepreneurs.' },
              { icon:'🎭', title:'Performing Arts', desc:'Drama, orchestra, choir, and dance programs with annual professional productions.' },
              { icon:'🚀', title:'Space & STEM Club', desc:'Robotics, coding bootcamps, and NASA STEM challenge competitions.' },
            ].map((e, i) => (
              <div key={i} className="extra-card reveal" style={{transitionDelay:`${i * 0.1}s`}}>
                <span>{e.icon}</span>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
