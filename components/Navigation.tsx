'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Property', href: '#property' },
    { name: 'Services', href: '#themes' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Bookings', href: '#bookings' },
    { name: 'Contact', href: '#contact' },
  ]

  const navLinkStyle = (isScrolled: boolean) => ({
    fontSize: '0.875rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '500',
    color: isScrolled ? '#333' : 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'all 0.3s ease',
    textShadow: !isScrolled ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none'
  })

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Left side navigation - Desktop */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className="hidden-mobile">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={navLinkStyle(isScrolled)}
                onMouseOver={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = isScrolled ? '#8B4513' : '#D4AF37';
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = isScrolled ? '#333' : 'white';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #991b1b, #7f1d1d)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
              }}>
                <span style={{
                  color: '#D4AF37',
                  fontSize: '1.125rem',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 'bold',
                  letterSpacing: '0.1em'
                }}>S</span>
              </div>
            </Link>
          </div>

          {/* Right side navigation - Desktop */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className="hidden-mobile">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={navLinkStyle(isScrolled)}
                onMouseOver={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = isScrolled ? '#8B4513' : '#D4AF37';
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = isScrolled ? '#333' : 'white';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button" style={{
            display: 'none'
          }}>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                color: isScrolled ? '#333' : 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                transition: 'color 0.3s ease'
              }}
            >
              <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }} className="mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = '#8B4513';
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = '#333';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation