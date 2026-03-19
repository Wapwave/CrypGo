import React from 'react'

const Footer = ({ personalInfo, onNavClick }) => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: '6rem 0 4rem',
      marginTop: 'auto',
      background: 'var(--color-bg)',
      width: '100%',
      maxWidth: 'var(--max-width)',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        gap: '4rem',
        padding: '0 2rem'
      }}>
        <div style={{ maxWidth: '500px' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.05em', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1.5rem' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--color-primary)' }}></div>
            <span style={{ color: 'var(--color-text)' }}>CRYPGO</span>
          </div>
          <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem', lineHeight: '1.8', fontWeight: '500' }}>
            The foundational digital asset infrastructure for global financial institutional entities.
            Providing secure connectivity, liquidity aggregation, and real-time execution nodes.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-text)', marginBottom: '1.5rem' }}>Network Nodes</h4>
          <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <li>
              <button
                onClick={() => onNavClick?.('markets')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
              >Live Markets</button>
            </li>
            <li>
              <button
                onClick={() => onNavClick?.('portfolio')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
              >Terminal Access</button>
            </li>
            <li>
              <button
                onClick={() => onNavClick?.('admin')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
              >Control Plane</button>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-text)', marginBottom: '1.5rem' }}>Connectivity</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {personalInfo && personalInfo.socials && Object.entries(personalInfo.socials).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ textTransform: 'uppercase', color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em' }}>
                {platform}_NODE
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        margin: '6rem 2rem 0',
        paddingTop: '3rem',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.65rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        <div className="mono">&copy; {new Date().getFullYear()} CRYPGO_INSTITUTIONAL__v3.0.4</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span>Network_Uptime: 99.999%</span>
          <span>Latency: 8ms</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
