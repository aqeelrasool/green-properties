import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function FloorPlanModal({ isOpen, onClose, unit, onOpenBooking }) {
  if (!isOpen || !unit) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(8, 9, 10, 0.94)',
      backdropFilter: 'blur(16px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}
    onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-gold)',
          borderRadius: '8px',
          padding: '28px',
          position: 'relative',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <span className="tag-minimal">{unit.sqft} SQFT BLUEPRINT</span>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>{unit.name}</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Plan container */}
        <div style={{
          background: '#ffffff',
          borderRadius: '6px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          marginBottom: '20px'
        }}>
          <img
            src={unit.planImg}
            alt={unit.name}
            style={{
              maxWidth: '100%',
              maxHeight: '480px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Price: <strong style={{ color: 'var(--accent-gold)' }}>PKR {unit.price.toLocaleString()}</strong> &bull; Down Payment: <strong>PKR {unit.downPayment.toLocaleString()}</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking(unit);
            }}
            className="btn-gold-minimal"
          >
            Reserve This Layout
          </button>
        </div>

      </motion.div>
    </div>
  );
}
