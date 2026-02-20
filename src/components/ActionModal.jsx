import React from 'react'

const ActionModal = ({ asset, onClose, editMode, onUpdate }) => {
    const [perf, setPerf] = React.useState(asset.performance)
    const [alloc, setAlloc] = React.useState(asset.allocation)

    const handleSave = () => {
        onUpdate({ performance: perf, allocation: alloc })
        onClose()
    }

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div className="glass" style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '24px',
                padding: '2rem',
                position: 'relative',
                animation: 'fadeInUp 0.3s ease-out'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    ✕
                </button>

                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                    {editMode ? `Manage ${asset.title}` : `Trade ${asset.title}`}
                </h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                    {editMode ? 'Manually adjust investment figures and yields.' : 'Experience the Crypgo utility engine.'}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {editMode ? (
                        <>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Yield Profile (%)</label>
                                <input
                                    type="text"
                                    value={perf}
                                    onChange={(e) => setPerf(e.target.value)}
                                    style={{ background: 'none', border: 'none', color: 'var(--color-secondary)', fontSize: '1.5rem', width: '100%', outline: 'none', fontWeight: '800' }}
                                />
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Allocation Weight</label>
                                <input
                                    type="text"
                                    value={alloc}
                                    onChange={(e) => setAlloc(e.target.value)}
                                    style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', width: '100%', outline: 'none', fontWeight: '800' }}
                                />
                            </div>

                            <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem', background: 'var(--color-secondary)' }} onClick={handleSave}>
                                Save & Apply Changes
                            </button>
                        </>
                    ) : (
                        <>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Pay with</span>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>Balance: 4,320 USDT</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <input type="number" placeholder="0.00" style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', width: '60%', outline: 'none' }} />
                                    <span style={{ fontWeight: '700' }}>USDT</span>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', height: '20px' }}>↓</div>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <input type="number" placeholder="0.00" readOnly style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', width: '60%', outline: 'none' }} />
                                    <span style={{ fontWeight: '700' }}>{asset.title.split(' ')[0]}</span>
                                </div>
                            </div>

                            <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem' }} onClick={() => { alert('Simulation: Order Executed!'); onClose(); }}>
                                Execute Transaction
                            </button>
                        </>
                    )}

                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                        {editMode ? "All parameters will be updated globally." : "Fast execution powered by Crypgo liquidity pool"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionModal
