import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RESIDENCE_UNITS, COMPANY_INFO } from '../data';

export default function PaymentSection({ onOpenBooking }) {
  const formatPKR = (num) => 'PKR ' + Number(num).toLocaleString('en-PK');

  return (
    <section id="payment" style={{
      padding: '100px 0',
      background: 'var(--bg-main)'
    }}>
      <div className="container-calm">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: '640px', marginBottom: '40px' }}
        >
          <span className="tag-minimal">Financial Schedule</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            Payment Architecture
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Structured over 48 comfortable monthly installments with only 20% down payment required to secure allocation.
          </p>
        </motion.div>

        {/* Clean Responsive Table */}
        <div style={{
          overflowX: 'auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: '8px'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            minWidth: '680px'
          }}>
            <thead>
              <tr style={{
                borderBottom: '1px solid var(--border-light)',
                background: 'var(--bg-surface)'
              }}>
                <th style={{ padding: '16px 20px', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Unit Type
                </th>
                <th style={{ padding: '16px 16px', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Area
                </th>
                <th style={{ padding: '16px 16px', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Total Price
                </th>
                <th style={{ padding: '16px 16px', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  20% Booking
                </th>
                <th style={{ padding: '16px 16px', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  48 Monthly
                </th>
                <th style={{ padding: '16px 20px', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {RESIDENCE_UNITS.map((u, i) => (
                <tr
                  key={u.id}
                  style={{
                    borderBottom: i < RESIDENCE_UNITS.length - 1 ? '1px solid var(--border-light)' : 'none',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-surface)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '18px 20px' }}>
                    <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.92rem' }}>{u.name}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{u.type}</div>
                  </td>
                  <td style={{ padding: '18px 16px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    {u.sqft} SQFT
                  </td>
                  <td style={{ padding: '18px 16px', color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.92rem' }}>
                    {formatPKR(u.price)}
                  </td>
                  <td style={{ padding: '18px 16px', color: '#ffffff', fontSize: '0.88rem' }}>
                    {formatPKR(u.downPayment)}
                  </td>
                  <td style={{ padding: '18px 16px', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    {formatPKR(u.monthly)}
                  </td>
                  <td style={{ padding: '18px 20px', textAlign: 'right' }}>
                    <button
                      onClick={() => onOpenBooking(u)}
                      className="btn-outline-minimal"
                      style={{ padding: '6px 14px', fontSize: '0.76rem' }}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Minimal Footer Note */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginTop: '24px',
          padding: '16px 20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '6px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            15% Possession on Handover. Pre-launch preferential rate applies directly in the official title of Atrium Hills.
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            <a
              href="/assets/Blue Payment Schedule HD.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--accent-gold)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 500
              }}
            >
              <Download size={14} />
              <span>Official Schedule PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
