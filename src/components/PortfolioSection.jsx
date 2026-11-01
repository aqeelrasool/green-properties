import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CALM, COMPANY_INFO } from '../data';

export default function PortfolioSection({ onOpenBooking }) {
  return (
    <section id="portfolio" style={{
      padding: '100px 0',
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container-calm">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: '640px', marginBottom: '48px' }}
        >
          <span className="tag-minimal">Delivered Heritage</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            Proven Landmark Track Record
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Over a decade of successful deliveries in Islamabad, DHA Phase 5, and Zaraj Housing by Seven Arz Development Group.
          </p>
        </motion.div>

        {/* 6 Grid items */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {PORTFOLIO_CALM.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="card-calm"
              style={{ overflow: 'hidden' }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>{item.title}</h3>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Timeline: {item.year}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  color: item.status.includes('Booking') ? 'var(--accent-gold)' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}>
                  {item.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quiet Advisory Banner */}
        <div style={{
          padding: '36px',
          background: 'var(--bg-main)',
          border: '1px solid var(--border-gold)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '580px' }}>
            <span className="tag-minimal" style={{ margin: 0 }}>Green Properties Advisory</span>
            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', margin: '8px 0 10px' }}>
              Secure Your Priority Allocation
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Direct bookings, transparent CDA title verification, and dedicated support at every milestone.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenBooking}
              className="btn-gold-minimal"
              style={{ padding: '14px 28px' }}
            >
              Reserve Booking
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-outline-minimal"
              style={{ padding: '13px 22px' }}
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
