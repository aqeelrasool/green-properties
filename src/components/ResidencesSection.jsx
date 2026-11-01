import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Maximize2, Check } from 'lucide-react';
import { RESIDENCE_UNITS } from '../data';

export default function ResidencesSection({ onOpenBooking, onOpenPlan }) {
  const [activeUnitId, setActiveUnitId] = useState(RESIDENCE_UNITS[0].id);

  const current = RESIDENCE_UNITS.find(u => u.id === activeUnitId) || RESIDENCE_UNITS[0];

  const formatPKR = (val) => 'PKR ' + Number(val).toLocaleString('en-PK');

  return (
    <section id="residences" style={{
      padding: '100px 0',
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container-calm">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: '640px', marginBottom: '48px' }}
        >
          <span className="tag-minimal">Curated Living Spaces</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            The Residences
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Thoughtfully planned 1, 2, and 3 Bedroom residential layouts featuring panoramic terraces, optimal cross-ventilation, and dedicated parking.
          </p>
        </motion.div>

        {/* Minimal Unit Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '36px',
          borderBottom: '1px solid var(--border-light)'
        }}>
          {RESIDENCE_UNITS.map((unit) => {
            const isActive = unit.id === activeUnitId;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                style={{
                  background: isActive ? 'var(--accent-gold)' : 'transparent',
                  color: isActive ? '#0c0d0e' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease'
                }}
              >
                {unit.name} &bull; {unit.sqft} SQFT
              </button>
            );
          })}
        </div>

        {/* Selected Unit Content with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center'
            }}
            className="residence-grid"
          >
            {/* Left: Floor Plan with Zoom Action */}
            <div style={{
              background: '#ffffff',
              borderRadius: '6px',
              padding: '24px',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '340px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
            }}
            onClick={() => onOpenPlan(current)}
            >
              <img
                src={current.planImg}
                alt={current.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '320px',
                  objectFit: 'contain'
                }}
              />
              <button
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  background: 'rgba(12, 13, 14, 0.85)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <Maximize2 size={13} />
                <span>Enlarge Plan</span>
              </button>
            </div>

            {/* Right: Spec Breakdown */}
            <div>
              <span className="tag-minimal">{current.type}</span>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{current.name}</h3>

              <div style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: '6px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Total Unit Price:</span>
                  <span style={{ fontSize: '1.45rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>
                    {formatPKR(current.price)}
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-light)',
                  textAlign: 'center'
                }} className="price-sub-grid">
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Booking (20%)</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{formatPKR(current.downPayment)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Monthly (48x)</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{formatPKR(current.monthly)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Possession (15%)</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{formatPKR(current.possession)}</div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                {current.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Check size={14} color="var(--accent-gold)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenBooking(current)}
                  className="btn-gold-minimal"
                  style={{ flex: 1, minWidth: '180px' }}
                >
                  <span>Book This Unit</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .residence-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .price-sub-grid {
            grid-template-columns: 1fr !important;
            text-align: left !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
