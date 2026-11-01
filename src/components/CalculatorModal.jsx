import React, { useState } from 'react';
import { 
  Calculator, 
  X, 
  TrendingUp, 
  Sparkles, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { APARTMENT_UNITS } from '../data';

export default function CalculatorModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  const [selectedUnitId, setSelectedUnitId] = useState(APARTMENT_UNITS[0].id);
  const [downpaymentPct, setDownpaymentPct] = useState(20); // 20% to 50%
  const [planType, setPlanType] = useState('monthly'); // 'monthly' | 'quarterly'
  const [includeFurnishing, setIncludeFurnishing] = useState(false); // +2000 per sqft

  const unit = APARTMENT_UNITS.find(u => u.id === selectedUnitId) || APARTMENT_UNITS[0];

  // Base Discounted unit price
  const basePrice = unit.priceDiscounted;
  const furnishingCost = includeFurnishing ? unit.sqft * 2000 : 0;
  const totalPrice = basePrice + furnishingCost;

  // Downpayment (user customizable: 20%, 30%, 40%, 50%)
  const downpaymentAmount = Math.round((totalPrice * downpaymentPct) / 100);

  // Possession fixed at 15%
  const possessionAmount = Math.round((totalPrice * 15) / 100);

  // Remaining balance spread over 48 months or 16 quarters
  const remainingForInstallments = totalPrice - downpaymentAmount - possessionAmount;
  const monthlyAmount = Math.round(remainingForInstallments / 48);
  const quarterlyAmount = Math.round(remainingForInstallments / 16);

  // Projected Capital Appreciation (Conservative 25% annual in DHA/Zaraj corridor over 4 years)
  const projectedAppreciation4Yr = Math.round(totalPrice * 1.75);

  const formatPKR = (num) => 'PKR ' + Number(num).toLocaleString('en-PK');

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(3, 7, 5, 0.92)',
      backdropFilter: 'blur(20px)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}
    onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="glass-panel"
        style={{
          maxWidth: '840px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'rgba(11, 22, 16, 0.98)',
          border: '1.5px solid rgba(82, 225, 163, 0.4)',
          borderRadius: '24px',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 25px 70px rgba(0,0,0,0.8), 0 0 40px rgba(31, 184, 119, 0.2)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #1fb877, #10623e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator size={22} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: 0 }}>
                Smart Installment & ROI Estimator
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Custom payment simulator tailored for Atrium Hills Islamabad
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: '#ffffff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Unit Selector */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Select Desired Apartment Unit:
          </label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '8px'
          }}>
            {APARTMENT_UNITS.map((u) => {
              const active = u.id === selectedUnitId;
              return (
                <button
                  key={u.id}
                  onClick={() => setSelectedUnitId(u.id)}
                  style={{
                    background: active ? 'linear-gradient(135deg, #1fb877, #10623e)' : 'rgba(255,255,255,0.04)',
                    color: active ? '#ffffff' : 'var(--text-secondary)',
                    border: active ? '1px solid #52e1a3' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '8px 6px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div>{u.name.replace(' Apartment', '')}</div>
                  <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>{u.sqft} SQFT</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Downpayment Slider & Furnishing Option */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '24px',
          background: 'rgba(255,255,255,0.02)',
          padding: '16px',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.06)'
        }} className="calc-inputs-grid">
          {/* Down payment control */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Down Payment %:</span>
              <span style={{ fontSize: '0.92rem', color: '#52e1a3', fontWeight: 800 }}>{downpaymentPct}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="50"
              step="5"
              value={downpaymentPct}
              onChange={(e) => setDownpaymentPct(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#1fb877',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              <span>20% (Minimum)</span>
              <span>50% (Lower monthly)</span>
            </div>
          </div>

          {/* Model Furnishing Toggle */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontSize: '0.86rem',
              color: 'var(--text-primary)'
            }}>
              <input
                type="checkbox"
                checked={includeFurnishing}
                onChange={(e) => setIncludeFurnishing(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#d4af37', cursor: 'pointer' }}
              />
              <div>
                <strong>Add Model Furnishing</strong> (+PKR 2,000/sqft)
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Total furnish add-on: {formatPKR(unit.sqft * 2000)}
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Simulation Output Dashboard */}
        <div style={{
          background: 'rgba(7, 46, 29, 0.4)',
          border: '1px solid rgba(82, 225, 163, 0.35)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          {/* Price Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '14px',
            marginBottom: '18px'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Unit Investment</div>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f3dc84' }}>
                {formatPKR(totalPrice)}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge-emerald">15% PRE-LAUNCH DISCOUNT</span>
            </div>
          </div>

          {/* Breakdown cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '18px'
          }} className="calc-summary-grid">
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Initial Booking ({downpaymentPct}%)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#52e1a3' }}>
                {formatPKR(downpaymentAmount)}
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Monthly (48 Months)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                {formatPKR(monthlyAmount)}
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Possession (15%)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f3dc84' }}>
                {formatPKR(possessionAmount)}
              </div>
            </div>
          </div>

          {/* Projected Growth Forecast */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={18} color="#f3dc84" />
              <span style={{ fontSize: '0.84rem', color: '#f3dc84', fontWeight: 600 }}>
                Est. Handover Valuation (4-Year Corridor Trend):
              </span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
              {formatPKR(projectedAppreciation4Yr)}
            </div>
          </div>
        </div>

        {/* Modal CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              onClose();
              onOpenBooking(unit);
            }}
            className="btn-gold"
            style={{ flex: 1, padding: '14px', fontSize: '0.96rem' }}
          >
            <span>Proceed to Reserve This Allocation</span>
            <ArrowRight size={18} />
          </button>
          <button
            onClick={onClose}
            className="btn-outline"
            style={{ padding: '14px 24px' }}
          >
            Close
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .calc-inputs-grid, .calc-summary-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
