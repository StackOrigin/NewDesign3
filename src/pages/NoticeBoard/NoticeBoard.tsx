import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { notices } from '../../data/schoolData';

const categories = ['All Notices', 'Admissions', 'Academic', 'Events', 'Holiday'];

const catColors: Record<string, string> = {
  Admissions: '#059669',
  Academic: '#1e3a8a',
  Events: '#d4af37',
  Holiday: '#7c3aed',
};

export default function NoticeBoard() {
  useScrollReveal();
  const [filter, setFilter] = useState('All Notices');
  const [search, setSearch] = useState('');

  const filtered = notices.filter(n => {
    const matchCat = filter === 'All Notices' || n.category === filter;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.content.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="noticeboard-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Official Circulars</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Notice Board & Circulars
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 660 }}>
            Official institutional announcements, examination timetables, holiday schedules, and administrative circulars.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`program-tab-button ${filter === c ? 'active' : ''}`}
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                >
                  {c}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search notices..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '10px 18px', borderRadius: 'var(--radius-full)', border: '1px solid var(--gray-300)', outline: 'none', width: 220, background: '#fff' }}
            />
          </div>

          {/* Notices Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filtered.map((notice, idx) => (
              <div
                key={notice.id}
                className="card reveal"
                style={{
                  padding: 0,
                  borderLeft: `5px solid ${catColors[notice.category] || 'var(--gold)'}`,
                  background: '#ffffff',
                  boxShadow: 'var(--shadow-sm)',
                  transitionDelay: `${idx * 60}ms`
                }}
              >
                <div style={{ padding: 28, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  {/* Date Block */}
                  <div style={{ background: 'var(--cream)', minWidth: 74, padding: '12px 10px', borderRadius: 'var(--radius-md)', textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>
                      {new Date(notice.date).getDate()}
                    </div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gold-dark)', marginTop: 2 }}>
                      {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                      {notice.pinned && (
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'var(--gold-pale)', color: 'var(--navy-deep)', padding: '3px 10px', borderRadius: 'var(--radius-full)', border: '1px solid var(--gold)' }}>
                          Pinned Notice
                        </span>
                      )}
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: catColors[notice.category] || 'var(--gold-dark)', background: 'var(--navy-soft)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                        {notice.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: 8 }}>{notice.title}</h3>
                    <p style={{ color: 'var(--gray-700)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>{notice.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="card reveal" style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--gray-500)' }}>
              <p style={{ fontSize: '1.15rem' }}>No notices match your selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
