import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './StudentLife.css';

const clubs = [
  { icon:'🤖', name:'Robotics Club', members:48, desc:'Design, build, and program robots for national competitions.' },
  { icon:'🎨', name:'Visual Arts Society', members:65, desc:'Painting, sculpture, digital art, and gallery exhibitions.' },
  { icon:'🌍', name:'Model United Nations', members:92, desc:'International diplomacy simulations and debate.' },
  { icon:'🎵', name:'Orchestra & Band', members:75, desc:'Classical, jazz, and contemporary music ensembles.' },
  { icon:'📰', name:'School Newspaper', members:38, desc:'Student-run journalism, photography, and media.' },
  { icon:'♟️', name:'Chess Club', members:42, desc:'Strategy, tournaments, and national competitions.' },
  { icon:'🧬', name:'Science Research', members:55, desc:'Lab-based research projects with faculty mentors.' },
  { icon:'💻', name:'Coding & AI Club', members:83, desc:'Python, web dev, machine learning, and hackathons.' },
  { icon:'🌿', name:'Environment Club', members:61, desc:'Sustainability initiatives and campus green projects.' },
  { icon:'🎭', name:'Drama Society', members:70, desc:'Theater productions, improv, and performing arts.' },
  { icon:'📸', name:'Photography Club', members:45, desc:'Digital photography, editing, and exhibitions.' },
  { icon:'🤝', name:'Community Service', members:110, desc:'Volunteering, fundraising, and social impact projects.' },
];

const sports = [
  { sport:'Soccer', icon:'⚽', achievement:'Regional Champions 2024' },
  { sport:'Basketball', icon:'🏀', achievement:'State Finalists 2024' },
  { sport:'Swimming', icon:'🏊', achievement:'12 National Medals' },
  { sport:'Tennis', icon:'🎾', achievement:'Northeast Champions' },
  { sport:'Athletics', icon:'🏃', achievement:'6 National Records' },
  { sport:'Baseball', icon:'⚾', achievement:'Division I Champions' },
  { sport:'Volleyball', icon:'🏐', achievement:'Conference Winners' },
  { sport:'Wrestling', icon:'🤼', achievement:'State Champions 2024' },
];

const events = [
  { month:'Sep', title:'Back to School Welcome Week', desc:'Orientation, ice-breakers, and campus exploration for all new students.' },
  { month:'Oct', title:'Excelsior Science Fair', desc:'Student research projects judged by university professors and industry experts.' },
  { month:'Nov', title:'International Cultural Festival', desc:'60+ nationalities showcase food, art, music, and traditions.' },
  { month:'Dec', title:'Winter Gala & Concert', desc:'Annual performing arts showcase featuring orchestra, drama, and dance.' },
  { month:'Feb', title:'Innovation Hackathon', desc:'48-hour challenge to solve real-world problems using technology.' },
  { month:'Mar', title:'Model UN Conference', desc:'3-day international relations simulation with 800+ student delegates.' },
  { month:'Apr', title:'Sports Day', desc:'Inter-house athletic competitions, games, and team spirit celebrations.' },
  { month:'Jun', title:'Graduation & Awards Ceremony', desc:'Celebrating academic excellence, achievement, and new beginnings.' },
];

