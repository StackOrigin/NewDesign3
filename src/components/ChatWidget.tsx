import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const phone = '9779800000000';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      {isOpen && (
        <div
          style={{
            position: 'absolute', bottom: 70, right: 0, width: 320,
            background: 'white', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            overflow: 'hidden', border: '1px solid #e2e8f0', animation: 'fadeInUp 0.3s ease'
          }}
        >
          <div style={{ background: 'var(--navy, #0f1f3a)', color: 'white', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>Admissions Helpdesk</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold-light, #e0bd68)' }}>Online · Direct Admissions Desk</div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>
              ×
            </button>
          </div>

          <div style={{ padding: 18, background: '#f8fafc', fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>
            Welcome to Excelsior Apex. Have questions about admissions, fees, or entrance test dates? Send us a direct inquiry.
          </div>

          <form onSubmit={handleSend} style={{ padding: 16, borderTop: '1px solid #e2e8f0' }}>
            <textarea
              placeholder="Type your question here..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
            />
            <button
              type="submit"
              style={{
                width: '100%', marginTop: 10, padding: '10px', borderRadius: 8,
                background: 'var(--navy, #0f1f3a)', color: 'white', fontWeight: 700, border: 'none',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}
            >
              Start Direct Inquiry
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 54, height: 54, borderRadius: '50%', background: 'var(--navy, #0f1f3a)',
          color: 'var(--gold-light, #e0bd68)', border: '2px solid var(--gold, #d4af37)', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(15, 31, 58, 0.4)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: isOpen ? '1.5rem' : '1rem',
          transition: 'transform 0.2s ease'
        }}
        aria-label="Open Admissions Chat"
      >
        {isOpen ? '×' : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>
    </div>
  );
}
