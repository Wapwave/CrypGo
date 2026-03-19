import { useState, useEffect } from 'react'
import config from './data/config.json'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import AdminTerminal from './components/AdminTerminal'

function App() {
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem('crypgo_users')
        return saved ? JSON.parse(saved) : []
    })

    const [currentUser, setCurrentUser] = useState(() => {
        const saved = localStorage.getItem('crypgo_session')
        return saved ? JSON.parse(saved) : null
    })

    const [view, setView] = useState('landing')
    const [subView, setSubView] = useState('portfolio') // 'markets', 'portfolio', 'analytics'

    // --- Functional Network Node Simulation ---
    const [nodeStatus, setNodeStatus] = useState({
        throughput: 1200450,
        latency: 8.4,
        uptime: 99.999,
        status: 'ACTIVE',
        nodes: 124
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setNodeStatus(prev => ({
                ...prev,
                throughput: Math.floor(1200000 + (Math.random() - 0.5) * 50000),
                latency: parseFloat((8 + Math.random() * 2).toFixed(1)),
                nodes: Math.floor(120 + Math.random() * 10)
            }))
        }, 2500)
        return () => clearInterval(interval)
    }, [])
    // ------------------------------------------

    useEffect(() => {
        localStorage.setItem('crypgo_users', JSON.stringify(users))
        localStorage.setItem('crypgo_session', JSON.stringify(currentUser))
    }, [users, currentUser])

    const [marketPrices, setMarketPrices] = useState(() => {
        const initial = {}
        config.projects.forEach(p => initial[p.id] = p.price)
        return initial
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setMarketPrices(prev => {
                const updated = { ...prev }
                Object.keys(updated).forEach(id => {
                    updated[id] = updated[id] + (Math.random() - 0.5) * (updated[id] * 0.005)
                })
                return updated
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const handleRegister = (formData) => {
        if (users.find(u => u.email === formData.email)) {
            alert("User already exists")
            return
        }
        const newUser = {
            id: Date.now(),
            ...formData,
            wallet: { usdt: 10000.00 },
            portfolio: config.projects.map(p => ({ id: p.id, balance: 0, title: p.title })),
            role: 'user'
        }
        setUsers(prev => [...prev, newUser])
        setCurrentUser(newUser)
        setView('dashboard')
    }

    const handleLogin = (email, password) => {
        if (email === 'admin@crypgo.io' && password === 'admin123') {
            setCurrentUser({ name: 'System Administrator', role: 'admin' })
            setView('admin')
            return
        }

        const user = users.find(u => u.email === email && u.password === password)
        if (user) {
            setCurrentUser(user)
            setView('dashboard')
        } else {
            alert("Invalid credentials")
        }
    }

    const handleLogout = () => {
        setCurrentUser(null)
        setView('landing')
    }

    const handleTrade = (assetId, amountUsdt) => {
        if (!currentUser || currentUser.role === 'admin') return

        if (currentUser.wallet.usdt < amountUsdt) {
            alert("Insufficient USDT")
            return false
        }

        const currentPrice = marketPrices[assetId]
        const amountAsset = amountUsdt / currentPrice

        const updatedUser = {
            ...currentUser,
            wallet: { ...currentUser.wallet, usdt: currentUser.wallet.usdt - amountUsdt },
            portfolio: currentUser.portfolio.map(p =>
                p.id === assetId ? { ...p, balance: p.balance + amountAsset } : p
            )
        }

        setCurrentUser(updatedUser)
        setUsers(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u))

        // Spike throughput on trade to show "load"
        setNodeStatus(prev => ({ ...prev, throughput: prev.throughput + 50000 }))

        return true
    }

    const handleAdminUserUpdate = (userId, updates) => {
        setUsers(prev => prev.map(u => {
            if (u.id === userId) {
                const updated = { ...u, ...updates }
                if (currentUser && currentUser.id === userId) setCurrentUser(updated)
                return updated
            }
            return u
        }))
    }

    const activePortfolio = currentUser?.role === 'user' ? currentUser.portfolio.map(p => ({
        ...config.projects.find(base => base.id === p.id),
        balance: p.balance,
        price: marketPrices[p.id]
    })) : []

    if (!currentUser && view !== 'landing') {
        return <Login onLogin={handleLogin} onGoToRegister={() => setView('landing')} />
    }

    return (
        <div className="app-container">
            <Navbar
                currentUser={currentUser}
                onLogout={handleLogout}
                onLoginClick={() => setView('login')}
                nodeStatus={nodeStatus}
                onNavClick={(target) => {
                    if (!currentUser) {
                        setView('login')
                    } else if (target === 'admin' && currentUser.role === 'admin') {
                        setView('admin')
                    } else {
                        setView('dashboard')
                        setSubView(target)
                    }
                }}
                activeView={view === 'dashboard' ? subView : view}
            />

            <main>
                {view === 'landing' && !currentUser && (
                    <>
                        <Hero
                            data={config.hero}
                            personalInfo={config.personalInfo}
                            onStart={() => setView('login')}
                            nodeStatus={nodeStatus}
                        />
                        <Registration onRegister={handleRegister} />
                    </>
                )}

                {view === 'dashboard' && currentUser && (
                    <div className="animate-fade-up">
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
                            {['portfolio', 'markets', 'analytics'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setSubView(tab)}
                                    style={{
                                        padding: '1rem 0',
                                        background: 'none',
                                        border: 'none',
                                        color: subView === tab ? 'var(--color-primary)' : 'var(--color-text-dim)',
                                        fontWeight: '800',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.15em',
                                        borderBottom: subView === tab ? '2px solid var(--color-primary)' : 'none'
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {subView === 'portfolio' && (
                            <Projects
                                projects={activePortfolio}
                                wallet={currentUser.wallet}
                                onTrade={handleTrade}
                            />
                        )}

                        {subView === 'markets' && (
                            <div className="animate-fade-up">
                                <div style={{ marginBottom: '2rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase' }}>Global Marketplace</h2>
                                    <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>AGGREGATING_LIQUIDITY_ACROSS_ALL_AUTHORIZED_NODES...</p>
                                </div>
                                <Projects
                                    projects={config.projects.map(p => ({
                                        ...p,
                                        price: marketPrices[p.id],
                                        balance: 0 // In market view, show available for trade, not own balance
                                    }))}
                                    wallet={currentUser.wallet}
                                    onTrade={handleTrade}
                                />
                            </div>
                        )}

                        {subView === 'analytics' && (
                            <div className="module-card animate-fade-up" style={{ padding: '6rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)', animation: 'pulse 2s infinite' }}>📊</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Real-Time Performance Node</h3>
                                <p className="mono" style={{ color: 'var(--color-text-dim)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
                                    Initializing high-conviction alpha matrices for your current asset allocation.
                                    <br />[COMPUTING_EXPOSURE_RISK...]
                                </p>
                                <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                                    <div style={{ padding: '1.5rem', background: '#07090C', border: '1px solid var(--color-border)', width: '200px' }}>
                                        <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '0.5rem' }}>Correlation</div>
                                        <div className="mono" style={{ color: 'var(--color-primary)', fontWeight: '800' }}>0.842 λ</div>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: '#07090C', border: '1px solid var(--color-border)', width: '200px' }}>
                                        <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '0.5rem' }}>Volatility</div>
                                        <div className="mono" style={{ color: 'var(--color-error)', fontWeight: '800' }}>HIGH σ</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {view === 'admin' && currentUser?.role === 'admin' && (
                    <AdminTerminal
                        users={users}
                        onUserUpdate={handleAdminUserUpdate}
                        nodeStatus={nodeStatus}
                    />
                )}

                <Contact contactInfo={config.contact} />
            </main>
            <Footer
                personalInfo={config.personalInfo}
                onNavClick={(target) => {
                    if (!currentUser) {
                        setView('login')
                    } else if (target === 'admin' && currentUser.role === 'admin') {
                        setView('admin')
                    } else {
                        setView('dashboard')
                        setSubView(target)
                    }
                }}
            />
        </div>
    )
}

export default App
