import React from 'react'

const Footer = ({ personalInfo }) => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: '5rem 5%',
      marginTop: 'auto',
      background: 'rgba(5, 8, 16, 0.9)',
      backdropFilter: 'blur(20px)'
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem'
      }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--color-primary)' }}>CRYP</span>
            <span style={{ color: 'var(--color-text)' }}>GO</span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Leading the evolution of digital asset management through high-performance tools and transparent insights.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Platform</h4>
          <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="#hero">Markets</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {Object.entries(personalInfo.socials).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ textTransform: 'capitalize' }}>
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '4rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid var(--color-glass-border)',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.875rem'
      }}>
        &copy; {new Date().getFullYear()} CRYPGO Digital. All rights reserved. Built for visionaries.
      </div>
    </footer >
  )
}

export default Footer