export default function StudentLife() {
  useScrollReveal();

  return (
    <div className="student-life-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Student Life</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Life at Excelsior</span>
          <h1>More Than Just Academics</h1>
          <p>A vibrant, dynamic student community where passions are explored, friendships are formed, and leaders are made.</p>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="section" id="clubs">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Clubs & Activities</span>
            <h2 className="section-title">120+ Clubs for Every Interest</h2>
            <p className="section-subtitle">From robotics to drama, from chess to environmental activism — there's a place for every passion at Excelsior.</p>
          </div>
          <div className="clubs-grid">
            {clubs.map((club, i) => (
              <div key={i} className="club-card reveal" style={{transitionDelay:`${i * 0.06}s`}}>
                <span className="club-icon">{club.icon}</span>
                <div className="club-info">
                  <h4>{club.name}</h4>
                  <p>{club.desc}</p>
                  <span className="club-members">👥 {club.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="section section--gray" id="sports">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Athletics</span>
            <h2 className="section-title">Sports & Athletic Excellence</h2>
            <p className="section-subtitle">Our athletes compete at the highest levels while developing teamwork, discipline, and sportsmanship.</p>
          </div>
          <div className="sports-grid">
            {sports.map((s, i) => (
              <div key={i} className="sport-card reveal" style={{transitionDelay:`${i * 0.08}s`}}>
                <span className="sport-icon">{s.icon}</span>
                <h4>{s.sport}</h4>
                <span className="sport-achievement">{s.achievement}</span>
              </div>
            ))}
          </div>
          <div className="sports-banner reveal">
            <div className="sports-banner-content">
              <h3>Join a Team. Build a Legacy.</h3>
              <p>Our 25+ sports teams compete at regional, national, and international levels. Whether you're a seasoned athlete or just starting out, our coaches will help you reach your potential.</p>
            </div>
            <img src="https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500" alt="Students playing sports" loading="lazy"/>
          </div>
        </div>
      </section>

      {/* Arts & Creativity */}
      <section className="section" id="arts">
        <div className="container">
          <div className="arts-inner">
            <div className="arts-content reveal-left">
              <span className="section-label">Creativity</span>
              <h2 className="section-title">Arts & Creative Expression</h2>
              <div className="gold-divider"/>
              <p style={{color:'var(--gray-600)', lineHeight:'1.9', marginBottom:'24px'}}>
                Our performing and visual arts programs are among the finest in the region. 
                Students have access to professional-grade studios, equipment, and mentorship 
                from practicing artists and performers.
              </p>
              <div className="arts-list">
                {[
                  { icon:'🎭', title:'Drama & Theater', desc:'Annual productions in our 1,200-seat auditorium' },
                  { icon:'🎵', title:'Music & Orchestra', desc:'Classical training and contemporary ensembles' },
                  { icon:'💃', title:'Dance & Movement', desc:'Ballet, contemporary, hip-hop, and world dance' },
                  { icon:'🎨', title:'Visual Arts', desc:'Painting, sculpture, digital art, and photography' },
                ].map((a, i) => (
                  <div key={i} className="arts-item">
                    <span>{a.icon}</span>
                    <div>
                      <strong>{a.title}</strong>
                      <span>{a.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="arts-img-grid reveal-right">
              <img src="https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400" alt="Arts" loading="lazy"/>
              <img src="https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400" alt="Music" loading="lazy"/>
              <img src="https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400" alt="Reading" loading="lazy"/>
              <img src="https://images.pexels.com/photos/34162713/pexels-photo-34162713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400" alt="Students" loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Throughout the Year</span>
            <h2 className="section-title">Events & Celebrations</h2>
          </div>
          <div className="events-timeline">
            {events.map((ev, i) => (
              <div key={i} className="event-item reveal" style={{transitionDelay:`${i * 0.08}s`}}>
                <div className="event-month">{ev.month}</div>
                <div className="event-connector"/>
                <div className="event-content">
                  <h4>{ev.title}</h4>
                  <p>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Community Service */}
      <section className="section">
        <div className="container">
          <div className="leadership-programs-grid">
            <div className="reveal-left">
              <span className="section-label">Student Leadership</span>
              <h2 className="section-title">Developing Tomorrow's Leaders</h2>
              <div className="gold-divider"/>
              <p style={{color:'var(--gray-600)', lineHeight:'1.9', marginBottom:'24px'}}>
                Excelsior believes every student has leadership potential. Our student government, 
                prefect system, and leadership development programs give students real responsibility 
                and the skills to lead with confidence.
              </p>
              <div className="leadership-programs-list">
                {[
                  'Student Council & Government',
                  'House Prefect System',
                  'Peer Mentoring Program',
                  'Leadership Retreats',
                  'Entrepreneurship Boot Camp',
                  'Young Leaders Conference',
                ].map((l, i) => (
                  <div key={i} className="leadership-item">
                    <span>→</span> {l}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-label">Give Back</span>
              <h2 className="section-title">Community Service</h2>
              <div className="gold-divider"/>
              <p style={{color:'var(--gray-600)', lineHeight:'1.9', marginBottom:'24px'}}>
                Our CAS (Creativity, Activity, Service) program is at the heart of the IB experience. 
                Students contribute 150+ hours of meaningful community service, developing empathy 
                and global citizenship.
              </p>
              <div className="service-stats">
                <div className="service-stat">
                  <strong>15,000+</strong>
                  <span>Service Hours Annually</span>
                </div>
                <div className="service-stat">
                  <strong>40+</strong>
                  <span>Partner Organizations</span>
                </div>
                <div className="service-stat">
                  <strong>25</strong>
                  <span>Countries Impacted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
