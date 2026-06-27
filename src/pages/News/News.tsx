import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './News.css';

const categories = ['All', 'Achievement', 'Event', 'Academics', 'Sports', 'Community', 'Admissions'];

const newsItems = [
  {
    id: 1, category: 'Achievement',
    date: 'June 15, 2025',
    title: 'Excelsior Students Win 8 Gold Medals at National Science Olympiad',
    excerpt: 'Our science team brought home 8 gold medals, 4 silver, and 2 bronze in the 2025 National Science Olympiad — the best result in school history.',
    img: 'https://images.pexels.com/photos/34162713/pexels-photo-34162713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: true,
    author: 'Dr. Lena Hoffmann',
  },
  {
    id: 2, category: 'Event',
    date: 'June 10, 2025',
    title: 'Annual International Cultural Festival 2025 — A Celebration of Diversity',
    excerpt: 'Students from 60+ nationalities showcased their cultures through food, art, music, and performance at our biggest cultural event yet.',
    img: 'https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: true,
    author: 'Ms. Sophie Laurent',
  },
  {
    id: 3, category: 'Admissions',
    date: 'June 5, 2025',
    title: '2025–2026 Enrollment Now Open — Limited Seats Available',
    excerpt: 'Applications for the upcoming academic year are now being accepted. We encourage families to apply early as seats fill quickly.',
    img: 'https://images.pexels.com/photos/32476662/pexels-photo-32476662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
    author: 'Ms. Sarah Lancaster',
  },
  {
    id: 4, category: 'Sports',
    date: 'May 28, 2025',
    title: 'Excelsior Soccer Team Clinches Northeast Regional Championship',
    excerpt: 'After an unbeaten season, our soccer team won the Northeast Regional Championship with a thrilling 3-1 victory in the finals.',
    img: 'https://images.pexels.com/photos/8927020/pexels-photo-8927020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
    author: 'Mr. Ricardo Silva',
  },
  {
    id: 5, category: 'Academics',
    date: 'May 20, 2025',
    title: '12 Excelsior Students Accepted to Ivy League Universities',
    excerpt: 'The Class of 2025 has achieved outstanding university placements with 12 students gaining admission to Ivy League institutions.',
    img: 'https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
    author: 'Dr. Amara Osei',
  },
  {
    id: 6, category: 'Community',
    date: 'May 15, 2025',
    title: 'Students Raise $45,000 for Global Education Fund',
    excerpt: 'Our student-led charity gala raised an impressive $45,000 for the Global Education Fund, supporting education in underserved communities worldwide.',
    img: 'https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
    author: 'Mr. James Okafor',
  },
  {
    id: 7, category: 'Achievement',
    date: 'May 5, 2025',
    title: 'Excelsior Ranked #1 International School in Northeast US',
    excerpt: 'For the second consecutive year, Excelsior has been ranked #1 International School in the Northeast US by the National Education Review.',
    img: 'https://images.pexels.com/photos/17144608/pexels-photo-17144608.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
    author: 'Dr. James Whitfield',
  },
  {
    id: 8, category: 'Event',
    date: 'April 28, 2025',
    title: 'Innovation Hackathon 2025 — Students Build Solutions for Real Problems',
    excerpt: 'Over 200 students participated in our 48-hour hackathon, developing tech solutions for environmental, health, and social challenges.',
    img: 'https://images.pexels.com/photos/37758635/pexels-photo-37758635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
    author: 'Dr. Marcus Chen',
  },
];

const upcomingEvents = [
  { date: { day:'20', month:'Jun' }, title:'Graduation Ceremony 2025', time:'10:00 AM', location:'Main Auditorium' },
  { date: { day:'25', month:'Jun' }, title:'Summer Academic Camp Registration', time:'Deadline', location:'Admissions Office' },
  { date: { day:'08', month:'Jul' }, title:'Faculty Professional Development Week', time:'All Day', location:'Campus Wide' },
  { date: { day:'15', month:'Aug' }, title:'New Student Orientation', time:'8:30 AM', location:'Welcome Hall' },
  { date: { day:'25', month:'Aug' }, title:'Academic Year 2025–26 Begins', time:'7:45 AM', location:'All Campus' },
];

export default function News() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? newsItems : newsItems.filter(n => n.category === activeCategory);
  const featuredItems = newsItems.filter(n => n.featured);

  return (
    <div className="news-page page-enter">
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>News & Events</span>
          </nav>
          <span className="section-label" style={{color:'var(--gold-light)'}}>Stay Informed</span>
          <h1>News & Events</h1>
          <p>The latest from Excelsior — academic achievements, community events, and school announcements.</p>
        </div>
      </section>

      {/* Featured News */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Top Stories</span>
            <h2 className="section-title">Featured News</h2>
          </div>
          <div className="featured-grid">
            {featuredItems.map((item, i) => (
              <div key={item.id} className="featured-news-card reveal" style={{transitionDelay:`${i * 0.15}s`}}>
                <div className="featured-img">
                  <img src={item.img} alt={item.title} loading="lazy"/>
                  <span className="featured-category">{item.category}</span>
                </div>
                <div className="featured-body">
                  <div className="news-meta">
                    <span className="news-date">📅 {item.date}</span>
                    <span className="news-author">✍️ {item.author}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <button className="btn btn-primary btn-sm">Read Full Story</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="section section--gray">
        <div className="container">
          <div className="news-all-header">
            <div className="reveal-left">
              <span className="section-label">All Stories</span>
              <h2 className="section-title">Latest News</h2>
            </div>
            <div className="news-filters reveal-right">
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
          </div>
          <div className="news-all-grid">
            {filtered.map((item, i) => (
              <div key={item.id} className="news-all-card reveal" style={{transitionDelay:`${(i % 4) * 0.1}s`}}>
                <div className="news-all-img">
                  <img src={item.img} alt={item.title} loading="lazy"/>
                  <span className="news-all-cat">{item.category}</span>
                </div>
                <div className="news-all-body">
                  <div className="news-meta">
                    <span>{item.date}</span>
                    <span>By {item.author}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                  <button className="news-read-btn">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <div className="events-layout">
            <div className="upcoming-events reveal-left">
              <span className="section-label">What's Coming</span>
              <h2 className="section-title">Upcoming Events</h2>
              <div className="gold-divider"/>
              <div className="events-list">
                {upcomingEvents.map((ev, i) => (
                  <div key={i} className="event-row">
                    <div className="event-date-block">
                      <span className="event-day">{ev.date.day}</span>
                      <span className="event-month">{ev.date.month}</span>
                    </div>
                    <div className="event-details">
                      <h4>{ev.title}</h4>
                      <div className="event-meta">
                        <span>🕐 {ev.time}</span>
                        <span>📍 {ev.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="newsletter-signup reveal-right">
              <div className="newsletter-box">
                <span className="newsletter-icon">📬</span>
                <h3>Stay Updated</h3>
                <p>Subscribe to our school newsletter and never miss important announcements, events, and news from Excelsior.</p>
                <form onSubmit={e => e.preventDefault()}>
                  <input type="email" placeholder="Your email address" />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
                <div className="newsletter-features">
                  <span>✓ Weekly digest</span>
                  <span>✓ Event reminders</span>
                  <span>✓ Academic updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
