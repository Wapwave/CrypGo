import React from 'react'

const Hero = ({ data, personalInfo }) => {
    return (
        <section id="hero" className="animate-fade-up" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '8rem',
            paddingBottom: '8rem'
        }}>
            <div style={{
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                background: 'rgba(99, 102, 241, 0.1)',
                color: 'var(--color-primary)',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '2rem',
                border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
                ✨ The Next Generation of Crypto Investment
            </div>

            <h1 style={{
                fontSize: 'clamp(3rem, 10vw, 5rem)',
                lineHeight: '1',
                marginBottom: '1.5rem',
                fontWeight: '800',
                maxWidth: '900px'
            }}>
                Redefining <span className="text-gradient">Portfolio Management</span>
            </h1>

            <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '700px',
                marginBottom: '3.5rem'
            }}>
                {data.subtitle} Experience a professional dashboard designed for high-conviction digital asset investors.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                    {data.ctaText}
                </button>
                <button className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                    Explore Features
                </button>
            </div>

            {/* Stats Board */}
            <div style={{ marginTop: '5rem', width: '100%' }}>
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {[
                        { label: 'Managed Assets', value: '$650,000+' },
                        { label: 'Win Rate', value: '78%' },
                        { label: 'Years Active', value: '4+' }
                    ].map((stat, i) => (
                        <div key={i} className="glass" style={{
                            padding: '2rem',
                            borderRadius: '24px',
                            minWidth: '200px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{stat.value}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
