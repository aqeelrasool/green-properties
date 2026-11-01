import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { PROXIMITY_CALM, COMPANY_INFO } from '../data';

export default function LocationSection() {
  return (
    <section id="location" style={{
      padding: '100px 0',
      background: 'var(--bg-main)',
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
          <span className="tag-minimal">Connectivity</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            The Location Advantage
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Directly opposite DHA Phase II on Main GT Road, providing immediate access to Twin Cities arterial highways, retail, and corporate hubs.
          </p>
        </motion.div>

        {/* 2 Columns: Time Grid + Aerial Master View */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '40px',
          alignItems: 'center'
        }} className="location-calm-grid">
          
          {/* Proximity Grid */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
              marginBottom: '28px'
            }} className="proximity-pills">
              {PROXIMITY_CALM.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    padding: '16px 20px',
                    borderRadius: '6px'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    color: 'var(--accent-gold)',
                    lineHeight: 1
                  }}>
                    {p.time}
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#ffffff', marginTop: '6px', fontWeight: 500 }}>
                    {p.place}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: '20px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Site & Sales Office
                </div>
                <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                  Zaraj Housing, Opp DHA Phase II, Islamabad
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline-minimal"
                style={{ padding: '8px 16px', fontSize: '0.78rem' }}
              >
                Call: {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Aerial Master Visual */}
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.5)'
          }}>
            <img
              src="/assets/master_plan_aerial.jpeg"
              alt="Atrium Hills Master Plan Aerial"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .location-calm-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .proximity-pills {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
