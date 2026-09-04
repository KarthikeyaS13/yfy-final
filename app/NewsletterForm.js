'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          frequency: 'monthly_calendar',
          source: 'footer_subscription',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || "Subscribed! You'll receive monthly statutory alerts.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {status === 'success' ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          borderRadius: '8px',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: '#34d399',
          fontSize: '0.875rem'
        }}>
          <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
          <span>{message}</span>
        </div>
      ) : (
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="footer-input"
            placeholder="your@company.com"
            aria-label="Email for compliance alerts"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            required
          />
          <button 
            type="submit" 
            className="btn btn-primary btn-sm"
            disabled={status === 'loading'}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            {status === 'loading' && <Loader2 size={14} className="spin" />}
            <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
          </button>
        </form>
      )}

      {status === 'error' && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '6px',
          color: '#f87171',
          fontSize: '0.8rem'
        }}>
          <AlertCircle size={14} />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
