import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { faqCategories } from '../../data/schoolData';

const steps = [
  { num: '01', title: 'Online Inquiry & Counseling', desc: 'Submit our streamlined digital inquiry form or visit our Jawalakhel admissions office to consult with senior academic counselors.', time: 'Step 1' },
  { num: '02', title: 'Application & Portfolio Submission', desc: 'Submit the formal application form along with past 2 years terminal marksheets, birth certificate, and character certificate.', time: 'Step 2' },
  { num: '03', title: 'Scholastic Aptitude Assessment', desc: 'Applicants sit for a diagnostic aptitude test assessing English literacy, mathematical reasoning, and logical problem-solving.', time: 'Step 3' },
  { num: '04', title: 'Formal Interaction & Enrollment', desc: 'Successful scholars and their families attend a final alignment interview with the Principal, followed by welcome package issuance.', time: 'Step 4' },
];

const feeStructure = [
  { level: 'Early Childhood & Montessori', admission: 'Rs. 18,000', monthly: 'Rs. 7,500', term: 'Rs. 4,500', includes: ['Montessori materials', 'Midday organic snacks', 'Sensory activities'] },
  { level: 'Primary School (Grade 1–5)', admission: 'Rs. 22,000', monthly: 'Rs. 9,200', term: 'Rs. 5,500', includes: ['Robotics lab access', 'Visual arts supplies', 'Sports coaching'] },
  { level: 'Lower Secondary (Grade 6–8)', admission: 'Rs. 25,000', monthly: 'Rs. 10,800', term: 'Rs. 6,500', includes: ['Science practical kits', 'MUN & debating club', 'ICT workstations'] },
  { level: 'Secondary (SEE Board 9–10)', admission: 'Rs. 28,000', monthly: 'Rs. 12,500', term: 'Rs. 7,500', includes: ['SEE topper bootcamps', 'Mock board tests', 'Career psychometrics'] },
  { level: 'Higher Secondary (+2 Science)', admission: 'Rs. 32,000', monthly: 'Rs. 14,000', term: 'Rs. 8,500', includes: ['Medical/Engg entrance coaching', 'Research laboratory access', 'College counseling'] },
  { level: 'Higher Secondary (+2 Management)', admission: 'Rs. 30,000', monthly: 'Rs. 13,000', term: 'Rs. 8,000', includes: ['FinTech simulations', 'CA foundation modules', 'Corporate mentorship'] },
];

