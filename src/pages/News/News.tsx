import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const newsArticles = [
  {
    id: 1,
    title: 'Excelsior Scholars Sweep National Science & Robotics Olympiad 2024',
    category: 'Achievement',
    date: 'August 18, 2025',
    readTime: '4 min read',
    image: '/images/science-lab.jpg',
    excerpt: 'Excelsior student delegations clinched 1st prize in AI solar automation and gold medals in secondary chemistry experiments.',
    content: 'Over 40 top institutions from across Nepal gathered in Kathmandu for the 2024 National Science & Robotics Olympiad. Our Grade 10 and 11 scholars showcased an autonomous solar irrigation robot and an AI-assisted microscopic cell diagnostic platform, winning the overall institutional championship trophy.'
  },
  {
    id: 2,
    title: 'Historic Board Exam Results: 52 Students Achieve Perfect 4.0 GPA in SEE 2024',
    category: 'Board Results',
    date: 'July 10, 2025',
    readTime: '5 min read',
    image: '/images/prize distribuiton.jpg',
    excerpt: 'Celebrating our top position in Kathmandu Valley with a 99.8% distinction pass rate and massive scholarship grants.',
    content: 'The National Examinations Board (NEB) officially announced the SEE 2024 results today. Excelsior Apex Academy once again set the regional benchmark with 52 students securing straight 4.0 GPAs. We congratulate all students, parents, and our tireless faculty for this monumental victory.'
  },
  {
    id: 3,
    title: 'Annual Valley Inter-School Football & Athletics Championship Commences',
    category: 'Sports',
    date: 'June 25, 2025',
    readTime: '3 min read',
    image: '/images/sports.jpg',
    excerpt: 'Excelsior’s senior boys and girls athletic teams dominate opening fixtures at the Sports Olympiad.',
    content: 'The Excelsior Sports Arena welcomed over 800 student athletes for the Valley Championship. With commanding victories in track 400m relays and an opening 3-0 football win, our teams are marching strong toward the finals.'
  },
  {
    id: 4,
    title: 'Grand International Model United Nations (Apex MUN) Conference Hosted',
    category: 'Global Affairs',
    date: 'May 30, 2025',
    readTime: '4 min read',
    image: '/images/school group photo.jpg',
    excerpt: 'Delegates debated climate migration treaties, AI ethics, and international peacekeeping in a 3-day simulation.',
    content: 'The 8th annual Apex Model United Nations conference brought together 350 youth delegates representing 60 nations. The Secretary-General commended our student leadership committee for flawless diplomatic facilitation and draft resolutions.'
  },
  {
    id: 5,
    title: 'Admissions & Scholarship Assessment for 2025–26 Academic Year Announced',
    category: 'Admissions',
    date: 'May 15, 2025',
    readTime: '3 min read',
    image: '/images/classroom.jpg',
    excerpt: 'Online registration open for Pre-Primary to Grade 11/12 with merit scholarships up to 100% tuition waiver.',
    content: 'Prospective parents can now register for the upcoming scholarship assessment exam and schedule guided campus tours with our academic counseling team.'
  }
];

const categories = ['All', 'Achievement', 'Board Results', 'Sports', 'Global Affairs', 'Admissions'];

export default function News() {
  useScrollReveal();
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = newsArticles.filter(item => {
    const matchCat = selectedCat === 'All' || item.category === selectedCat;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = newsArticles[0];

  return (
    <div className="news-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Media & Publications</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            News, Events & Media Dispatch
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 640 }}>
            Stay connected with milestone achievements, student triumphs, press releases, and campus announcements.
          </p>
        </div>
      </section>

      {/* Featured Article Card */}
      <section className="section section-cream" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="card reveal" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center' }}>
              <div style={{ height: 380, overflow: 'hidden' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 44 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ background: 'var(--gold)', color: 'var(--navy-deep)', fontWeight: 800, padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    ⭐ Breaking Headline
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>{featured.date}</span>
                </div>
                <h2 style={{ fontSize: '1.65rem', color: 'var(--navy)', marginBottom: 14, lineHeight: 1.3 }}>{featured.title}</h2>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 20 }}>{featured.excerpt}</p>
                <button
                  onClick={() => setExpandedId(expandedId === featured.id ? null : featured.id)}
                  className="btn btn-navy"
                >
                  {expandedId === featured.id ? 'Collapse Article' : 'Read Full Coverage →'}
                </button>
              </div>
            </div>
            {expandedId === featured.id && (
              <div style={{ padding: '30px 44px', background: 'var(--cream)', borderTop: '1px solid var(--gray-200)', color: 'var(--charcoal)', lineHeight: 1.8, fontSize: '1.02rem' }}>
                {featured.content}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Filter & Search Grid */}
      <section className="section section-cream">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`program-tab-button ${selectedCat === cat ? 'active' : ''}`}
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ padding: '10px 18px', borderRadius: 'var(--radius-full)', border: '1px solid var(--gray-300)', outline: 'none', width: 220, background: '#fff' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
            {filtered.map((item, idx) => (
              <article key={item.id} className="card reveal" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', transitionDelay: `${idx * 70}ms` }}>
                <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(6,13,26,0.85)', color: 'var(--gold-light)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.72rem', fontWeight: 700 }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginBottom: 8, display: 'block' }}>{item.date} · {item.readTime}</span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1, marginBottom: 18 }}>{item.excerpt}</p>
                  
                  {expandedId === item.id && (
                    <div style={{ padding: '14px 0', borderTop: '1px solid var(--gray-100)', color: 'var(--charcoal)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                      {item.content}
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.88rem', textAlign: 'left', marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--gray-100)' }}
                  >
                    {expandedId === item.id ? 'Close Details ▴' : 'Read Full Story →'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
