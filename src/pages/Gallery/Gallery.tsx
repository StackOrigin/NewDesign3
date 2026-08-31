import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const categories = ['All Photos', 'Campus & Architecture', 'Laboratories & STEM', 'Athletics & Sports', 'Student Assemblies'];

const galleryPhotos = [
  { id: 1, src: '/images/campus-aerial.jpg', title: '15-Ropani Green Campus Aerial View', category: 'Campus & Architecture', desc: 'Spacious landscaped campus in Jawalakhel, Lalitpur.' },
  { id: 2, src: '/images/classroom.jpg', title: 'Interactive Multi-Touch Smart Classroom', category: 'Laboratories & STEM', desc: 'Equipped with multimedia smartboards and collaborative seating.' },
  { id: 3, src: '/images/science-lab.jpg', title: 'Advanced Chemistry & Physics Research Lab', category: 'Laboratories & STEM', desc: 'University-grade apparatus for secondary and +2 practical experiments.' },
  { id: 4, src: '/images/sports.jpg', title: 'Olympic-Standard Sports Complex & Turf Ground', category: 'Athletics & Sports', desc: 'Regulation football, basketball, and track facilities.' },
  { id: 5, src: '/images/library.jpg', title: 'Central Research Library & Discussion Pods', category: 'Campus & Architecture', desc: 'Over 35,000 physical volumes and digital scholarly archives.' },
  { id: 6, src: '/images/computer-lab.jpg', title: 'AI & Supercomputing High-Tech Center', category: 'Laboratories & STEM', desc: '80+ high-performance workstations for coding and 3D printing.' },
  { id: 7, src: '/images/herosection image.jpg', title: 'Student Cohort & Peer Collaboration', category: 'Student Assemblies', desc: 'Fostering lifelong friendships and intellectual brotherhood.' },
  { id: 8, src: '/images/prize distribuiton.jpg', title: 'Annual Board Exam Merit Prize Distribution', category: 'Student Assemblies', desc: 'Honoring our 52 SEE GPA 4.0 distinction scholars.' },
  { id: 9, src: '/images/school group photo.jpg', title: 'Excelsior Model United Nations Delegation', category: 'Student Assemblies', desc: 'Diplomacy and parliamentary debate participants.' },
];

export default function Gallery() {
  useScrollReveal();
  const [activeCat, setActiveCat] = useState('All Photos');
  const [lightboxImg, setLightboxImg] = useState<typeof galleryPhotos[0] | null>(null);

  const filtered = activeCat === 'All Photos'
    ? galleryPhotos
    : galleryPhotos.filter(img => img.category === activeCat);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="gallery-page">
      {/* Hero Header */}
      <section className="page-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)', justifyContent: 'center' }}>Visual Retrospective</span>
          <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', margin: '14px 0' }}>
            Campus Life Photo Gallery
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', maxWidth: 640 }}>
            Capturing the energy, joy, scientific discovery, and competitive triumphs of life at Excelsior Apex Academy.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section section-cream">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`program-tab-button ${activeCat === cat ? 'active' : ''}`}
                style={{ padding: '9px 20px', fontSize: '0.86rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Mosaic Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {filtered.map((photo, i) => (
              <div
                key={photo.id}
                className="card reveal"
                style={{ overflow: 'hidden', cursor: 'pointer', borderRadius: 'var(--radius-lg)', position: 'relative', height: 280, transitionDelay: `${i * 60}ms` }}
                onClick={() => setLightboxImg(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="gallery-img-hover"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,26,0.9) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 22, color: '#fff' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--gold-light)', fontWeight: 800, textTransform: 'uppercase' }}>{photo.category}</span>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: '4px 0 2px' }}>{photo.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(6, 13, 26, 0.95)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%', background: '#ffffff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
            <div style={{ position: 'relative', height: 500, background: '#000' }}>
              <img src={lightboxImg.src} alt={lightboxImg.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              <button
                onClick={() => setLightboxImg(null)}
                style={{ position: 'absolute', top: 16, right: 16, width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>
            <div style={{ padding: 24 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase' }}>{lightboxImg.category}</span>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--navy)', margin: '4px 0 6px' }}>{lightboxImg.title}</h2>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem', margin: 0 }}>{lightboxImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
