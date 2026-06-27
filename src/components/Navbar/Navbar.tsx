import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Our Story', path: '/about#history' },
      { label: "Principal's Message", path: '/about#principal' },
      { label: 'Leadership Team', path: '/about#leadership' },
      { label: 'Faculty', path: '/faculty' },
    ]
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Curriculum Overview', path: '/academics#curriculum' },
      { label: 'Primary Education', path: '/academics#primary' },
      { label: 'Secondary Education', path: '/academics#secondary' },
      { label: 'Academic Calendar', path: '/academics#calendar' },
    ]
  },
  { label: 'Admissions', path: '/admissions' },
  {
    label: 'Campus Life',
    path: '/campus',
    children: [
      { label: 'Facilities', path: '/campus' },
      { label: 'Student Life', path: '/student-life' },
      { label: 'Gallery', path: '/gallery' },
    ]
  },
  { label: 'News & Events', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const transparent = isHomePage && !isScrolled;

  return (
    <>
      {/* Top Bar */}
      <div className={`navbar-topbar ${!transparent ? 'hidden' : ''}`}>
        <div className="container">
          <div className="navbar-topbar-inner">
            <div className="navbar-topbar-left">
              <span>📞 +1 (800) 395-4200</span>
              <span>✉️ admissions@excelsior.edu</span>
              <span>🕐 Mon–Fri: 8:00 AM – 5:00 PM</span>
            </div>
            <div className="navbar-topbar-right">
              <a href="#" className="topbar-link">Parent Portal</a>
              <a href="#" className="topbar-link">Student Login</a>
              <a href="#" className="topbar-link">Staff</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${transparent ? 'navbar--transparent' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <div className="navbar-logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="20,2 38,14 38,36 20,38 2,36 2,14" fill="var(--navy)" stroke="var(--gold)" strokeWidth="1.5"/>
                  <text x="20" y="26" textAnchor="middle" fill="var(--gold)" fontSize="16" fontFamily="serif" fontWeight="bold">E</text>
                </svg>
              </div>
              <div className="navbar-logo-text">
                <span className="logo-main">Excelsior</span>
                <span className="logo-sub">International Academy</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="navbar-links">
              {navLinks.map(link => (
                <div
                  key={link.label}
                  className="nav-item"
                  onMouseEnter={() => link.children ? handleMouseEnter(link.label) : undefined}
                  onMouseLeave={link.children ? handleMouseLeave : undefined}
                >
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? 'nav-link--active' : ''} ${link.children ? 'has-dropdown' : ''}`}
                  >
                    {link.label}
                    {link.children && (
                      <svg className="dropdown-arrow" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </Link>
                  {link.children && activeDropdown === link.label && (
                    <div className="dropdown-menu">
                      <div className="dropdown-inner">
                        {link.children.map(child => (
                          <Link key={child.label} to={child.path} className="dropdown-item">
                            <span className="dropdown-item-icon">→</span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="navbar-actions">
              <button
                className="navbar-search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <Link to="/admissions" className="btn btn-gold btn-sm navbar-cta">
                Apply Now
              </Link>
              <button
                className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span/><span/><span/>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="navbar-search-bar">
            <div className="container">
              <div className="search-bar-inner">
                <input
                  type="text"
                  placeholder="Search programs, news, events..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="search-submit">Search</button>
                <button className="search-close" onClick={() => setSearchOpen(false)}>✕</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)} />
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
                <div className="navbar-logo-icon">
                  <svg viewBox="0 0 40 40" fill="none">
                    <polygon points="20,2 38,14 38,36 20,38 2,36 2,14" fill="var(--navy)" stroke="var(--gold)" strokeWidth="1.5"/>
                    <text x="20" y="26" textAnchor="middle" fill="var(--gold)" fontSize="16" fontFamily="serif" fontWeight="bold">E</text>
                  </svg>
                </div>
                <div className="navbar-logo-text">
                  <span className="logo-main">Excelsior</span>
                  <span className="logo-sub">International Academy</span>
                </div>
              </Link>
              <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
            </div>
            <nav className="mobile-nav">
              {navLinks.map(link => (
                <div key={link.label} className="mobile-nav-group">
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mobile-nav-children">
                      {link.children.map(child => (
                        <Link key={child.label} to={child.path} className="mobile-nav-child">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <Link to="/admissions" className="btn btn-gold" style={{width: '100%', justifyContent: 'center'}}>
                Apply Now
              </Link>
              <div className="mobile-contact-info">
                <p>📞 +1 (800) 395-4200</p>
                <p>✉️ admissions@excelsior.edu</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
