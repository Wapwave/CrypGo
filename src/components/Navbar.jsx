import { useState, useEffect } from 'react'

const Navbar = ({ onToggleEdit, editMode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`glass`} style={{
            padding: '1.25rem 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            transition: 'all 0.3s',
            marginTop: '1rem',
            borderRadius: '20px',
            width: '90%',
            maxWidth: 'var(--max-width)',
            margin: '1rem auto'
        }}>
            <div style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-1px' }}>
                <span style={{ color: 'var(--color-primary)' }}>CRYP</span>
                <span style={{ color: 'var(--color-text)' }}>GO</span>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'flex', gap: '3rem' }}>
                <a href="#hero" style={{ fontWeight: '500', color: 'var(--color-text)' }}>Home</a>
                <a href="#projects" style={{ fontWeight: '500', color: 'var(--color-text-muted)' }}>Portfolio</a>
                <a href="#contact" style={{ fontWeight: '500', color: 'var(--color-text-muted)' }}>Contact</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                    onClick={onToggleEdit}
                    className={editMode ? "btn-primary" : "btn-secondary"}
                    style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        background: editMode ? 'var(--color-accent)' : 'transparent',
                        borderColor: editMode ? 'var(--color-accent)' : 'var(--color-border)'
                    }}
                >
                    {editMode ? 'Exit Admin' : 'Admin Mode'}
                </button>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Login</button>
                <a href="#registration" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', textDecoration: 'none' }}>Get Started</a>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>
                    ☰
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="mobile-menu glass" style={{ borderRadius: '20px', marginTop: '1rem' }}>
                    <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Portfolio</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
