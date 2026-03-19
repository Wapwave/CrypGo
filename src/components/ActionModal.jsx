import React from 'react'

const ActionModal = ({ asset, onClose, wallet, onTrade }) => {
    const [mode, setMode] = React.useState('trade') // 'trade' or 'send'
    const [tradeAmount, setTradeAmount] = React.useState('')
    const [sendAddress, setSendAddress] = React.useState('')
    const [sendAmount, setSendAmount] = React.useState('')

    const assetSymbol = asset.title.split(' ')[1]?.replace('(', '').replace(')', '') || asset.title.split(' ')[0]

    const handleTradeSubmit = () => {
        const amount = parseFloat(tradeAmount)
        if (isNaN(amount) || amount <= 0) return
        if (onTrade(amount)) {
            onClose()
        }
    }

    const handleSendSubmit = () => {
        const amount = parseFloat(sendAmount)
        if (isNaN(amount) || amount <= 0) return
        if (!sendAddress.startsWith('0x') || sendAddress.length < 20) return
        if (amount > asset.balance) return

        alert(`EXECUTION_DISPATCH: SENT ${amount} ${assetSymbol} TO ${sendAddress}`)
        onClose()
    }

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 7, 10, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div className="module-card" style={{
                width: '100%',
                maxWidth: '460px',
                padding: '2.5rem',
                position: 'relative',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-primary)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        fontSize: '1.25rem',
                        cursor: 'pointer'
                    }}
                >
                    ✕
                </button>

                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--color-primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '0.5rem' }}>Asset Execution</div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>{asset.title}</h2>
                </div>

                <div style={{ display: 'flex', gap: '0', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
                    {['trade', 'send'].map(m => (
                        <button
                            key={m}
                            onClick={() => setMode(m)}
                            style={{
                                padding: '1rem 1.5rem',
                                background: mode === m ? 'var(--color-surface)' : 'none',
                                border: 'none',
                                borderBottom: mode === m ? '2px solid var(--color-primary)' : 'none',
                                color: mode === m ? 'var(--color-text)' : 'var(--color-text-muted)',
                                fontWeight: '800',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontSize: '0.7rem',
                                letterSpacing: '0.15em'
                            }}
                        >
                            {m === 'trade' ? 'Liquidity' : 'Provisioning'}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {mode === 'trade' ? (
                        <>
                            <div style={{ background: '#07090C', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '900', letterSpacing: '0.1em' }}>Source Pool</span>
                                    <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--color-text-dim)' }}>{wallet.usdt.toLocaleString()} USDT</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="mono"
                                        value={tradeAmount}
                                        onChange={(e) => setTradeAmount(e.target.value)}
                                        style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.75rem', width: '70%', outline: 'none', fontWeight: '800' }}
                                    />
                                    <span style={{ fontWeight: '900', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>USDT</span>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', height: '10px', color: 'var(--color-primary)' }}>▼</div>

                            <div style={{ background: '#07090C', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '900', letterSpacing: '0.1em' }}>Target Allocation</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        readOnly
                                        className="mono"
                                        value={tradeAmount ? (parseFloat(tradeAmount) / asset.price).toFixed(6) : ''}
                                        style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '1.75rem', width: '70%', outline: 'none', fontWeight: '800' }}
                                    />
                                    <span style={{ fontWeight: '900', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{assetSymbol}</span>
                                </div>
                            </div>

                            <button
                                className="btn-primary"
                                style={{ width: '100%', padding: '1.25rem', marginTop: '1rem' }}
                                onClick={handleTradeSubmit}
                            >
                                Execute Order
                            </button>
                        </>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ background: 'var(--color-surface)', padding: '1.5rem', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-primary)' }}>
                                <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Node Deposit Hash</label>
                                <div className="mono" style={{ fontSize: '0.8rem', wordBreak: 'break-all', color: 'var(--color-primary)', marginBottom: '1.2rem', padding: '0.75rem', background: '#07090C', border: '1px solid var(--color-border)' }}>
                                    0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                                </div>
                                <button className="btn-secondary" style={{ width: '100%', padding: '0.5rem', fontSize: '0.65rem' }}>Copy Address</button>
                            </div>

                            <div>
                                <div style={{ background: '#07090C', padding: '1rem', border: '1px solid var(--color-border)' }}>
                                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '800' }}>Destination Node</label>
                                    <input
                                        type="text"
                                        placeholder="0x..."
                                        className="mono"
                                        value={sendAddress}
                                        onChange={(e) => setSendAddress(e.target.value)}
                                        style={{ background: 'none', border: 'none', color: 'white', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ background: '#07090C', padding: '1rem', border: '1px solid var(--color-border)', marginTop: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '800' }}>Quantity</label>
                                        <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>MAX: {asset.balance.toFixed(4)}</span>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="mono"
                                        value={sendAmount}
                                        onChange={(e) => setSendAmount(e.target.value)}
                                        style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', width: '100%', outline: 'none' }}
                                    />
                                </div>
                                <button
                                    className="btn-primary"
                                    style={{ width: '100%', padding: '1.25rem', marginTop: '1.5rem' }}
                                    onClick={handleSendSubmit}
                                >
                                    Initiate Despatch
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="mono" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)', textAlign: 'center', letterSpacing: '0.1em' }}>
                        REAL-TIME SETTLEMENT VIA CRYPGO NETWORK v3.0.1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionModal
