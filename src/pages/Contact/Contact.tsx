import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Contact.css';

const departments = [
  { icon:'🎓', name:'Admissions Office', email:'admissions@excelsior.edu', phone:'+1 (800) 395-4201' },
  { icon:'📚', name:'Academic Affairs', email:'academics@excelsior.edu', phone:'+1 (800) 395-4202' },
  { icon:'💰', name:'Finance Office', email:'finance@excelsior.edu', phone:'+1 (800) 395-4203' },
  { icon:'🏠', name:'Boarding & Welfare', email:'boarding@excelsior.edu', phone:'+1 (800) 395-4204' },
  { icon:'⚽', name:'Sports Department', email:'sports@excelsior.edu', phone:'+1 (800) 395-4205' },
  { icon:'🎭', name:'Arts Department', email:'arts@excelsior.edu', phone:'+1 (800) 395-4206' },
];

const socialLinks = [
  { icon:'𝕏', name:'Twitter/X', handle:'@excelsioracademy', href:'#' },
  { icon:'in', name:'LinkedIn', handle:'Excelsior International', href:'#' },
  { icon:'f', name:'Facebook', handle:'ExcelsiorAcademy', href:'#' },
  { icon:'▶', name:'YouTube', handle:'Excelsior Academy', href:'#' },
  { icon:'◉', name:'Instagram', handle:'@excelsior_academy', href:'#' },
];

export default function Contact() {
  useScrollReveal();
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', subject:'', department:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Get in Touch</span>
          <h1>We're Here to Help</h1>
          <p>Our team is ready to answer your questions. Reach us by phone, email, or visit us on campus.</p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="contact-quick-bar">
        <div className="container">
          <div className="quick-contact-grid">
            <div className="quick-contact-item">
              <span className="qc-icon">📞</span>
              <div>
                <strong>Main Switchboard</strong>
                <a href="tel:+18003954200">+1 (800) 395-4200</a>
              </div>
            </div>
            <div className="quick-contact-item">
              <span className="qc-icon">✉️</span>
              <div>
                <strong>General Enquiries</strong>
                <a href="mailto:info@excelsior.edu">info@excelsior.edu</a>
              </div>
            </div>
            <div className="quick-contact-item">
              <span className="qc-icon">📍</span>
              <div>
                <strong>Campus Address</strong>
                <span>128 Academy Drive, Boston, MA 02134</span>
              </div>
            </div>
            <div className="quick-contact-item">
              <span className="qc-icon">🕐</span>
              <div>
                <strong>Office Hours</strong>
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-section reveal-left">
              <span className="section-label">Send a Message</span>
              <h2 className="section-title">Contact Us</h2>
              <div className="gold-divider"/>

              {submitted && (
                <div className="form-success">
                  <span>✅</span>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. Our team will respond within 1–2 business days.</p>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="your@email.com" required
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 (000) 000-0000"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Department *</label>
                    <select required value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})}>
                      <option value="">Select Department</option>
                      {departments.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input type="text" placeholder="What is your message about?" required
                    value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea placeholder="Write your message here..." rows={5} required
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%', justifyContent:'center'}}>
                  Send Message
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
                </button>
              </form>
            </div>

            {/* Contact Info Panel */}
            <div className="contact-info-panel reveal-right">
              {/* Map Placeholder */}
              <div className="map-section">
                <div className="map-placeholder">
                  <div className="map-overlay-content">
                    <span>📍</span>
                    <h4>Excelsior International Academy</h4>
                    <p>128 Academy Drive<br/>Cambridge Heights, Boston<br/>MA 02134, USA</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-gold btn-sm">
                      Open in Google Maps
                    </a>
                  </div>
                  <div className="map-grid-bg"/>
                </div>
              </div>

              {/* Directions */}
              <div className="directions-box">
                <h4>Getting Here</h4>
                <div className="direction-items">
                  <div className="direction-item">
                    <span>🚆</span>
                    <div><strong>By Train</strong><p>Cambridge Heights Station (Red Line) — 5 min walk</p></div>
                  </div>
                  <div className="direction-item">
                    <span>🚌</span>
                    <div><strong>By Bus</strong><p>Routes 34, 56, 78 stop at Academy Drive</p></div>
                  </div>
                  <div className="direction-item">
                    <span>🚗</span>
                    <div><strong>By Car</strong><p>Free visitor parking available on campus (Gate 2)</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Reach the Right Team</span>
            <h2 className="section-title">Department Contacts</h2>
          </div>
          <div className="departments-grid">
            {departments.map((dept, i) => (
              <div key={i} className="dept-card reveal" style={{transitionDelay:`${i * 0.08}s`}}>
                <span className="dept-icon">{dept.icon}</span>
                <h4>{dept.name}</h4>
                <a href={`mailto:${dept.email}`} className="dept-email">{dept.email}</a>
                <a href={`tel:${dept.phone.replace(/\D/g,'')}`} className="dept-phone">{dept.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Follow Us</span>
            <h2 className="section-title">Connect on Social Media</h2>
            <p className="section-subtitle">Follow Excelsior for daily updates, student highlights, and community stories.</p>
          </div>
          <div className="social-cards-grid">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className="social-card reveal" style={{transitionDelay:`${i * 0.1}s`}}>
                <span className="social-card-icon">{s.icon}</span>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.handle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
