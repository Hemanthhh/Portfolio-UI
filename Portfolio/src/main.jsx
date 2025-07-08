import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import SocialMedia from './components/SocialMedia/SocialMedia'

const App = () => {
    return (
        <React.StrictMode>
            <Navbar />
            <Intro />
            <Experience />
            <Skills />
            <SocialMedia />
        </React.StrictMode>
    )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />)
