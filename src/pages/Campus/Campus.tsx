import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Campus.css';

const facilities = [
  {
    icon: '🖥️',
    title: 'Smart Classrooms',
    desc: '85 fully equipped smart classrooms with 4K interactive displays, surround sound, and AI-assisted teaching tools for dynamic, engaging lessons.',
    features: ['4K Interactive Displays', 'AI Learning Assistants', 'Collaborative Workstations', 'Video Conferencing Ready'],
    img: 'https://images.pexels.com/photos/8423119/pexels-photo-8423119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '🔬',
    title: 'Science Laboratories',
    desc: '12 state-of-the-art labs covering biology, chemistry, physics, and environmental science with professional-grade equipment and safety systems.',
    features: ['Professional Equipment', 'Fume Hoods & Safety Systems', 'Digital Microscopes', 'Research-Grade Materials'],
    img: 'https://images.pexels.com/photos/34162713/pexels-photo-34162713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '💻',
    title: 'Computer Labs',
    desc: '6 computer labs with 300+ workstations, high-speed fiber internet, and industry-standard software for coding, design, and digital creation.',
    features: ['High-Performance Workstations', '1Gbps Fiber Connection', 'Industry Software Suite', '3D Printing Studio'],
    img: 'https://images.pexels.com/photos/37758635/pexels-photo-37758635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '📚',
    title: 'Library & Media Center',
    desc: 'A magnificent two-story library with 80,000+ books, digital resources, reading lounges, research rooms, and a dedicated media production studio.',
    features: ['80,000+ Physical Books', 'Digital Resource Access', 'Research Rooms', 'Media Production Studio'],
    img: 'https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '⚽',
    title: 'Sports Complex',
    desc: 'Olympic-standard facilities including a 400m track, FIFA-certified turf, aquatic center, tennis courts, gymnasium, and indoor sports halls.',
    features: ['Olympic 400m Track', 'FIFA Certified Turf', '50m Aquatic Center', 'Indoor Gymnasium'],
    img: 'https://images.pexels.com/photos/36393288/pexels-photo-36393288.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '🎭',
    title: 'Performing Arts Center',
    desc: 'A 1,200-seat professional auditorium, drama studios, music practice rooms, recording studio, and black box theater for creative expression.',
    features: ['1,200-Seat Auditorium', 'Professional Recording Studio', 'Drama & Dance Studios', 'Black Box Theater'],
    img: 'https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '🍽️',
    title: 'Cafeteria & Dining',
    desc: 'A modern, spacious dining hall serving international cuisines prepared by qualified chefs, with nutrition-conscious menus for every dietary need.',
    features: ['International Cuisine Options', 'Certified Nutritional Menus', 'Allergen-Free Stations', 'Student Dining Lounge'],
    img: 'https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '🚌',
    title: 'Transportation',
    desc: 'Safe, GPS-tracked school buses covering major routes with trained drivers, attendants, and real-time tracking accessible to parents.',
    features: ['GPS-Tracked Buses', 'Trained Drivers & Attendants', 'Parent Tracking App', 'Air-Conditioned Fleet'],
    img: 'https://images.pexels.com/photos/7406300/pexels-photo-7406300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: '🏠',
    title: 'Boarding Facilities',
    desc: 'Premium on-campus boarding for international students with fully furnished rooms, 24/7 supervision, counseling support, and a homelike environment.',
    features: ['Fully Furnished Rooms', '24/7 Supervision', 'Wellness & Counseling', 'Common Room & Recreation'],
    img: 'https://images.pexels.com/photos/32641542/pexels-photo-32641542.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

const campusStats = [
  { number: '45', unit: 'Acres', label: 'Campus Area' },
  { number: '28', unit: 'Buildings', label: 'On Campus' },
  { number: '85', unit: 'Rooms', label: 'Smart Classrooms' },
  { number: '12', unit: 'Labs', label: 'Science Labs' },
];

export default function Campus() {
  useScrollReveal();

  return (
    <div className="campus-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Campus & Facilities</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Our Campus</span>
          <h1>World-Class Facilities</h1>
          <p>A 45-acre campus designed to inspire curiosity, creativity, and academic achievement at every turn.</p>
        </div>
      </section>

      {/* Campus Stats */}
      <section className="campus-stats-bar">
        <div className="container">
          <div className="campus-stats-grid">
            {campusStats.map((s, i) => (
              <div key={i} className="campus-stat-item">
                <span className="campus-stat-num">{s.number}</span>
                <span className="campus-stat-unit">{s.unit}</span>
                <span className="campus-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Premium Facilities</span>
            <h2 className="section-title">Everything a Student Needs to Thrive</h2>
            <p className="section-subtitle">
              Every facility at Excelsior is designed with student success in mind — 
              from cutting-edge labs to inspiring creative spaces and world-class athletics.
            </p>
          </div>
          <div className="facilities-detail-grid">
            {facilities.map((f, i) => (
              <div key={i} className={`facility-detail-card reveal ${i % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="facility-detail-img">
                  <img src={f.img} alt={f.title} loading="lazy"/>
                  <div className="facility-detail-overlay">
                    <span className="facility-detail-icon">{f.icon}</span>
                  </div>
                </div>
                <div className="facility-detail-info">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="facility-features">
                    {f.features.map((feat, j) => (
                      <div key={j} className="facility-feature">
                        <span>✓</span> {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section section--navy">
        <div className="container">
          <div className="virtual-tour-inner">
            <div className="reveal-left">
              <span className="section-label" style={{color:'var(--gold-light)'}}>See it for Yourself</span>
              <h2 className="section-title" style={{color:'var(--white)'}}>Schedule a Campus Visit</h2>
              <div className="gold-divider"/>
              <p style={{color:'rgba(255,255,255,0.75)', lineHeight:'1.9', marginBottom:'28px'}}>
                Nothing compares to experiencing the Excelsior campus in person. 
                Schedule a guided tour with our admissions team and see why families 
                from around the world choose us.
              </p>
              <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
                <Link to="/contact" className="btn btn-gold">Book a Tour</Link>
                <Link to="/admissions" className="btn btn-outline">Apply Now</Link>
              </div>
            </div>
            <div className="campus-quick-facts reveal-right">
              {[
                { icon:'🌡️', fact:'Climate-controlled throughout' },
                { icon:'♿', fact:'Fully accessible campus' },
                { icon:'🔒', fact:'24/7 security & CCTV' },
                { icon:'🌿', fact:'LEED certified green campus' },
                { icon:'📶', fact:'Campus-wide high-speed WiFi' },
                { icon:'🏥', fact:'On-campus medical center' },
              ].map((f, i) => (
                <div key={i} className="quick-fact">
                  <span>{f.icon}</span>
                  <span>{f.fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
