import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Gallery.css';

const categories = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Arts'];

const galleryItems = [
  { category: 'Campus', img: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700', title: 'Main Campus Building', size: 'large' },
  { category: 'Academics', img: 'https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Students in Class', size: 'medium' },
  { category: 'Campus', img: 'https://images.pexels.com/photos/17144608/pexels-photo-17144608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Modern Architecture', size: 'medium' },
  { category: 'Events', img: 'https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700', title: 'Cultural Festival', size: 'large' },
  { category: 'Sports', img: 'https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Soccer Championship', size: 'medium' },
  { category: 'Academics', img: 'https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Library Study', size: 'medium' },
  { category: 'Campus', img: 'https://images.pexels.com/photos/32476662/pexels-photo-32476662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'School Entrance', size: 'medium' },
  { category: 'Events', img: 'https://images.pexels.com/photos/32476657/pexels-photo-32476657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700', title: 'Night Campus Illuminated', size: 'large' },
  { category: 'Sports', img: 'https://images.pexels.com/photos/36393288/pexels-photo-36393288.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Athletics Field', size: 'medium' },
  { category: 'Academics', img: 'https://images.pexels.com/photos/34162713/pexels-photo-34162713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Science Lab Session', size: 'medium' },
  { category: 'Campus', img: 'https://images.pexels.com/photos/32641542/pexels-photo-32641542.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Campus Grounds', size: 'medium' },
  { category: 'Academics', img: 'https://images.pexels.com/photos/37758635/pexels-photo-37758635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Lecture Hall', size: 'medium' },
  { category: 'Events', img: 'https://images.pexels.com/photos/7406300/pexels-photo-7406300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Graduation Day', size: 'medium' },
  { category: 'Sports', img: 'https://images.pexels.com/photos/34424818/pexels-photo-34424818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Athletics Competition', size: 'medium' },
  { category: 'Academics', img: 'https://images.pexels.com/photos/8423119/pexels-photo-8423119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Smart Classroom', size: 'medium' },
  { category: 'Arts', img: 'https://images.pexels.com/photos/8499550/pexels-photo-8499550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Library Arts', size: 'medium' },
  { category: 'Arts', img: 'https://images.pexels.com/photos/37758744/pexels-photo-37758744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Creative Writing', size: 'medium' },
  { category: 'Campus', img: 'https://images.pexels.com/photos/8499497/pexels-photo-8499497.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Library Collection', size: 'medium' },
];

export default function Gallery() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{img:string; title:string} | null>(null);

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeCategory);

  return (
    <div className="gallery-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Gallery</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Visual Stories</span>
          <h1>Life at Excelsior in Pictures</h1>
          <p>A window into our vibrant campus community, academic excellence, and student achievements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters reveal">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-masonry">
            {filtered.map((item, i) => (
              <div
                key={`${item.img}-${i}`}
                className={`gallery-item ${item.size === 'large' ? 'gallery-item--large' : ''} reveal`}
                style={{transitionDelay:`${(i % 6) * 0.06}s`}}
                onClick={() => setLightbox({ img: item.img, title: item.title })}
              >
                <img src={item.img} alt={item.title} loading="lazy"/>
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <span className="gallery-category-tag">{item.category}</span>
                    <h4>{item.title}</h4>
                    <span className="gallery-zoom">🔍 View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.img} alt={lightbox.title}/>
            <p>{lightbox.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
