import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResidencesSection from './components/ResidencesSection';
import PaymentSection from './components/PaymentSection';
import AmenitiesSection from './components/AmenitiesSection';
import LocationSection from './components/LocationSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloorPlanModal from './components/FloorPlanModal';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const [floorPlanModalOpen, setFloorPlanModalOpen] = useState(false);
  const [selectedPlanUnit, setSelectedPlanUnit] = useState(null);

  const handleOpenBooking = (unit = null) => {
    setSelectedUnit(unit);
    setBookingModalOpen(true);
  };

  const handleOpenPlan = (unit) => {
    setSelectedPlanUnit(unit);
    setFloorPlanModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)', position: 'relative' }}>
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Calm Experience */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        <ResidencesSection 
          onOpenBooking={handleOpenBooking}
          onOpenPlan={handleOpenPlan}
        />

        <PaymentSection onOpenBooking={handleOpenBooking} />

        <AmenitiesSection />

        <LocationSection />

        <PortfolioSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialUnit={selectedUnit}
      />

      <FloorPlanModal 
        isOpen={floorPlanModalOpen}
        onClose={() => setFloorPlanModalOpen(false)}
        unit={selectedPlanUnit}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Quiet Direct Contact Bar for Mobile & Desktop */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        {/* Call button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-gold)',
            color: 'var(--accent-gold)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            textDecoration: 'none',
            transition: 'transform 0.2s ease'
          }}
          title={`Call ${COMPANY_INFO.phoneDisplay}`}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Phone size={20} />
        </a>

        {/* WhatsApp button */}
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-gold)',
            color: '#0c0d0e',
            padding: '12px 20px',
            borderRadius: '24px',
            boxShadow: '0 8px 24px rgba(197, 160, 89, 0.3)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.84rem',
            fontFamily: 'var(--font-sans)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MessageCircle size={18} />
          <span className="wa-text-calm">Inquire on WhatsApp</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .wa-text-calm {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
