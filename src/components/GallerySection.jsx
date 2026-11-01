import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  Camera, 
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalImg, setActiveModalImg] = useState(null);

  const categories = ['All', 'Exterior', 'Master Plan', 'Interiors', 'Amenities'];

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" style={{
      padding: '100px 0',
      position: 'relative',
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 46px' }}>
          <div className="badge-emerald" style={{ marginBottom: '14px', display: 'inline-block' }}>
            CINEMATIC ARCHITECTURAL SHOWCASE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Immersion In <span className="text-gradient-emerald">High Definition.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore rendered captures, aerial master plans, and hyper-realistic interior suites of The Atrium Hills.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '36px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'linear-gradient(135deg, #1fb877, #10623e)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid #52e1a3' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImg(img)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16 / 11',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: '#0d1612'
              }}
              className="gallery-card"
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease, filter 0.4s ease'
                }}
              />

              {/* Hover Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(7, 13, 10, 0.95) 0%, rgba(7, 13, 10, 0.2) 60%, transparent 100%)',
                opacity: 0.9,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
                transition: 'all 0.3s ease'
              }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#52e1a3',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {img.category}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '4px 0 0' }}>
                  {img.title}
                </h4>
              </div>

              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Maximize2 size={16} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(4, 8, 6, 0.96)',
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={() => setActiveModalImg(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveModalImg(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={24} />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1100px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={activeModalImg.src}
              alt={activeModalImg.title}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                border: '1px solid rgba(82, 225, 163, 0.3)'
              }}
            />
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <span className="badge-emerald" style={{ marginBottom: '6px' }}>{activeModalImg.category}</span>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '4px' }}>
                {activeModalImg.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
