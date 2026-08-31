import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle } from '../../components/Icons';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { faqCategories } from '../../data/schoolData';
import './FAQ.css';

export default function FAQ() {
  useScrollReveal();
  const [open, setOpen] = useState<{ cat: number; q: number } | null>(null);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>FAQ</span></nav>
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">Find answers to common questions about admissions, academics, fees, and more.</p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="faq-grid">
            {faqCategories.map((cat, ci) => (
              <div key={cat.category} className="faq-category reveal">
                <h2 className="faq-cat-title"><HelpCircle size={22} color="var(--gold)" /> {cat.category}</h2>
                {cat.questions.map((q, qi) => {
                  const isOpen = open?.cat === ci && open?.q === qi;
                  return (
                    <div key={qi} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button className="faq-question" onClick={() => setOpen(isOpen ? null : { cat: ci, q: qi })}>
                        <span>{q.q}</span>
                        <ChevronDown size={18} color="var(--gray-500)" />
                      </button>
                      {isOpen && <div className="faq-answer">{q.a}</div>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="faq-cta reveal">
            <MessageCircle size={36} color="var(--gold)" />
            <h3>Still have questions?</h3>
            <p>Our admissions team is happy to help.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
