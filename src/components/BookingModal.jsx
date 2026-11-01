import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESIDENCE_UNITS, COMPANY_INFO } from '../data';

export default function BookingModal({ isOpen, onClose, initialUnit }) {
  if (!isOpen) return null;

  const [selectedUnitId, setSelectedUnitId] = useState(initialUnit?.id || RESIDENCE_UNITS[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const unit = RESIDENCE_UNITS.find(u => u.id === selectedUnitId) || RESIDENCE_UNITS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const getWhatsAppBookingUrl = () => {
    const text = `*Booking Inquiry - Green Properties*
Client: ${fullName}
Phone: ${phone}
Email: ${email}
Project: The Atrium Hills (CDA Approved)
Residence: ${unit.name} (${unit.sqft} SQFT)
Price: PKR ${unit.price.toLocaleString()}
Down Payment: PKR ${unit.downPayment.toLocaleString()}`;
    return `https://wa.me/923309871775?text=${encodeURIComponent(text)}`;
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(8, 9, 10, 0.9)',
      backdropFilter: 'blur(12px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}
    onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '560px',
          width: '100%',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-gold)',
          borderRadius: '8px',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.8)'
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div>
            <span className="tag-minimal">Private Booking</span>
            <h3 style={{ fontSize: '1.9rem', color: '#ffffff', margin: '4px 0 10px' }}>
              Reserve Your Residence
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
              Register your interest for <strong>The Atrium Hills</strong>. For direct immediate assistance, call <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 600 }}>{COMPANY_INFO.phoneDisplay}</a>.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Select Residence
                </label>
                <select
                  value={selectedUnitId}
                  onChange={(e) => setSelectedUnitId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  {RESIDENCE_UNITS.map(u => (
                    <option key={u.id} value={u.id} style={{ background: '#191b1e', color: '#ffffff' }}>
                      {u.name} — {u.sqft} SQFT — PKR {u.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 330 9871775"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@address.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold-minimal"
                style={{ width: '100%', padding: '14px', marginTop: '6px' }}
              >
                Submit Reservation
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <CheckCircle2 size={44} color="var(--accent-gold)" style={{ margin: '0 auto 16px' }} />
            <span className="tag-minimal">Inquiry Received</span>
            <h3 style={{ fontSize: '1.9rem', color: '#ffffff', margin: '4px 0 12px' }}>
              Thank You, {fullName}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
              Your reservation request for <strong>{unit.name}</strong> has been logged. Our advisory desk will reach out shortly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold-minimal"
                style={{ width: '100%' }}
              >
                Confirm via WhatsApp (+92 330 9871775)
              </a>

              <button
                onClick={onClose}
                className="btn-outline-minimal"
                style={{ width: '100%' }}
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