export default function Admissions() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="admissions-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Academic Session 2025–26</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Admissions & Enrollment
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            Join a prestigious community of learners, visionary thinkers, and ethical leaders. Explore our transparent entry process and fee schedule.
          </p>
        </div>
      </section>

      {/* 4-Step Process Strip */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">The Journey to Excelsior</span>
            <h2 className="section-title">Four-Step Admission Process</h2>
            <p className="section-subtitle">We make enrolling your child an inspiring, transparent, and supportive journey.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
            {steps.map((st, i) => (
              <div key={i} className="card reveal" style={{ padding: 36, position: 'relative', background: '#ffffff', transitionDelay: `${i * 80}ms` }}>
                <div style={{ position: 'absolute', top: -14, left: 28, background: 'var(--gold-gradient)', color: 'var(--navy-deep)', fontWeight: 800, padding: '4px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                  {st.num}
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', display: 'block', marginTop: 8 }}>{st.time}</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', margin: '8px 0 10px' }}>{st.title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65 }}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form & Checklist */}
      <section className="section section-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 50, alignItems: 'start' }}>
            <div className="card reveal" style={{ padding: 44, boxShadow: 'var(--shadow-md)', borderTop: '5px solid var(--gold)' }}>
              <span className="section-eyebrow">Direct Portal</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: 8 }}>Online Admission Inquiry</h2>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', marginBottom: 24 }}>
                Fill out the form below to reserve an entrance examination seat and receive our digital prospectus.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Student Full Name *</label>
                    <input type="text" required placeholder="e.g. Aavash Sharma" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Applying For Grade *</label>
                    <select required style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none', background: '#fff' }}>
                      <option value="">Select Grade</option>
                      <option>Pre-Primary / Montessori</option>
                      <option>Grade 1 – 5 (Primary)</option>
                      <option>Grade 6 – 8 (Lower Secondary)</option>
                      <option>Grade 9 – 10 (Secondary SEE)</option>
                      <option>Grade 11 (+2 Science)</option>
                      <option>Grade 11 (+2 Management)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Parent / Guardian Name *</label>
                    <input type="text" required placeholder="e.g. Dr. Ramesh Sharma" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Contact Phone Number *</label>
                    <input type="tel" required placeholder="e.g. 98XXXXXXXX" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Email Address *</label>
                  <input type="email" required placeholder="name@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>Previous School & Location</label>
                  <input type="text" placeholder="Name of previous academic institution" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--gray-300)', outline: 'none' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: 8, width: '100%' }}>
                  Submit Admission Application →
                </button>
              </form>

              {submitted && (
                <div style={{ marginTop: 18, padding: '14px 20px', borderRadius: 8, background: '#059669', color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>
                  Thank you! Your application has been registered. Our admissions counselor will contact you within 24 hours.
                </div>
              )}
            </div>

            {/* Document Requirements Checklist */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card" style={{ padding: 36, background: 'var(--navy)', color: '#ffffff' }}>
                <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Preparation Checklist</span>
                <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: 16 }}>Required Enrollment Documents</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Birth Certificate (Original + 2 Photocopies)',
                    'Previous School Progress Marksheets (Last 2 Years)',
                    'Character Certificate & Transfer Certificate (TC)',
                    'Citizenship Certificate Photocopy of Parents',
                    '4 Recent Passport-sized Student Photographs',
                    'Medical Fitness & Immunization Record',
                  ].map((doc, di) => (
                    <div key={di} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)' }}>
                      <span style={{ color: 'var(--gold-light)', fontWeight: 800 }}>✓</span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: 30, background: 'var(--gold-pale)', border: '1px solid var(--gold)' }}>
                <h4 style={{ color: 'var(--navy)', fontSize: '1.15rem', marginBottom: 8 }}>Applying for Merit Scholarships?</h4>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>
                  Candidates scoring GPA 3.85+ or holding national athletic honors are eligible for up to 100% tuition waivers.
                </p>
                <Link to="/scholarships" className="btn btn-navy btn-sm">Explore Scholarship Guidelines →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Fee Structure */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Transparent Value</span>
            <h2 className="section-title">Institutional Fee Schedule (2025–26)</h2>
            <p className="section-subtitle">Competitive, all-inclusive academic tuition with quarterly installment payment flexibility.</p>
          </div>

          <div className="card reveal" style={{ padding: 0, overflowX: 'auto', borderRadius: 'var(--radius-lg)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 680 }}>
              <thead>
                <tr style={{ background: 'var(--navy)', color: '#ffffff' }}>
                  <th style={{ padding: '20px 24px', fontWeight: 700 }}>Academic Stage</th>
                  <th style={{ padding: '20px 20px', fontWeight: 700 }}>One-Time Admission</th>
                  <th style={{ padding: '20px 20px', fontWeight: 700 }}>Monthly Tuition</th>
                  <th style={{ padding: '20px 20px', fontWeight: 700 }}>Term Exam Fee</th>
                  <th style={{ padding: '20px 24px', fontWeight: 700 }}>Included Privileges</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--gray-100)', background: i % 2 === 0 ? '#ffffff' : 'var(--cream)' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 700, color: 'var(--navy)' }}>{row.level}</td>
                    <td style={{ padding: '18px 20px', color: 'var(--gold-dark)', fontWeight: 800 }}>{row.admission}</td>
                    <td style={{ padding: '18px 20px', color: 'var(--navy-light)', fontWeight: 700 }}>{row.monthly}</td>
                    <td style={{ padding: '18px 20px', color: 'var(--gray-500)' }}>{row.term}</td>
                    <td style={{ padding: '18px 24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {row.includes.map((inc, ii) => (
                          <span key={ii} style={{ fontSize: '0.82rem', color: 'var(--gray-500)' }}>• {inc}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">Admissions FAQ</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqCategories[0].questions.map((faq, idx) => (
              <div key={idx} className="card reveal" style={{ padding: 0, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '20px 24px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: 'var(--navy)', fontSize: '1.02rem', background: openFaq === idx ? 'var(--navy-soft)' : '#fff' }}
                >
                  {faq.q}
                  <span style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s', color: 'var(--gold)' }}>▼</span>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '20px 24px', color: 'var(--gray-700)', lineHeight: 1.75, borderTop: '1px solid var(--gray-100)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
