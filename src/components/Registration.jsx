import React, { useState } from 'react'

const Registration = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert("Credentials mismatch")
            return
        }
        onRegister(formData)
    }

    return (
        <section id="registration" style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
            <div className="module-card" style={{ maxWidth: '520px', margin: '0 auto', padding: '4rem', borderTop: '4px solid var(--color-primary)' }}>
                <div style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>Provisioning</div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Institutional Onboarding</h2>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', fontWeight: '500' }}>Initialize your secure footprint on the CRYPGO network.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div className="input-group">
                        <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '1px' }}>Legal Entity Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Full Name"
                            style={{ width: '100%', padding: '1rem', background: '#07090C' }}
                        />
                    </div>
                    <div className="input-group">
                        <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '1px' }}>Authorized Node Email</label>
                        <input
                            type="email"
                            name="email"
                            className="mono"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@institution.com"
                            style={{ width: '100%', padding: '1rem', background: '#07090C' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="input-group">
                            <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '1px' }}>Access Key</label>
                            <input
                                type="password"
                                name="password"
                                className="mono"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                style={{ width: '100%', padding: '1rem', background: '#07090C' }}
                            />
                        </div>
                        <div className="input-group">
                            <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '1px' }}>Verify Key</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="mono"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                style={{ width: '100%', padding: '1rem', background: '#07090C' }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ padding: '1.25rem', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                        Initiate Provisioning
                    </button>
                </form>

                <p style={{ textAlign: 'left', marginTop: '3rem', fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: '600', lineHeight: '1.6' }}>
                    By requesting provisioning, you certify compliance with <br />
                    <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Institutional Terms of Network Access</a>.
                </p>
            </div>
        </section>
    )
}

export default Registration
