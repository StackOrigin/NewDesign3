import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar as CalIcon } from '../../components/Icons';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { calendarEvents } from '../../data/schoolData';
import './Calendar.css';

const typeColors: Record<string, string> = { academic: '#1e4d9e', event: '#c9a84c', sports: '#059669', holiday: '#dc2626' };
const typeLabels: Record<string, string> = { academic: 'Academic', event: 'Event', sports: 'Sports', holiday: 'Holiday' };

export default function CalendarPage() {
  useScrollReveal();
  const [date, setDate] = useState(new Date(2025, 8, 1));
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const eventsForDate = (d: number) => calendarEvents.filter(e => { const ed = new Date(e.date); return ed.getFullYear() === year && ed.getMonth() === month && ed.getDate() === d; });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Calendar</span></nav>
          <h1 className="page-title">School Calendar</h1>
          <p className="page-subtitle">Stay informed about academic dates, events, sports, and holidays.</p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="calendar-card reveal">
            <div className="calendar-header">
              <button onClick={() => setDate(new Date(year, month - 1, 1))} className="calendar-nav"><ChevronLeft size={22} /></button>
              <h2 className="calendar-month">{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
              <button onClick={() => setDate(new Date(year, month + 1, 1))} className="calendar-nav"><ChevronRight size={22} /></button>
            </div>
            <div className="calendar-weekdays">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d}>{d}</div>)}</div>
            <div className="calendar-grid">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} className="calendar-day empty" />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const evs = eventsForDate(day);
                return (
                  <div key={day} className={`calendar-day ${evs.length ? 'has-event' : ''}`}>
                    <span className="day-number">{day}</span>
                    {evs.map(e => <div key={e.title} className="calendar-event" style={{ background: typeColors[e.type] }}>{e.title}</div>)}
                  </div>
                );
              })}
            </div>
            <div className="calendar-legend">
              {Object.entries(typeLabels).map(([type, label]) => (
                <div key={type} className="legend-item"><span className="legend-dot" style={{ background: typeColors[type] }} />{label}</div>
              ))}
            </div>
          </div>

          <div className="calendar-upcoming reveal">
            <h3 className="upcoming-title"><CalIcon size={20} /> Upcoming Events</h3>
            <div className="upcoming-list">
              {calendarEvents.map(e => (
                <div key={e.date + e.title} className="upcoming-item">
                  <span className="upcoming-date">{new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span className="upcoming-type" style={{ background: typeColors[e.type] }}>{typeLabels[e.type]}</span>
                  <span className="upcoming-title-text">{e.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
