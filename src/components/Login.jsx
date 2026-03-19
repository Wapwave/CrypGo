import React, { useState } from 'react'

const Login = ({ onLogin, onGoToRegister }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin(email, password)
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg)',
            padding: '2rem'
        }}>
            <div className="module-card" style={{
                width: '100%',
                maxWidth: '440px',
                padding: '3.5rem',
                borderTop: '4px solid var(--color-primary)',
                background: 'var(--color-surface)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.05em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', background: 'var(--color-primary)' }}></div>
                        CRYPGO
                    </div>
                    <h2 style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Access Protocol</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.75rem' }}>System Node v3.0.1</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="input-group">
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>Authorized Identifier</label>
                        <input
                            type="email"
                            className="mono"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="user@institution.com"
                            style={{ width: '100%', padding: '1.1rem', background: '#07090C' }}
                        />
                    </div>
                    <div className="input-group">
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>Security Credentials</label>
                        <input
                            type="password"
                            className="mono"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            style={{ width: '100%', padding: '1.1rem', background: '#07090C' }}
                        />
                    </div>

                    <button type="submit" className="btn-primary" style={{ padding: '1.25rem', marginTop: '1rem', fontSize: '0.9rem' }}>
                        Establish Connection
                    </button>
                </form>

                <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: '600' }}>New Entity?</span>
                    <button
                        onClick={onGoToRegister}
                        style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: '800', cursor: 'pointer', marginLeft: '0.75rem', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}
                    >
                        Provision Account
                    </button>
                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.2)', fontWeight: '700', letterSpacing: '2px' }}>
                    SYSTEM_MONITORING: ENABLED
                </div>
            </div>
        </div>
    )
}

export default Login
