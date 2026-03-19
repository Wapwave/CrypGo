import React, { useState } from 'react'
import ActionModal from './ActionModal'

const Projects = ({ projects = [], wallet = { usdt: 0 }, onTrade }) => {
    const [selectedAsset, setSelectedAsset] = useState(null)

    const totalValue = (projects || []).reduce((acc, p) => acc + ((p.balance || 0) * (p.price || 0)), 0) + (wallet?.usdt || 0)

    return (
        <section id="portfolio" style={{ padding: '4rem 0' }}>
            {/* Modular Summary Bar */}
            <div style={{
                display: 'flex',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                marginBottom: '2rem',
                borderLeft: '4px solid var(--color-primary)'
            }}>
                <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid var(--color-border)', flex: 1 }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Portfolio Valuation</div>
                    <div className="mono" style={{ fontSize: '2rem', fontWeight: '800' }}>
                        ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                </div>
                <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid var(--color-border)', flex: 1 }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>USDT Liquidity</div>
                    <div className="mono" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                        ${(wallet?.usdt || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                </div>
                <div style={{ padding: '1.5rem 2rem', flex: 1 }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>Asset Weighting</div>
                    <div className="mono" style={{ fontSize: '2rem', fontWeight: '800' }}>
                        {((totalValue - (wallet?.usdt || 0)) / totalValue * 100 || 0).toFixed(2)}%
                    </div>
                </div>
            </div>

            {/* High-Density Terminal Grid */}
            <div className="grid-gallery">
                {projects.map((project) => (
                    <div key={project.id} className="module-card" style={{
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '220px'
                    }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)' }}></div>
                                    <span className="mono" style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--color-text)' }}>
                                        {project.title.split(' ')[1]?.replace('(', '').replace(')', '') || project.title.split(' ')[0]}
                                    </span>
                                </div>
                                <div className="mono" style={{ textAlign: 'right', fontSize: '0.85rem', fontWeight: '800' }}>
                                    ${project.price?.toLocaleString('en-US', { maximumFractionDigits: 4 })}
                                    <div style={{ fontSize: '0.6rem', color: project.performance?.startsWith('+') ? 'var(--color-success)' : 'var(--color-error)' }}>
                                        {project.performance}
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '1rem', background: '#07090C', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '0.5rem' }}>Allocation</div>
                                <div className="mono" style={{ fontSize: '1.5rem', fontWeight: '800' }}>
                                    {project.balance?.toFixed(4)}
                                </div>
                                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', marginTop: '0.2rem' }}>
                                    ${(project.balance * project.price).toLocaleString('en-US', { maximumFractionDigits: 2 })} USDT
                                </div>
                            </div>
                        </div>

                        <button
                            className="btn-secondary"
                            style={{ width: '100%', padding: '0.65rem', fontSize: '0.7rem', border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}
                            onClick={() => setSelectedAsset(project.title)}
                        >
                            Execute Trade
                        </button>
                    </div>
                ))}
            </div>

            {selectedAsset && (
                <ActionModal
                    asset={projects.find(p => p.title === selectedAsset)}
                    onClose={() => setSelectedAsset(null)}
                    wallet={wallet}
                    onTrade={(amount) => onTrade(projects.find(p => p.title === selectedAsset).id, amount)}
                />
            )}
        </section>
    )
}

export default Projects
