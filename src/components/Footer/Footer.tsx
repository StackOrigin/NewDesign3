import { Link } from 'react-router-dom';

const footerLinks = {
  academics: [
    { label: 'Curriculum & Streams', path: '/academics' },
    { label: 'Board Exam Results', path: '/results' },
    { label: 'Educational Blog', path: '/blog' },
    { label: 'Academic Calendar', path: '/calendar' },
  ],
  admissions: [
    { label: 'Admission Guidelines', path: '/admissions' },
    { label: 'Scholarships & Aid', path: '/scholarships' },
    { label: 'Academic Calendar', path: '/calendar' },
    { label: 'FAQ & Inquiries', path: '/faq' },
  ],
  community: [
    { label: 'News & Announcements', path: '/news' },
    { label: 'Notice Board', path: '/notice-board' },
    { label: 'Publications & Magazine', path: '/publications' },
    { label: 'Parent Resources', path: '/parents' },
    { label: 'Alumni Network', path: '/alumni' },
    { label: 'Career Vacancies', path: '/careers' },
  ],
  about: [
    { label: 'Our Story & Heritage', path: '/about' },
    { label: 'Faculty Directory', path: '/faculty' },
    { label: 'Campus & Facilities', path: '/campus' },
    { label: 'Student Life & Clubs', path: '/student-life' },
    { label: '360° Virtual Tour', path: '/virtual-tour' },
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
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h3>Stay Connected with Excelsior</h3>
              <p>Subscribe for academic updates, exam announcements, and school magazine publications.</p>
            </div>
            <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing to our newsletter!'); }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-mark">E</div>
              <div>
                <span className="footer-logo-main">Excelsior Preparatory</span>
                <span className="footer-logo-sub">Excellence in Education</span>
              </div>
            </div>
            <p className="footer-desc">Where academic rigor meets character, creativity, and compassion. Preparing students to lead since 1978.</p>
            <div className="footer-social">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="social-link" aria-label={social.label}>{social.icon}</a>)}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Academics</h4>
            <ul className="footer-links">{footerLinks.academics.map(link => <li key={link.path}><Link to={link.path}>{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="footer-heading">Admissions</h4>
            <ul className="footer-links">{footerLinks.admissions.map(link => <li key={link.path}><Link to={link.path}>{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="footer-heading">Community & Media</h4>
            <ul className="footer-links">{footerLinks.community.map(link => <li key={link.path}><Link to={link.path}>{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="footer-heading">About Campus</h4>
            <ul className="footer-links">{footerLinks.about.map(link => <li key={link.path}><Link to={link.path}>{link.label}</Link></li>)}</ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>© {currentYear} Excelsior Preparatory. All rights reserved. Centrally integrated system.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/results">Results Archive</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/scholarships">Scholarships</Link>
            <Link to="/contact">Helpdesk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
