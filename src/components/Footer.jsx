import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{
      background: 'var(--bg-main)',
      borderTop: '1px solid var(--border-light)',
      paddingTop: '70px',
      paddingBottom: '40px'
    }}>
      <div className="container-calm">
        
        {/* Top Footer row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr',
          gap: '40px',
          marginBottom: '50px'
        }} className="footer-calm-grid">
          
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              letterSpacing: '0.1em',
              fontWeight: 500,
              color: '#ffffff',
              marginBottom: '10px'
            }}>
              GREEN PROPERTIES
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '360px', lineHeight: 1.6, marginBottom: '20px' }}>
              Specialized brokerage & investment advisory representing high-end residential developments in Islamabad. Currently marketing The Atrium Hills opposite DHA Phase II.
            </p>
            <div style={{ fontSize: '0.76rem', color: 'var(--accent-gold)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              CDA Approved &bull; Seven Arz Development Group
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Index
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Project Overview', href: '#overview' },
                { label: 'Residences & Plans', href: '#residences' },
                { label: 'Payment Architecture', href: '#payment' },
                { label: 'Curated Amenities', href: '#amenities' },
                { label: 'Location Advantage', href: '#location' },
                { label: 'Delivered Portfolio', href: '#portfolio' },
              ].map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.86rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Phone Number */}
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Direct Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-serif)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Phone size={16} color="var(--accent-gold)" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                {COMPANY_INFO.location}
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  onClick={onOpenBooking}
                  className="btn-gold-minimal"
                  style={{ padding: '10px 20px', fontSize: '0.78rem' }}
                >
                  Reserve Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Green Properties. All rights reserved.
          </div>
          <div>
            Direct Inquiries: <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>{COMPANY_INFO.phoneDisplay}</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-calm-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}
