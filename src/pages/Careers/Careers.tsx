import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Briefcase, MapPin, Clock, Calendar, ArrowRight } from '../../components/Icons';
import { careers } from '../../data/schoolData';
import './Careers.css';

export default function Careers() {
  useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);
  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Careers</span></nav>
          <h1 className="page-title">Work With Us</h1>
          <p className="page-subtitle">Join a passionate community of educators and professionals shaping the next generation.</p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Open Positions</span>
            <h2 className="section-title">Current Opportunities</h2>
          </div>
          <div className="career-list">
            {careers.map(job => (
              <div key={job.id} className="career-card reveal">
                <div className="career-main">
                  <div className="career-icon"><Briefcase size={26} color="var(--gold-dark)" /></div>
                  <div className="career-info">
                    <h3 className="career-title">{job.title}</h3>
                    <p className="career-dept">{job.department}</p>
                    <div className="career-meta">
                      <span><Clock size={14} /> {job.type}</span>
                      <span><MapPin size={14} /> {job.location}</span>
                      <span><Calendar size={14} /> Apply by {formatDate(job.deadline)}</span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline" onClick={() => setSelected(selected === job.id ? null : job.id)}>
                  {selected === job.id ? 'Close' : 'Details'} <ArrowRight size={16} />
                </button>
                {selected === job.id && (
                  <div className="career-detail">
                    <p>{job.description}</p>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>Apply Now <ArrowRight size={16} /></Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
