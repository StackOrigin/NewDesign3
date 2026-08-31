import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from '../SearchModal';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about', children: [
    { label: 'Our Story & Heritage', path: '/about' },
    { label: 'Leadership & Faculty', path: '/faculty' },
    { label: 'Alumni Network', path: '/alumni' },
    { label: 'Publications & Magazine', path: '/publications' },
  ]},
  { label: 'Academics', path: '/academics', children: [
    { label: 'Curriculum & Streams', path: '/academics' },
    { label: 'Board Exam Results & Toppers', path: '/results' },
    { label: 'Academic Calendar', path: '/calendar' },
    { label: 'Educational Blog & Articles', path: '/blog' },
  ]},
  { label: 'Admissions', path: '/admissions', children: [
    { label: 'Admission Process & Fees', path: '/admissions' },
    { label: 'Scholarships & Grants', path: '/scholarships' },
    { label: 'FAQ & Inquiries', path: '/faq' },
  ]},
  { label: 'Campus Life', path: '/campus', children: [
    { label: 'Facilities & Labs', path: '/campus' },
    { label: 'Student Clubs & Activities', path: '/student-life' },
    { label: 'Photo Gallery', path: '/gallery' },
    { label: '360° Virtual Tour', path: '/virtual-tour' },
  ]},
  { label: 'Community', path: '/news', children: [
    { label: 'News & Announcements', path: '/news' },
    { label: 'Notice Board', path: '/notice-board' },
    { label: 'Parent Portal & Resources', path: '/parents' },
    { label: 'Career Vacancies', path: '/careers' },
  ]},
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const enter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const leave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <header className={`navbar ${isScrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
        <div className="navbar-topbar">
          <div className="container navbar-topbar-inner">
            <div className="navbar-contact">
              <span>Lalitpur / Kathmandu, Nepal</span>
              <span>|</span>
              <span>01-5201144</span>
              <span>|</span>
              <span>info@excelsior.edu.np</span>
            </div>
            <div className="navbar-toplinks">
              <Link to="/results">Exam Results</Link>
              <Link to="/scholarships">Scholarships</Link>
              <Link to="/publications">Publications</Link>
              <Link to="/calendar">Calendar</Link>
            </div>
          </div>
        </div>

        <div className="container navbar-main">
          <Link to="/" className="navbar-brand">
            <div className="navbar-logo">E</div>
            <div>
              <span className="navbar-title">Excelsior Preparatory</span>
              <span className="navbar-subtitle">Excellence in Education</span>
            </div>
          </Link>

          <nav className="navbar-nav">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.label} className="nav-item" onMouseEnter={() => enter(link.label)} onMouseLeave={leave}>
                  <Link to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>{link.label} ▾</Link>
                  {activeDropdown === link.label && (
                    <div className="dropdown-menu">
                      {link.children.map(child => (
                        <Link key={child.path} to={child.path} className="dropdown-link">{child.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.path} to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>{link.label}</Link>
              )
            )}
          </nav>

          <div className="navbar-actions">
            <button
              onClick={() => setSearchOpen(true)}
              className="btn btn-secondary btn-sm"
              style={{ padding: '8px 14px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              title="Search website (Cmd+K)"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              Search
            </button>
            <Link to="/admissions" className="btn btn-primary btn-sm">Apply Now</Link>
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu Navigation</span>
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>×</button>
        </div>
        <div style={{ padding: '0 20px 20px' }}>
          <button
            onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
            className="btn btn-secondary"
            style={{ width: '100%', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Search Pages...
          </button>
          <Link to="/admissions" className="btn btn-primary" style={{ width: '100%', marginBottom: 20 }}>
            Apply for Admission 2025–26
          </Link>
        </div>
        {navLinks.map(link =>
          link.children ? (
            <div key={link.label} className="mobile-dropdown">
              <div className="mobile-dropdown-label">{link.label}</div>
              <div className="mobile-dropdown-links">
                {link.children.map(child => (
                  <Link key={child.path} to={child.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{child.label}</Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.path} to={link.path} className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>{link.label}</Link>
          )
        )}
      </div>
    </>
  );
}
