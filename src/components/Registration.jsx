import React, { useState } from 'react'

const Registration = ({ registrationData }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Welcome to CRYPGO, ${formData.fullName}! Your institutional account is being provisioned.`)
        setFormData({ fullName: '', email: '', username: '', password: '' })
    }

    return (
        <section id="registration" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '6rem 0'
        }}>
            <div className="glass" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '1px solid var(--color-glass-border)'
            }}>
                {/* Left Side: Marketing */}
                <div style={{
                    padding: '4rem',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(244, 63, 94, 0.05) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left'
                }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        {registrationData.title}
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        {registrationData.subtitle}
                    </p>
                    <ul style={{ listStyle: 'none', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li>✓ Real-time Asset Tracking</li>
                        <li>✓ Institutional Security</li>
                        <li>✓ Advanced Yield Management</li>
                        <li>✓ 24/7 Priority Support</li>
                    </ul>
                </div>

                {/* Right Side: Form */}
                <div style={{ padding: '4rem' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Carter"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--color-glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@carter.com"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--color-glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    placeholder="jcarter"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid var(--color-glass-border)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid var(--color-glass-border)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn-primary" style={{ marginTop: '1.5rem', padding: '1.25rem' }}>
                            {registrationData.ctaText}
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                            By joining, you agree to the Crypgo Terms of Service.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Registration
