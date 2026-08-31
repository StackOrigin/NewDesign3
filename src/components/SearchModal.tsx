import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const searchableItems = [
  { title: 'Academic Programs & Curriculum', path: '/academics', category: 'Academics' },
  { title: 'Admission Guidelines & Fees', path: '/admissions', category: 'Admissions' },
  { title: 'Board Exam Results & Toppers', path: '/results', category: 'Results' },
  { title: 'Scholarships & Financial Aid Schemes', path: '/scholarships', category: 'Admissions' },
  { title: 'School Publications & Annual Magazines', path: '/publications', category: 'Media' },
  { title: 'Faculty & Educators Directory', path: '/faculty', category: 'About' },
  { title: 'Educational Articles & Blog', path: '/blog', category: 'Articles' },
  { title: 'Academic Calendar & Holidays', path: '/calendar', category: 'Calendar' },
  { title: 'Campus Facilities & Laboratories', path: '/campus', category: 'Campus' },
  { title: 'Virtual 360 Campus Tour', path: '/virtual-tour', category: 'Campus' },
  { title: 'Notice Board & Announcements', path: '/notice-board', category: 'Notices' },
  { title: 'Career Opportunities & Vacancies', path: '/careers', category: 'Careers' },
  { title: 'Alumni Network & Success Stories', path: '/alumni', category: 'Alumni' },
  { title: 'Frequently Asked Questions (FAQ)', path: '/faq', category: 'Support' },
  { title: 'Contact Admissions Desk', path: '/contact', category: 'Contact' },
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const results = searchableItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(10, 20, 38, 0.8)',
        backdropFilter: 'blur(8px)', zIndex: 99999, display: 'flex',
        alignItems: 'flex-start', justifyContent: 'center', padding: '100px 20px'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--card-bg, #ffffff)', width: '100%', maxWidth: 600,
          borderRadius: 16, boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-color, #e2e8f0)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold, #d4af37)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input
            type="text"
            placeholder="Search pages, admissions, results, scholarships..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%', border: 'none', outline: 'none', background: 'transparent',
              fontSize: '1.1rem', color: 'var(--text-color, #1a202c)'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#94a3b8' }}>
            Esc
          </button>
        </div>

        <div style={{ maxHeight: 380, overflowY: 'auto', padding: '12px 10px' }}>
          {results.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(item.path)}
              style={{
                padding: '12px 16px', borderRadius: 8, cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--hover-bg, #f1f5f9)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-color, #1e293b)' }}>{item.title}</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', background: 'rgba(200,159,69,0.12)', padding: '2px 8px', borderRadius: 999 }}>
                {item.category}
              </span>
            </div>
          ))}

          {results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
              No matches found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
