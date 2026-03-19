import React, { useState } from 'react';

const AdminTerminal = ({ users, onUserUpdate, nodeStatus }) => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [editAmount, setEditAmount] = useState('');

    const selectedUser = users.find(u => u.id === selectedUserId);

    const handleUpdateBalance = () => {
        if (!selectedUser || isNaN(parseFloat(editAmount))) return;
        onUserUpdate(selectedUserId, {
            wallet: { usdt: parseFloat(editAmount) }
        });
        setEditAmount('');
    };

    return (
        <section id="admin" className="animate-fade-in" style={{ padding: '4rem 0' }}>
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                        System <span style={{ color: 'var(--color-primary)' }}>Oversight</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.5rem' }}>Control Plane v3.0 // Authorized Access Only</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: '800' }}>SYS_THROUGHPUT</div>
                        <div className="mono" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: '800' }}>{nodeStatus?.throughput?.toLocaleString()} TPS</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: '800' }}>COORD_NODES</div>
                        <div className="mono" style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '800' }}>{nodeStatus?.nodes} CLUSTER</div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: '2rem' }}>
                {/* User Ledger */}
                <div className="module-card" style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '1rem 1.5rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                        Provisioned Entities
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--color-border)' }}>
                                    <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>EMAIL_HASH</th>
                                    <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>IDENTITY</th>
                                    <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>LIQUIDITY</th>
                                    <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.65rem', color: 'var(--color-text-muted)', textAlign: 'right' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.filter(u => u.role !== 'admin').map(user => (
                                    <tr key={user.id} style={{ borderBottom: '1px solid var(--color-border)', background: selectedUserId === user.id ? 'rgba(0, 240, 160, 0.05)' : 'transparent' }}>
                                        <td className="mono" style={{ padding: '1rem 1.5rem', fontSize: '0.8rem' }}>{user.email}</td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', fontWeight: '700' }}>{user.fullName}</td>
                                        <td className="mono" style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-primary)' }}>${(user.wallet?.usdt || 0).toLocaleString()}</td>
                                        <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                                            <button
                                                onClick={() => setSelectedUserId(user.id)}
                                                style={{ background: 'none', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', padding: '0.4rem 1rem', fontSize: '0.65rem', fontWeight: '800', cursor: 'pointer', textTransform: 'uppercase' }}
                                            >
                                                Select
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Command Pane */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="module-card" style={{ padding: '2rem' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--color-primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Liquidity Override</div>

                        {selectedUser ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Selected Entity</label>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '800' }}>{selectedUser.fullName}</div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Adjust USDT Balance</label>
                                    <input
                                        type="number"
                                        className="mono"
                                        value={editAmount}
                                        onChange={(e) => setEditAmount(e.target.value)}
                                        placeholder={selectedUser.wallet.usdt.toString()}
                                        style={{ width: '100%', background: '#07090C', border: '1px solid var(--color-border)', color: 'white', padding: '1rem', outline: 'none', fontSize: '1.25rem', fontWeight: '800' }}
                                    />
                                    <button
                                        onClick={handleUpdateBalance}
                                        className="btn-primary"
                                        style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
                                    >
                                        Commit Changes
                                    </button>
                                </div>

                                <div style={{ marginTop: '0.5rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem' }}>Active Allocations</label>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                                        {selectedUser.portfolio.map(p => (
                                            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                                                <span className="mono" style={{ fontSize: '0.75rem', fontWeight: '700' }}>{p.title.split(' ')[1]?.replace('(', '').replace(')', '') || p.title}</span>
                                                <span className="mono" style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--color-primary)' }}>{p.balance.toFixed(4)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textAlign: 'center', padding: '3rem 0', fontStyle: 'italic' }}>
                                No entity selected for override.
                            </div>
                        )}
                    </div>

                    <div className="module-card" style={{ padding: '1.5rem', background: 'rgba(255, 77, 77, 0.05)', border: '1px solid rgba(255, 77, 77, 0.2)' }}>
                        <div style={{ color: '#FF4D4D', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>System Integrity Status</div>
                        <div className="mono" style={{ fontSize: '0.7rem', color: 'white', fontWeight: '800' }}>ALL_NODES_NOMINAL :: v3.0.4</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminTerminal;
