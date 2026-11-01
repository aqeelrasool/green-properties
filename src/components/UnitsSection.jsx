import React, { useState } from 'react';
import { 
  Maximize2, 
  Bed, 
  Bath, 
  Car, 
  FileText, 
  Check, 
  ArrowRight, 
  Layers, 
  Sparkles,
  ExternalLink,
  Percent
} from 'lucide-react';
import { APARTMENT_UNITS } from '../data';

export default function UnitsSection({ onSelectUnit, onOpenBooking, onOpenFloorPlanModal }) {
  const [selectedUnitId, setSelectedUnitId] = useState(APARTMENT_UNITS[0].id);

  const currentUnit = APARTMENT_UNITS.find(u => u.id === selectedUnitId) || APARTMENT_UNITS[0];

  const formatPKR = (amount) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(amount).replace('PKR', 'PKR ');
  };

  return (
    <section id="units" style={{
      padding: '100px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, #08120c 50%, var(--bg-primary) 100%)'
    }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 98, 62, 0.15) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <div className="badge-emerald" style={{ marginBottom: '14px', display: 'inline-block' }}>
            ARCHITECTURAL LAYOUTS & FLOOR PLANS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Engineered For Living. <span className="text-gradient-emerald">Mastered For Luxury.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Browse through genuine official floor plans of the 1, 2, and 3 Bedroom residences at Atrium Hills.
            Every unit incorporates expansive terraces, dedicated car parking, and intelligent cross-ventilation.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          {APARTMENT_UNITS.map((unit) => {
            const isActive = unit.id === selectedUnitId;
            return (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #1fb877, #10623e)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid #52e1a3' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 6px 20px rgba(31, 184, 119, 0.4)' : 'none'
                }}
              >
                <span>{unit.name}</span>
                <span style={{
                  fontSize: '0.74rem',
                  background: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.1)',
                  padding: '2px 8px',
                  borderRadius: '9999px'
                }}>
                  {unit.sqft} SQFT
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Master Card for Selected Unit */}
        <div className="glass-panel" style={{
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.1fr)',
          gap: '44px',
          alignItems: 'center'
        }} className="unit-display-grid">

          {/* Left: Interactive High-Res Floor Plan Viewer */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div>
                <span className="badge-gold" style={{ marginRight: '8px' }}>{currentUnit.tag}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Official Architectural Blueprint</span>
              </div>
              <button
                onClick={() => onOpenFloorPlanModal(currentUnit)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Maximize2 size={14} />
                <span>Zoom Plan</span>
              </button>
            </div>

            {/* Floor Plan Image Frame */}
            <div 
              onClick={() => onOpenFloorPlanModal(currentUnit)}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '380px',
                maxHeight: '460px',
                cursor: 'zoom-in',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <img
                src={currentUnit.floorPlanImg}
                alt={`${currentUnit.name} Floor Plan`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'rgba(7, 13, 10, 0.85)',
                color: '#52e1a3',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Sparkles size={12} />
                Click to Expand HD Plan
              </div>
            </div>

            {/* Micro specs pill row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '20px',
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bed size={20} color="#52e1a3" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{currentUnit.beds} Bedroom{currentUnit.beds > 1 ? 's' : ''}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Living Space</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bath size={20} color="#52e1a3" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{currentUnit.baths} Bathroom{currentUnit.baths > 1 ? 's' : ''}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Modern Sanitary</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Car size={20} color="#f3dc84" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{currentUnit.parking}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Covered Bay</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Unit Details & Breakdown */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge-emerald">{currentUnit.sqft} SQ.FT TOTAL AREA</span>
              <span className="badge-gold">15% DISCOUNT APPLIED</span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', marginBottom: '14px' }}>
              {currentUnit.name}
            </h3>

            {/* Price Cards */}
            <div style={{
              background: 'rgba(7, 46, 29, 0.35)',
              border: '1px solid rgba(82, 225, 163, 0.3)',
              borderRadius: '14px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pre-Launch Discounted Price</span>
                  <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f3dc84' }}>
                    {formatPKR(currentUnit.priceDiscounted)}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: '#ef4444', textDecoration: 'line-through' }}>
                    Standard: {formatPKR(currentUnit.priceStandard)}
                  </span>
                  <div style={{ fontSize: '0.82rem', color: '#52e1a3', fontWeight: 700 }}>
                    Save PKR {(currentUnit.priceStandard - currentUnit.priceDiscounted).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Installment breakdown quick view */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                textAlign: 'center'
              }}>
                <div style={{ background: 'rgba(0,0,0,0.25)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Booking (20%)</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    {formatPKR(currentUnit.downpayment20)}
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.25)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Monthly (48x)</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#52e1a3' }}>
                    {formatPKR(currentUnit.monthly48)}
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.25)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Possession (15%)</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    {formatPKR(currentUnit.possession15)}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Checklist */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '12px' }}>
                ARCHITECTURAL SPECIFICATIONS & HIGHLIGHTS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentUnit.features.map((feat, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(31, 184, 119, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={12} color="#52e1a3" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenBooking(currentUnit)}
                className="btn-gold"
                style={{ flex: 1, minWidth: '200px' }}
              >
                <span>Book This Unit Now</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onSelectUnit(currentUnit)}
                className="btn-outline"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <FileText size={16} />
                <span>Full Payment Breakdown</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 990px) {
          .unit-display-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
