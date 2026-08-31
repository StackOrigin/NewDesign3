import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { schoolProfile } from '../../data/schoolData';

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Admissions & Inquiries</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Contact Excelsior Apex
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 640 }}>
            We welcome prospective families, education partners, and alumni. Reach out to schedule a campus tour or consult with admissions.
          </p>
        </div>
      </section>

      {/* Info Cards Strip */}
      <section style={{ background: 'var(--navy-deep)', color: '#ffffff', padding: '50px 0', borderBottom: '2px solid var(--gold)' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { label: 'Campus Address', title: 'Location', desc: schoolProfile.address },
              { label: 'Direct Hotline', title: 'Admissions Desk', desc: `${schoolProfile.phone} / ${schoolProfile.altPhone}` },
              { label: 'Official Enquiries', title: 'Email Inquiries', desc: schoolProfile.email },
              { label: 'Reception Schedule', title: 'Visiting Hours', desc: schoolProfile.hours },
            ].map((card, i) => (
              <div key={i} className="card reveal" style={{ background: 'rgba(22, 47, 86, 0.75)', borderColor: 'rgba(212, 175, 55, 0.2)', padding: 26, textAlign: 'center', transitionDelay: `${i * 70}ms` }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--gold-light)', display: 'block', marginBottom: 8 }}>{card.label}</span>
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: 6 }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: 1.5 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Google Maps Grid */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 50, alignItems: 'start' }}>
            {/* Form */}
            <div className="card reveal" style={{ padding: 44, boxShadow: 'var(--shadow-md)', background: '#ffffff', borderTop: '5px solid var(--gold)' }}>
              <span className="section-eyebrow">Direct Message</span>
              <h2 style={{ fontSize: '1.9rem', color: 'var(--navy)', marginBottom: 8 }}>Send an Inquiry</h2>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', marginBottom: 28 }}>
                Our administrative staff responds to all inquiries within one working day.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Your Full Name *</label>
                    <input type="text" required placeholder="Full Name" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Email Address *</label>
                    <input type="email" required placeholder="name@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Contact Phone *</label>
                    <input type="tel" required placeholder="Phone Number" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Inquiry Subject *</label>
                    <select required style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none', background: '#fff' }}>
                      <option value="">Select Category</option>
                      <option>Admissions Inquiry (2025–26)</option>
                      <option>Campus Walkthrough & Tour Booking</option>
                      <option>Scholarship Assessment</option>
                      <option>Academic Transcript Verification</option>
                      <option>Career Vacancy Inquiry</option>
                      <option>General Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Message / Question *</label>
                  <textarea rows={4} required placeholder="Please write your detailed inquiry or requested tour date here..." style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none', resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                  Submit Official Inquiry →
                </button>
              </form>

              {submitted && (
                <div style={{ marginTop: 18, padding: '14px 20px', borderRadius: 8, background: '#059669', color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>
                  Thank you! Your message has been routed to our admissions desk. We will reach out shortly.
                </div>
              )}
            </div>

            {/* Google Map & Directions */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14134.6!2d85.312!3d27.674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJawalakhel%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v123456789"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Excelsior Apex Campus Location"
                />
              </div>

              <div className="card" style={{ padding: 32, background: '#ffffff' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: 14 }}>Visiting Guidelines</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>
                  Visitors are requested to check in at Gate 1 Reception with a valid photo ID. Visitor parking is available inside the main entrance pavilion.
                </p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Link to="/virtual-tour" className="btn btn-navy btn-sm">Explore Virtual Tour</Link>
                  <Link to="/admissions" className="btn btn-outline btn-sm">Apply for Admission</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
