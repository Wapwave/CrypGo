import { useState } from 'react'

const Navbar = ({ currentUser, onLogout, onLoginClick, nodeStatus, onNavClick, activeView }) => {
    return (
        <nav style={{
            padding: '1.25rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)',
            width: '100%',
            maxWidth: 'var(--max-width)',
            margin: '0 auto'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.05em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '12px', height: '12px', background: 'var(--color-primary)', transition: 'opacity 0.2s', opacity: nodeStatus?.throughput > 1220000 ? 0.6 : 1 }}></div>
                    <span style={{ color: 'var(--color-text)' }}>CRYPGO</span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {['Markets', 'Portfolio', 'Analytics'].map(item => (
                        <button
                            key={item}
                            onClick={() => onNavClick?.(item.toLowerCase())}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: activeView === item.toLowerCase() ? 'var(--color-primary)' : 'var(--color-text-dim)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'color 0.2s',
                                borderBottom: activeView === item.toLowerCase() ? '1px solid var(--color-primary)' : 'none'
                            }}
                        >{item}</button>
                    ))}
                    {currentUser?.role === 'admin' && (
                        <button
                            onClick={() => onNavClick?.('admin')}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: activeView === 'admin' ? 'var(--color-primary)' : 'var(--color-text-dim)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'color 0.2s'
                            }}
                        >Oversight</button>
                    )}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingRight: '1.25rem', borderRight: '1px solid var(--color-border)' }}>
                    <div style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--color-success)',
                        borderRadius: '50%',
                        boxShadow: '0 0 8px var(--color-success)',
                        animation: 'pulse 1s infinite alternate'
                    }}></div>
                    <span className="mono" style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Node_{nodeStatus?.status || 'ACTIVE'} ({nodeStatus?.latency}ms)
                    </span>
                </div>

                {currentUser ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div className="mono" style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text)' }}>
                            {currentUser.fullName || currentUser.name}
                        </div>
                        <button
                            className="btn-secondary"
                            style={{ padding: '0.4rem 0.85rem', fontSize: '0.65rem' }}
                            onClick={onLogout}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn-primary"
                        style={{ padding: '0.5rem 1.25rem' }}
                        onClick={onLoginClick}
                    >
                        Access Terminal
                    </button>
                )}
            </div>
            <style>{`
                @keyframes pulse {
                    from { opacity: 0.4; }
                    to { opacity: 1; }
                }
            `}</style>
        </nav>
    )
}

export default Navbar
