import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin } from '../../components/Icons';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { virtualTourStops } from '../../data/schoolData';
import './VirtualTour.css';

export default function VirtualTour() {
  useScrollReveal();
  const [active, setActive] = useState(0);
  const stop = virtualTourStops[active];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Virtual Tour</span></nav>
          <h1 className="page-title">Virtual Campus Tour</h1>
          <p className="page-subtitle">Explore our world-class campus from anywhere.</p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="tour-stage reveal">
            <div className="tour-image-wrap">
              <img src={stop.image} alt={stop.title} className="tour-image" />
              <div className="tour-controls">
                <button onClick={() => setActive((active - 1 + virtualTourStops.length) % virtualTourStops.length)} className="tour-btn"><ChevronLeft size={24} /></button>
                <button onClick={() => setActive((active + 1) % virtualTourStops.length)} className="tour-btn"><ChevronRight size={24} /></button>
              </div>
            </div>
            <div className="tour-info">
              <div className="tour-counter"><MapPin size={16} /> Stop {active + 1} of {virtualTourStops.length}</div>
              <h2 className="tour-title">{stop.title}</h2>
              <p className="tour-desc">{stop.description}</p>
            </div>
          </div>

          <div className="tour-thumbs reveal">
            {virtualTourStops.map((s, i) => (
              <button key={s.id} className={`tour-thumb ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
                <img src={s.image} alt={s.title} />
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
