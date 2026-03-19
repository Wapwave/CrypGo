import React from 'react'

const Hero = ({ data, personalInfo, onStart, nodeStatus }) => {
    return (
        <section id="hero" className="animate-fade-up" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            paddingTop: '8rem',
            paddingBottom: '6rem',
            borderBottom: '1px solid var(--color-border)',
            width: '100%'
        }}>
            <div style={{
                color: 'var(--color-primary)',
                fontSize: '0.8rem',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{ width: '15px', height: '2px', background: 'var(--color-primary)' }}></div>
                Institutional Grade
            </div>

            <h1 style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                lineHeight: '0.95',
                marginBottom: '2rem',
                fontWeight: '900',
                maxWidth: '900px',
                textTransform: 'uppercase',
                fontStyle: 'italic'
            }}>
                Foundational <br />
                <span className="text-gradient">Market Intelligence</span>
            </h1>

            <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-dim)',
                maxWidth: '600px',
                marginBottom: '3rem',
                lineHeight: '1.5',
                fontWeight: '500'
            }}>
                Scalable digital asset infrastructure for sophisticated global investors.
                CRYPGO delivers institutional-ready connectivity, settlement, and liquidity.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                    className="btn-primary"
                    style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}
                    onClick={onStart}
                >
                    Provision Node
                </button>
                <button className="btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}>
                    Technical Documentation
                </button>
            </div>

            {/* Metric Strip - Now Functional */}
            <div style={{
                marginTop: '6rem',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1px',
                background: 'var(--color-border)',
                border: '1px solid var(--color-border)'
            }}>
                {[
                    { label: 'Network Throughput', value: `${(nodeStatus?.throughput / 1000000).toFixed(2)}M TPS` },
                    { label: 'Settlement Latency', value: `${nodeStatus?.latency}ms` },
                    { label: 'Node Distribution', value: `${nodeStatus?.nodes} NODES` },
                    { label: 'Uptime Protocol', value: `${nodeStatus?.uptime}%` }
                ].map((stat, i) => (
                    <div key={i} style={{
                        padding: '2.5rem 2rem',
                        background: 'var(--color-bg)',
                        textAlign: 'left',
                        transition: 'background 0.3s'
                    }}>
                        <div className="mono" style={{
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            color: stat.label.includes('Throughput') ? 'var(--color-primary)' : 'var(--color-text)',
                            marginBottom: '0.5rem'
                        }}>
                            {stat.value}
                        </div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hero
