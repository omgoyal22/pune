'use client'

import { useState, useEffect } from 'react'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Placeholder images for the slideshow - elegant interior designs
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Elegant dining room with floral wallpaper'
    },
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Luxurious living room with warm lighting'
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Modern kitchen with elegant design'
    },
    {
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Sophisticated bedroom interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Classic interior with vintage elements'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)'
          }}></div>
        </div>
      ))}
      
      {/* Content overlay */}
      <div className="content-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            {/* Logo recreation based on the red logo image */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h1 className="logo-text" style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                marginBottom: '1rem',
                letterSpacing: '0.2em'
              }}>
                SAANREYA
              </h1>
              <div style={{
                width: '8rem',
                height: '1px',
                background: '#D4AF37',
                marginBottom: '1rem'
              }}></div>
              <p style={{
                color: '#D4AF37',
                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                letterSpacing: '0.1em',
                fontWeight: '300'
              }}>
                विचार मंथन विस्तार
              </p>
            </div>
          </div>
          
          <div style={{
            maxWidth: '32rem',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '300',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              Crafting Timeless Elegance Through Thoughtful Design
            </p>
            <button style={{
              background: '#D4AF37',
              color: 'white',
              padding: '0.75rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '500',
              letterSpacing: '0.05em',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.background = '#B8941F';
              target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.background = '#D4AF37';
              target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}>
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem'
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? '#D4AF37' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              if (index !== currentSlide) {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'rgba(255, 255, 255, 0.7)';
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentSlide) {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'rgba(255, 255, 255, 0.5)';
              }
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
