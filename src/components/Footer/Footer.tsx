import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  academics: [
    { label: 'Curriculum Overview', path: '/academics' },
    { label: 'Primary Education', path: '/academics#primary' },
    { label: 'Secondary Education', path: '/academics#secondary' },
    { label: 'Higher Secondary', path: '/academics#higher' },
    { label: 'Academic Calendar', path: '/academics#calendar' },
  ],
  admissions: [
    { label: 'Admission Process', path: '/admissions' },
    { label: 'Eligibility Criteria', path: '/admissions#eligibility' },
    { label: 'Fee Structure', path: '/admissions#fees' },
    { label: 'Scholarships', path: '/admissions#scholarships' },
    { label: 'Apply Online', path: '/admissions#apply' },
  ],
  campusLife: [
    { label: 'Facilities', path: '/campus' },
    { label: 'Student Life', path: '/student-life' },
    { label: 'Sports & Athletics', path: '/student-life#sports' },
    { label: 'Arts & Creativity', path: '/student-life#arts' },
    { label: 'Photo Gallery', path: '/gallery' },
  ],
  about: [
    { label: 'Our Story', path: '/about' },
    { label: "Principal's Message", path: '/about#principal' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'News & Events', path: '/news' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: '𝕏', label: 'Twitter/X', href: '#' },
  { icon: 'in', label: 'LinkedIn', href: '#' },
  { icon: 'f', label: 'Facebook', href: '#' },
  { icon: '▶', label: 'YouTube', href: '#' },
  { icon: '◉', label: 'Instagram', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h3>Stay Connected with Excelsior</h3>
              <p>Subscribe to our newsletter for the latest news, events, and academic updates.</p>
            </div>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn btn-gold">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <svg viewBox="0 0 40 40" fill="none">
                    <polygon points="20,2 38,14 38,36 20,38 2,36 2,14" fill="var(--navy-light)" stroke="var(--gold)" strokeWidth="1.5"/>
                    <text x="20" y="26" textAnchor="middle" fill="var(--gold)" fontSize="16" fontFamily="serif" fontWeight="bold">E</text>
                  </svg>
                </div>
                <div>
                  <span className="footer-logo-main">Excelsior</span>
                  <span className="footer-logo-sub">International Academy</span>
                </div>
              </Link>
              <p className="footer-brand-desc">
                Empowering tomorrow's global leaders through academic excellence, 
                character development, and a world-class learning environment since 1978.
              </p>
              <div className="footer-accreditations">
                <span className="footer-badge">IB World School</span>
                <span className="footer-badge">NEASC Accredited</span>
                <span className="footer-badge">CIS Member</span>
              </div>
              <div className="footer-socials">
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-links-section">
              <h4 className="footer-links-title">Academics</h4>
              <ul className="footer-links-list">
                {footerLinks.academics.map(l => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-links-title">Admissions</h4>
              <ul className="footer-links-list">
                {footerLinks.admissions.map(l => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-links-title">Campus Life</h4>
              <ul className="footer-links-list">
                {footerLinks.campusLife.map(l => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-links-title">About</h4>
              <ul className="footer-links-list">
                {footerLinks.about.map(l => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-row">
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Campus Address</strong>
                <p>128 Academy Drive, Cambridge Heights<br/>Boston, MA 02134, USA</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone Numbers</strong>
                <p>Main: +1 (800) 395-4200<br/>Admissions: +1 (800) 395-4201</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email Addresses</strong>
                <p>info@excelsior.edu<br/>admissions@excelsior.edu</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Office Hours</strong>
                <p>Mon–Fri: 8:00 AM – 5:00 PM<br/>Sat: 9:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {currentYear} Excelsior International Academy. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Accessibility</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
