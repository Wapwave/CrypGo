import React, { useState } from 'react'

const Contact = ({ contactInfo }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('INQUIRY_TRANSMITTED: Network administrator will contact you via secure channel.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '8rem 0'
        }}>
            <div style={{ textAlign: 'left', marginBottom: '5rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '2rem' }}>
                <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1rem' }}>Support Node</div>
                <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                    Institutional <span className="text-gradient">Communication</span>
                </h2>
                <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', fontWeight: '500' }}>
                    Direct inquiry channel for sophisticated digital asset investors and institutional partners.
                    All communications are strictly confidential.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="module-card" style={{
                display: 'grid',
                gap: '2.5rem',
                padding: '4rem',
                background: 'var(--color-surface)'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.65rem', color: 'var(--color-text-dim)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Entity Identity</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name / Institution"
                            required
                            style={{
                                width: '100%',
                                padding: '1.25rem',
                                background: '#07090C'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.65rem', color: 'var(--color-text-dim)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Communication Node</label>
                        <input
                            type="email"
                            name="email"
                            className="mono"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@node.io"
                            required
                            style={{
                                width: '100%',
                                padding: '1.25rem',
                                background: '#07090C'
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.65rem', color: 'var(--color-text-dim)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Technical / Strategic Inquiry</label>
                    <textarea
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="State your requirements..."
                        required
                        style={{
                            width: '100%',
                            padding: '1.25rem',
                            background: '#07090C',
                            resize: 'none'
                        }}
                    ></textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="submit" className="btn-primary" style={{
                        padding: '1.25rem 4rem',
                        fontSize: '0.9rem'
                    }}>
                        Despatch Message
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact
