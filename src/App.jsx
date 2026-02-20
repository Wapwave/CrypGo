import { useState, useEffect } from 'react'
import config from './data/config.json'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [data, setData] = useState(config)
    const [editMode, setEditMode] = useState(false)

    const handleUpdateAsset = (assetTitle, newFields) => {
        const updatedProjects = data.projects.map(p =>
            p.title === assetTitle ? { ...p, ...newFields } : p
        )
        setData({ ...data, projects: updatedProjects })
    }

    return (
        <div className="app-container">
            <Navbar onToggleEdit={() => setEditMode(!editMode)} editMode={editMode} />
            <main>
                <Hero data={data.hero} personalInfo={data.personalInfo} />
                <Projects
                    projects={data.projects}
                    editMode={editMode}
                    onUpdateAsset={handleUpdateAsset}
                />
                <Registration registrationData={data.registration} />
                <Contact contactInfo={data.contact} />
            </main>
            <Footer personalInfo={data.personalInfo} />
        </div>
    )
}

export default App
