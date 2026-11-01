import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Overview', href: '#overview' },
    { label: 'Residences', href: '#residences' },
    { label: 'Payment Plan', href: '#payment' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(12, 13, 14, 0.94)' : 'rgba(12, 13, 14, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container-calm" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Name */}
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            letterSpacing: '0.12em',
            fontWeight: 500,
            color: '#ffffff'
          }}>
            GREEN PROPERTIES
          </div>
          <div style={{
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)'
          }}>
            Islamabad &bull; Private Advisory
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.84rem',
                letterSpacing: '0.04em',
                fontWeight: 400,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone + Booking CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.84rem',
              fontWeight: 500
            }}
            className="phone-header"
          >
            <Phone size={14} color="var(--accent-gold)" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="btn-gold-minimal"
            style={{ padding: '10px 18px', fontSize: '0.78rem' }}
          >
            Reserve Booking
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              color: '#ffffff',
              cursor: 'pointer'
            }}
            className="mobile-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'var(--bg-surface)',
              borderBottom: '1px solid var(--border-gold)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-serif)',
                  paddingBottom: '10px',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent-gold)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                <Phone size={16} />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold-minimal"
                style={{ width: '100%', textAlign: 'center' }}
              >
                WhatsApp Direct Inquiries
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .phone-header { display: inline-flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
