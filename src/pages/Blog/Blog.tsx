import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { blogArticles } from '../../data/schoolData';

const categories = ['All', 'Pedagogy', 'Student Life', 'Holistic Growth'];

export default function Blog() {
  useScrollReveal();
  const [category, setCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const filtered = category === 'All' ? blogArticles : blogArticles.filter(b => b.category === category);

  return (
    <div className="blog-page">
      {/* Hero Header */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
        color: 'white',
        padding: '140px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Educational Insights</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', margin: '14px 0', color: 'white' }}>
            Articles & Thought Leadership
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 620, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Reflections, pedagogical insights, parenting guides, and student voices from the Excelsior learning community.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--cream)' }}>
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`btn ${category === c ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '8px 20px', fontSize: '0.88rem' }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {filtered.map((art, idx) => (
              <article key={art.id} className="card reveal" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', flexDirection: 'column', transitionDelay: `${idx * 80}ms` }}>
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase' }}>{art.category}</span>
                    <span>⏱️ {art.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: 10, lineHeight: 1.35 }}>{art.title}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{art.excerpt}</p>
                  
                  {activeArticle === art.id && (
                    <div style={{ padding: '16px 0', borderTop: '1px solid var(--gray-100)', color: 'var(--navy)', fontSize: '0.95rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {art.content}
                    </div>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--gray-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)' }}>{art.author}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>{art.authorRole}</span>
                    </div>
                    <button
                      onClick={() => setActiveArticle(activeArticle === art.id ? null : art.id)}
                      className="btn btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                    >
                      {activeArticle === art.id ? 'Close' : 'Read More →'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: 'var(--navy)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: 12 }}>
            Subscribe to Monthly Educational Dispatch
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>
            Get expert educational advice, study tips, and campus news delivered directly to your inbox.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{ padding: '14px 20px', borderRadius: 'var(--radius-full)', border: 'none', width: '100%', maxWidth: 360, fontSize: '0.95rem' }}
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
