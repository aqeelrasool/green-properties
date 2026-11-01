import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO, PROJECT_DETAILS } from '../data';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="overview" style={{
      position: 'relative',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      padding: '70px 0 90px',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 10%, #17191d 0%, var(--bg-main) 70%)'
    }}>
      {/* Subtle Background Glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container-calm" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '50px',
          alignItems: 'center'
        }} className="hero-calm-grid">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span className="tag-minimal" style={{ margin: 0 }}>
                {PROJECT_DETAILS.approvals} &bull; NOW ACCEPTING BOOKINGS
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
              lineHeight: 1.12,
              marginBottom: '24px',
              color: '#ffffff'
            }}>
              A Quiet Expression of <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Architectural Grandeur.</span>
            </h1>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              maxWidth: '540px',
              lineHeight: 1.7,
              marginBottom: '36px'
            }}>
              Green Properties presents <strong>{PROJECT_DETAILS.name}</strong>, a landmark 20-storey residential development situated opposite DHA Phase II, Islamabad. Masterfully envisioned for serene living with a flexible 4-year payment schedule.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '44px'
            }}>
              <button
                onClick={onOpenBooking}
                className="btn-gold-minimal"
                style={{ padding: '15px 32px' }}
              >
                <span>Reserve Residence</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline-minimal"
                style={{ padding: '14px 26px' }}
              >
                <span>Direct: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quiet Stats Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-light)'
            }} className="hero-stats-grid">
              {PROJECT_DETAILS.stats.map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    color: '#ffffff',
                    lineHeight: 1.1
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Architectural Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
              border: '1px solid var(--border-light)',
              aspectRatio: '4 / 3',
              position: 'relative'
            }}>
              <img
                src="/assets/hero_night.jpeg"
                alt="The Atrium Hills"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(to top, rgba(12, 13, 14, 0.95), transparent)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: '#ffffff' }}>
                    The Atrium Hills
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    Opposite DHA Phase II, Islamabad
                  </div>
                </div>
                <div style={{
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-gold)',
                  fontWeight: 600
                }}>
                  CDA VALIDATED
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-calm-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
