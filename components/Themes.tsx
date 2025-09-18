'use client'

import { useState } from 'react'

const Themes = () => {
  const themes = [
    {
      id: 1,
      title: "Airbnb Accommodation",
      subtitle: "Premium Stay Experience",
      description: "Book our beautiful property for your perfect getaway. Comfortable accommodation for up to 50 guests with modern amenities and scenic surroundings.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "BOOK NOW",
      layout: "left"
    },
    {
      id: 2,
      title: "Photo Shoot Venue",
      subtitle: "Picture Perfect Locations",
      description: "Capture stunning moments at our picturesque property. Ideal for professional photography, pre-wedding shoots, and creative sessions with diverse backdrops.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "BOOK SHOOT",
      layout: "right"
    },
    {
      id: 3,
      title: "Events & Celebrations",
      subtitle: "Weddings • Birthdays • Parties",
      description: "Host your special occasions in our elegant venue. Perfect for intimate weddings, birthday celebrations, and private parties accommodating up to 50 guests.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "PLAN EVENT",
      layout: "left"
    },
    {
      id: 4,
      title: "Wellness & Activities",
      subtitle: "Meditation • Yoga • Bootcamp",
      description: "Experience tranquility and wellness at our serene property. We organize meditation sessions, yoga classes, fitness bootcamps, and guided property tours.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "JOIN SESSION",
      layout: "right"
    }
  ]

  return (
    <section id="themes" style={{
      padding: '4rem 0',
      background: '#f8f8f8'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#8B4513',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            fontFamily: 'Peach Brown, sans-serif'
          }}>
            Our Services
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: '#D4AF37',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{
            fontSize: '1.125rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Experience our beautiful property through various services - from comfortable stays to memorable events, creative shoots to wellness activities
          </p>
        </div>

        {/* Theme Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem'
        }}>
          {themes.map((theme, index) => (
            <div key={theme.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
              flexDirection: theme.layout === 'right' ? 'row-reverse' : 'row',
              minHeight: '400px'
            }} className="theme-card">
              {/* Image Section */}
              <div style={{
                flex: '1',
                position: 'relative',
                height: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${theme.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.3s ease'
                }} className="theme-image"></div>
              </div>

              {/* Content Section */}
              <div style={{
                flex: '1',
                padding: '2rem',
                textAlign: theme.layout === 'right' ? 'right' : 'left'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  color: '#8B4513',
                  marginBottom: '0.5rem',
                  lineHeight: '1.2',
                  fontFamily: 'Peach Brown, sans-serif'
                }}>
                  {theme.title}
                </h3>
                
                <h4 style={{
                  fontSize: '1rem',
                  color: '#8B4513',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}>
                  {theme.subtitle}
                </h4>

                <p style={{
                  fontSize: '1.125rem',
                  color: '#666',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  maxWidth: '400px',
                  margin: theme.layout === 'right' ? '0 0 2rem auto' : '0 0 2rem 0'
                }}>
                  {theme.description}
                </p>

                <button style={{
                  background: '#8B4513',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase'
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = '#D4AF37';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = '#8B4513';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}>
                  {theme.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Themes
