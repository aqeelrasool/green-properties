import React from 'react';
import { motion } from 'framer-motion';
import { AMENITIES_CALM } from '../data';

export default function AmenitiesSection() {
  return (
    <section id="amenities" style={{
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
          <span className="tag-minimal">Lifestyle & Wellness</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '16px' }}>
            Curated Amenities
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Designed to foster quiet wellness, social connection, and effortless daily living.
          </p>
        </motion.div>

        {/* 6 Clean Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {AMENITIES_CALM.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-calm"
              style={{ overflow: 'hidden' }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ padding: '20px 24px' }}>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '6px', color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
