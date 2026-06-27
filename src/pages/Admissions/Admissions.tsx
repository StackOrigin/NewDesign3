import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Admissions.css';

const steps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Fill out our online inquiry form to receive a school information package and guide.' },
  { num: '02', title: 'Campus Visit', desc: 'Schedule a personalized campus tour with our admissions counselors.' },
  { num: '03', title: 'Online Application', desc: 'Complete the online application form with all required documents.' },
  { num: '04', title: 'Assessment', desc: 'Students complete an academic assessment and interview with faculty.' },
  { num: '05', title: 'Decision & Offer', desc: 'Receive your admission decision within 2–3 weeks.' },
  { num: '06', title: 'Enrollment', desc: 'Accept your offer, pay enrollment fee, and secure your place.' },
];

const feeStructure = [
  { level: 'Primary (K–5)', annual: '$28,500', registration: '$2,500', activity: '$1,200' },
  { level: 'Middle School (6–8)', annual: '$32,000', registration: '$2,500', activity: '$1,500' },
  { level: 'High School (9–12)', annual: '$36,500', registration: '$2,500', activity: '$1,800' },
  { level: 'IB Diploma (11–12)', annual: '$42,000', registration: '$2,500', activity: '$2,000' },
];

const scholarships = [
  { name: 'Merit Excellence Award', amount: 'Up to 50% tuition', criteria: 'Academic excellence (GPA 4.0+)', deadline: 'March 31, 2025' },
  { name: 'Global Leaders Scholarship', amount: 'Up to 30% tuition', criteria: 'Leadership & community service', deadline: 'April 30, 2025' },
  { name: 'Arts & Athletics Grant', amount: 'Up to 25% tuition', criteria: 'Exceptional talent in arts/sports', deadline: 'April 30, 2025' },
  { name: 'Need-Based Financial Aid', amount: 'Based on assessment', criteria: 'Demonstrated financial need', deadline: 'Rolling basis' },
];

const faqs = [
  { q: 'What is the age requirement for each grade?', a: 'Students must turn the grade-appropriate age by September 1st of the enrollment year. Kindergarten requires age 5, Grade 1 requires age 6, and so forth.' },
  { q: 'Do you accept mid-year transfers?', a: 'Yes, we consider mid-year transfers based on seat availability. Contact our admissions office for current openings and the transfer process.' },
  { q: 'Is an English proficiency test required?', a: 'Non-native English speakers must demonstrate English proficiency through TOEFL Jr, IELTS, or an internal language assessment conducted during the admission process.' },
  { q: 'What is the student-to-teacher ratio?', a: 'We maintain a 12:1 student-to-teacher ratio across all grades to ensure personalized attention and small-group learning.' },
  { q: 'Are boarding facilities available?', a: 'Yes, we offer fully supervised boarding accommodation for international students from Grade 7 onwards. Boarding fees are separate from tuition.' },
  { q: 'How does the scholarship application work?', a: 'Scholarships are awarded based on merit, talent, or financial need. Separate scholarship applications must be submitted along with the main admission application.' },
];

