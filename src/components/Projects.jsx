import React, { useState } from 'react'
import ActionModal from './ActionModal'

const Projects = ({ projects, editMode, onUpdateAsset }) => {
    const [selectedAsset, setSelectedAsset] = useState(null)

    return (
        <section id="projects">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Asset <span className="text-gradient">Allocation</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Real-time insights across high-impact digital currencies. {editMode && <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>(MANAGEMENT ACTIVE)</span>}
                </p>
            </div>

            <div className="grid-gallery">
                {projects.map((project) => (
                    <div key={project.id} className="card glass" style={{
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Status Chip */}
                        <div style={{
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '99px',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            color: 'var(--color-secondary)',
                            background: 'rgba(16, 185, 129, 0.1)'
                        }}>
                            TRENDING
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '1rem',
                                fontSize: '1.5rem'
                            }}>
                                {project.title.substring(0, 1)}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{project.title}</h3>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{project.category}</span>
                            </div>
                        </div>

                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1.25rem 0', borderTop: '1px solid var(--color-border)' }}>
                            <div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Holdings</div>
                                <div style={{ fontWeight: '700', color: 'var(--color-text)' }}>{project.allocation}</div>
                            </div>
                            <div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Perf</div>
                                <div style={{ fontWeight: '700', color: 'var(--color-secondary)' }}>{project.performance}</div>
                            </div>
                        </div>

                        <button
                            className="btn-primary"
                            style={{ width: '100%', marginTop: '0.5rem' }}
                            onClick={() => setSelectedAsset(project.title)}
                        >
                            Transfer Utility
                        </button>
                    </div>
                ))}
            </div>

            {selectedAsset && (
                <ActionModal
                    asset={projects.find(p => p.title === selectedAsset)}
                    onClose={() => setSelectedAsset(null)}
                    editMode={editMode}
                    onUpdate={(newFields) => onUpdateAsset(selectedAsset, newFields)}
                />
            )}
        </section>
    )
}

export default Projects
