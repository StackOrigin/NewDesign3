import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { publicationsData } from '../../data/schoolData';

export default function Publications() {
  useScrollReveal();
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  const handleDownload = (id: number) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert('Publication download started.');
    }, 1500);
  };

  return (
    <div className="publications-page">
      {/* Hero Header */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
        color: 'white',
        padding: '140px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>School Library & Media</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontFamily: 'var(--font-serif)', margin: '14px 0', color: 'white' }}>
            Publications & Magazines
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 620, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Explore our annual school magazines, STEM research journals, creative anthologies, and quarterly newsletters.
          </p>
        </div>
      </section>

      {/* Publications Showcase */}
      <section style={{ padding: '90px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header centered reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
            <span className="section-eyebrow" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Featured Issues</span>
            <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}>Digital Magazine Archive</h2>
            <p style={{ color: 'var(--gray-500)', maxWidth: 580, margin: '10px auto 0' }}>Read online or download high-resolution PDF editions of school publications.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {publicationsData.map((pub, idx) => (
              <div key={pub.id} className="card reveal" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', flexDirection: 'column', transitionDelay: `${idx * 80}ms` }}>
                <div style={{ height: 260, overflow: 'hidden', position: 'relative' }}>
                  <img src={pub.cover} alt={pub.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(15,31,58,0.9)', color: 'var(--gold-light)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700 }}>
                    {pub.volume} · {pub.date}
                  </div>
                </div>
                <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: 8, lineHeight: 1.35 }}>{pub.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: 12, display: 'block' }}>{pub.pages}</span>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', lineHeight: 1.6, flex: 1, marginBottom: 20 }}>{pub.description}</p>
                  
                  <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                    <button
                      onClick={() => handleDownload(pub.id)}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '10px', fontSize: '0.85rem' }}
                    >
                      {downloadingId === pub.id ? 'Downloading...' : 'Download PDF Publication'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute to Magazine Banner */}
      <section style={{ background: 'var(--navy)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: 12 }}>
            Submit Your Writing or Artwork for Next Issue
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 540, margin: '0 auto 24px' }}>
            The editorial board welcomes poems, short stories, essays, and photographic contributions from students and alumni.
          </p>
          <Link to="/contact" className="btn btn-secondary">Submit Contribution</Link>
        </div>
      </section>
    </div>
  );
}