export default function Admissions() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    studentName: '', grade: '', dob: '', parentName: '', email: '', phone: '', nationality: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! Our admissions team will contact you within 2 business days.');
  };

  return (
    <div className="admissions-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Admissions</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Join Our Community</span>
          <h1>Begin Your Excelsior Journey</h1>
          <p>We're looking for curious, passionate, and driven students to join our extraordinary community.</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">How to Apply</span>
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">Our streamlined six-step process ensures a smooth and transparent experience for every family.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="step-card reveal" style={{transitionDelay:`${i * 0.1}s`}}>
                <div className="step-number">{step.num}</div>
                <div className="step-connector"/>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section section--gray">
        <div className="container">
          <div className="eligibility-grid">
            <div className="eligibility-box reveal-left">
              <h3>Eligibility Criteria</h3>
              <div className="gold-divider"/>
              <ul className="eligibility-list">
                {[
                  'Age-appropriate grade placement (verified by September 1)',
                  'Previous school academic records (minimum B average)',
                  'Satisfactory behavior and conduct record',
                  'English proficiency (non-native speakers)',
                  'Successful completion of academic assessment',
                  'Parent/guardian interview participation',
                  'Completion of all application requirements',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="documents-box reveal-right">
              <h3>Required Documents</h3>
              <div className="gold-divider"/>
              <div className="docs-list">
                {[
                  { icon:'📄', doc:'Completed Application Form', note:'Online form — all sections required' },
                  { icon:'📋', doc:'Academic Transcripts', note:'Last 2 years from previous school' },
                  { icon:'🪪', doc:'Birth Certificate / Passport Copy', note:'For age verification' },
                  { icon:'📝', doc:'Teacher Recommendation Letters', note:'Two letters from subject teachers' },
                  { icon:'🗣️', doc:'English Proficiency Report', note:'If applicable — TOEFL Jr. or equivalent' },
                  { icon:'📸', doc:'Passport-Size Photographs', note:'4 recent photos, plain background' },
                  { icon:'💊', doc:'Medical & Immunization Records', note:'Required before enrollment' },
                ].map((d, i) => (
                  <div key={i} className="doc-item">
                    <span>{d.icon}</span>
                    <div>
                      <strong>{d.doc}</strong>
                      <span>{d.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section" id="fees">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Investment in Excellence</span>
            <h2 className="section-title">Fee Structure 2025–2026</h2>
            <p className="section-subtitle">All fees are in USD. Payment plans are available. Contact our finance office for details.</p>
          </div>
          <div className="fee-table-wrap reveal">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Program Level</th>
                  <th>Annual Tuition</th>
                  <th>Registration Fee</th>
                  <th>Activity Fee</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((f, i) => (
                  <tr key={i}>
                    <td className="fee-level">{f.level}</td>
                    <td>{f.annual}</td>
                    <td>{f.registration}</td>
                    <td>{f.activity}</td>
                    <td className="fee-total">
                      ${(parseInt(f.annual.replace(/\D/g,'')) + parseInt(f.registration.replace(/\D/g,'')) + parseInt(f.activity.replace(/\D/g,''))).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fee-note reveal">* Fees are subject to annual review. Additional fees may apply for boarding, transportation, and optional programs. Sibling discounts available.</p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section section--gray" id="scholarships">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Financial Support</span>
            <h2 className="section-title">Scholarships & Financial Aid</h2>
            <p className="section-subtitle">We believe exceptional students should have access to an exceptional education regardless of financial circumstances.</p>
          </div>
          <div className="scholarships-grid">
            {scholarships.map((s, i) => (
              <div key={i} className="scholarship-card reveal" style={{transitionDelay:`${i * 0.12}s`}}>
                <div className="scholarship-badge">🏅</div>
                <h4>{s.name}</h4>
                <div className="scholarship-amount">{s.amount}</div>
                <div className="scholarship-detail">
                  <span>📋 Criteria:</span> {s.criteria}
                </div>
                <div className="scholarship-detail">
                  <span>📅 Deadline:</span> {s.deadline}
                </div>
                <Link to="#apply" className="btn btn-outline-navy btn-sm" style={{marginTop:'12px'}}>Apply for Scholarship</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section" id="apply">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Ready to Apply?</span>
            <h2 className="section-title">Online Application Form</h2>
            <p className="section-subtitle">Complete the form below and our admissions team will be in touch within 2 business days.</p>
          </div>
          <div className="application-form-wrap reveal">
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-section-title">Student Information</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Student Full Name *</label>
                  <input type="text" placeholder="Enter student's full name" required
                    value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Applying for Grade *</label>
                  <select required value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})}>
                    <option value="">Select Grade</option>
                    {['Kindergarten','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input type="date" required value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Nationality *</label>
                  <input type="text" placeholder="Student's nationality" required
                    value={formData.nationality} onChange={e => setFormData({...formData, nationality: e.target.value})} />
                </div>
              </div>

              <div className="form-section-title">Parent / Guardian Information</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Parent/Guardian Full Name *</label>
                  <input type="text" placeholder="Parent or guardian name" required
                    value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="your@email.com" required
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="+1 (000) 000-0000" required
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Additional Information / Message</label>
                <textarea placeholder="Tell us about your child, any special needs, or questions..." rows={4}
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              </div>

              <div className="form-check">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I agree to the terms and conditions and privacy policy of Excelsior International Academy.</label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit">
                Submit Application
                <svg viewBox="0 0 20 20" fill="currentColor" width="18"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item reveal ${openFaq === i ? 'open' : ''}`} style={{transitionDelay:`${i * 0.08}s`}}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
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
