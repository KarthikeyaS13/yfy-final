"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  Send, 
  Download, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  X,
  AlertTriangle,
  FileText,
  Clock
} from 'lucide-react';
import styles from './ComplianceCalendar.module.css';

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function ComplianceCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  
  const [filterType, setFilterType] = useState('All');
  const [filterState, setFilterState] = useState('All India');
  const [filterFrequency, setFilterFrequency] = useState('All');
  
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState({ loading: false, success: false, error: '' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    headcount: '',
    state: 'All India'
  });

  useEffect(() => {
    fetch('/api/compliance')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
      })
      .catch(err => console.error("Failed to load compliance events:", err));
  }, []);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    setSubscribeStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          frequency: 'monthly_calendar',
          metadata: {
            name: formData.name,
            company: formData.company,
            headcount: formData.headcount,
            state: formData.state
          }
        })
      });

      const data = await res.json();
      if (res.ok) {
        setSubscribeStatus({ loading: false, success: true, error: '' });
        setTimeout(() => {
          setIsSubscribeModalOpen(false);
          setSubscribeStatus({ loading: false, success: false, error: '' });
          setFormData({ name: '', email: '', company: '', headcount: '', state: 'All India' });
        }, 2000);
      } else {
        setSubscribeStatus({ loading: false, success: false, error: data.error || 'Failed to subscribe.' });
      }
    } catch {
      setSubscribeStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  // Calendar calculations
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const currentMonth1Indexed = currentDate.getMonth() + 1;

  // Filter events based on criteria and active month
  const isEventDueInCurrentMonth = (evt) => {
    const freq = (evt.frequency || 'monthly').toLowerCase().trim();

    if (freq === 'monthly') {
      return true;
    }

    if (freq === 'annual') {
      return evt.dueMonth ? evt.dueMonth === currentMonth1Indexed : true;
    }

    if (freq === 'half_yearly') {
      if (evt.dueMonth) {
        return evt.dueMonth === currentMonth1Indexed;
      }
      return [5, 11, 7, 1].includes(currentMonth1Indexed);
    }

    if (freq === 'quarterly') {
      if (evt.dueMonth) {
        return evt.dueMonth === currentMonth1Indexed;
      }
      return [7, 10, 1, 5, 4, 12].includes(currentMonth1Indexed);
    }

    return true;
  };

  const filteredEvents = events.filter(evt => {
    if (filterType !== 'All' && evt.type !== filterType) return false;
    if (filterState !== 'All India' && evt.state !== 'All India' && evt.state !== filterState) return false;
    if (filterFrequency !== 'All' && (evt.frequency || 'monthly').toLowerCase() !== filterFrequency.toLowerCase()) return false;
    return isEventDueInCurrentMonth(evt);
  });

  const getEventsForDay = (day) => {
    return filteredEvents.filter(evt => (evt.dueDateDay || 15) === day);
  };

  const getFreqBadgeStyle = (freq) => {
    const f = (freq || 'monthly').toLowerCase();
    if (f === 'quarterly') return styles.freqQuarterly;
    if (f === 'half_yearly') return styles.freqHalfYearly;
    if (f === 'annual') return styles.freqAnnual;
    return styles.freqMonthly;
  };

  return (
    <div className={styles.calendarPage}>
      <div className="container-lg">
        
        <div className={`${styles.hero} reveal`}>
          <h1 className={styles.title}>Statutory Compliance Calendar</h1>
          <p className={styles.subtitle}>
            Stay ahead of Indian labour law deadlines. Filter across monthly, quarterly, half-yearly, and annual obligations, and sync with your personal calendar feed.
          </p>
        </div>

        {/* Controls & Filter Toolbar */}
        <div className={`${styles.controls} reveal`}>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>State Scope</span>
              <select className={styles.select} value={filterState} onChange={e => setFilterState(e.target.value)}>
                <option value="All India">All India</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Statute / Act</span>
              <select className={styles.select} value={filterType} onChange={e => setFilterType(e.target.value)}>
                <option value="All">All Statutes</option>
                <option value="PF">EPF (Provident Fund)</option>
                <option value="ESI">ESIC (State Insurance)</option>
                <option value="TDS">TDS / Income Tax</option>
                <option value="PT">Professional Tax</option>
                <option value="CLRA">Contract Labour (CLRA)</option>
                <option value="Factories">Factories Act</option>
                <option value="LWF">Labour Welfare Fund</option>
                <option value="Bonus">Payment of Bonus</option>
              </select>
            </div>
          </div>

          <div className={styles.monthToggle}>
            <button className={styles.iconBtn} onClick={prevMonth} aria-label="Previous Month">
              <ChevronLeft size={20} />
            </button>
            <div className={styles.currentMonth}>
              {MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <button className={styles.iconBtn} onClick={nextMonth} aria-label="Next Month">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/api/calendar" 
              download="yfy-statutory-compliance.ics"
              className={styles.syncCalendarBtn}
              title="Download RFC 5545 iCal feed for Outlook, Apple Calendar, or Google Calendar"
            >
              <CalendarIcon size={16} />
              <span>Sync .ICS Feed</span>
            </a>

            <button onClick={() => setIsSubscribeModalOpen(true)} className={styles.subscribeActionBtn}>
              <Bell size={16} />
              <span>Subscribe to Alerts</span>
            </button>
          </div>
        </div>

        {/* Frequency Quick Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700, marginRight: '6px' }}>
            Return Frequency:
          </span>
          {[
            { id: 'All', label: 'All Frequencies' },
            { id: 'monthly', label: 'Monthly' },
            { id: 'quarterly', label: 'Quarterly' },
            { id: 'half_yearly', label: 'Half-Yearly' },
            { id: 'annual', label: 'Annual' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilterFrequency(tab.id)}
              className={`${styles.freqFilterTab} ${filterFrequency === tab.id ? styles.freqFilterTabActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Calendar Grid */}
        <div className={`${styles.calendarGrid} reveal reveal-delay-2`}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className={styles.dayOfWeek}>{day}</div>
          ))}

          {/* Empty cells for start of month */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className={styles.calendarCell} style={{ opacity: 0.3 }} />
          ))}

          {/* Days of month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = getEventsForDay(day);
            const isToday = new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear();
            
            return (
              <div key={day} className={`${styles.calendarCell} ${isToday ? styles.isToday : ''}`}>
                <div className={styles.cellHeader}>
                  <span className={styles.dateNumber}>{day}</span>
                </div>
                <div className={styles.eventsContainer}>
                  {dayEvents.map(evt => (
                    <div 
                      key={evt.id} 
                      onClick={() => setSelectedEvent(evt)}
                      className={`${styles.eventItem} ${styles[`evt${evt.type}`] || styles.evtPF}`}
                      title={`Click to view details: ${evt.title}`}
                    >
                      <span style={{ fontWeight: 700 }}>{evt.type}:</span> {evt.title}
                      {evt.form_number && (
                        <span className={styles.formPill} style={{ marginLeft: '4px', transform: 'scale(0.85)', display: 'inline-block' }}>
                          {evt.form_number}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Alternative List View */}
        <div className={`${styles.listView} reveal reveal-delay-2`}>
          {filteredEvents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                No statutory compliance deadlines due in {MONTH_NAMES[currentDate.getMonth()]} matching your filter criteria.
              </p>
            </div>
          ) : null}
          
          {filteredEvents.slice().sort((a,b) => (a.dueDateDay || 15) - (b.dueDateDay || 15)).map(evt => (
            <div key={evt.id} className={styles.listRow} onClick={() => setSelectedEvent(evt)} style={{ cursor: 'pointer' }}>
              <div className={styles.listDateBox}>
                <span className={styles.listDateDay}>{evt.dueDateDay || 15}</span>
                <span className={styles.listDateMonth}>{MONTH_NAMES[currentDate.getMonth()].substring(0,3)}</span>
              </div>
              <div className={styles.listDetails}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <h3 className={styles.listTitle} style={{ margin: 0 }}>{evt.title}</h3>
                  <span className={`${styles.freqBadge} ${getFreqBadgeStyle(evt.frequency)}`} style={{ fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', textTransform: 'capitalize' }}>
                    {(evt.frequency || 'monthly').replace('_', '-')}
                  </span>
                  {evt.form_number && (
                    <span className={styles.formPill}>{evt.form_number}</span>
                  )}
                </div>

                <p className={styles.listDesc}>{evt.description || 'Mandatory statutory return under applicable labour code regulations.'}</p>
                
                <div className={styles.listMeta}>
                  <span className={`${styles.badge} ${styles[`bg${evt.type}`] || styles.bgPF}`}>{evt.type}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{evt.state || 'All India'}</span>
                  {evt.penalty_clause && (
                    <span className={styles.penaltyPill}>
                      <AlertTriangle size={12} /> {evt.penalty_clause}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className={`${styles.badge} ${styles[`bg${selectedEvent.type}`] || styles.bgPF}`}>
                    {selectedEvent.type}
                  </span>
                  <span className={`${styles.freqBadge} ${getFreqBadgeStyle(selectedEvent.frequency)}`} style={{ textTransform: 'capitalize' }}>
                    {(selectedEvent.frequency || 'monthly').replace('_', '-')} Return
                  </span>
                  {selectedEvent.form_number && (
                    <span className={styles.formPill}>{selectedEvent.form_number}</span>
                  )}
                </div>
                <h2 className={styles.modalTitle} style={{ fontSize: '1.3rem' }}>{selectedEvent.title}</h2>
              </div>
              <button onClick={() => setSelectedEvent(null)} className={styles.cancelBtn} style={{ padding: '6px 10px' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '1rem', marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Filing Due Date</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-xlight)', marginTop: '2px' }}>
                  Day {selectedEvent.dueDateDay || 15} of {MONTH_NAMES[currentDate.getMonth()]}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Jurisdiction</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
                  {selectedEvent.state || 'All India'}
                </div>
              </div>
            </div>

            {selectedEvent.description && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Statutory Obligation Scope
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {selectedEvent.description}
                </p>
              </div>
            )}

            {selectedEvent.penalty_clause && (
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '8px', padding: '12px', marginBottom: '1.5rem' }}>
                <div style={{ color: '#fca5a5', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <AlertTriangle size={14} /> Non-Compliance Penalty / Fine Clause
                </div>
                <div style={{ color: '#fecaca', fontSize: '0.85rem' }}>
                  {selectedEvent.penalty_clause}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a 
                href="/api/calendar" 
                download="yfy-statutory-calendar.ics" 
                className={styles.syncCalendarBtn}
                style={{ fontSize: '0.8rem', padding: '8px 14px' }}
              >
                <Download size={14} />
                <span>Export to iCal</span>
              </a>

              <button onClick={() => setSelectedEvent(null)} className={styles.submitBtn} style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBSCRIBE MODAL */}
      {isSubscribeModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsSubscribeModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Get Statutory Return Alerts</h2>
            <p className={styles.modalSubtitle}>
              Receive timely reminders before monthly, quarterly, and annual return deadlines directly in your corporate inbox.
            </p>
            
            {subscribeStatus.success ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="#22d3a0" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Subscription Confirmed!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  You are now registered for yfy® compliance calendar broadcasts and due date alerts.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribeSubmit}>
                {subscribeStatus.error && (
                  <div style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                    {subscribeStatus.error}
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input 
                    required
                    className={styles.input} 
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Corporate Mail ID *</label>
                  <input 
                    required
                    type="email"
                    className={styles.input} 
                    placeholder="name@company.in"
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Company Name *</label>
                  <input 
                    required
                    className={styles.input} 
                    placeholder="Your Organization"
                    value={formData.company} 
                    onChange={e => setFormData({...formData, company: e.target.value})} 
                  />
                </div>

                <div className={styles.modalRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Head Count *</label>
                    <select 
                      required
                      className={styles.input}
                      value={formData.headcount}
                      onChange={e => setFormData({...formData, headcount: e.target.value})}
                    >
                      <option value="" disabled>Select</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5000-10000">5,000 - 10,000</option>
                      <option value="10000+">10,000+</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>State *</label>
                    <select 
                      required
                      className={styles.input}
                      value={formData.state}
                      onChange={e => setFormData({...formData, state: e.target.value})}
                    >
                      <option value="All India">All India</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                    </select>
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <button 
                    type="button" 
                    onClick={() => setIsSubscribeModalOpen(false)} 
                    className={styles.cancelBtn}
                    disabled={subscribeStatus.loading}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className={styles.submitBtn}
                    disabled={subscribeStatus.loading}
                  >
                    <Send size={16} /> 
                    <span>{subscribeStatus.loading ? 'Subscribing...' : 'Subscribe to Alerts'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
