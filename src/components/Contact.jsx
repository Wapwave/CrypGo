import React, { useState } from 'react'

const Contact = ({ contactInfo }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Crypgo Engine: Message received! We will connect soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Connect with <span className="text-gradient">CRYPGO</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    {contactInfo.subtitle} Our institutional-grade support is here for you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="glass" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                padding: '3rem',
                borderRadius: '32px',
                textAlign: 'left'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. John Doe"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1.25rem',
                                borderRadius: '12px',
                                border: '1px solid var(--color-glass-border)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--color-text)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1.25rem',
                                borderRadius: '12px',
                                border: '1px solid var(--color-glass-border)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--color-text)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Inquiry</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we assist your digital asset journey?"
                        required
                        style={{
                            width: '100%',
                            padding: '1rem 1.25rem',
                            borderRadius: '12px',
                            border: '1px solid var(--color-glass-border)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'var(--color-text)',
                            fontSize: '1rem',
                            fontFamily: 'inherit',
                            outline: 'none',
                            resize: 'none',
                            transition: 'border-color 0.3s'
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{
                    padding: '1.25rem',
                    fontSize: '1.1rem',
                    borderRadius: '16px'
                }}>
                    Initiate Contact
                </button>
            </form>
        </section>
    )
}

export default Contact
