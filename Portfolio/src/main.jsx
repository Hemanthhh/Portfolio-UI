import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'

const App = () => {
    return (
        <React.StrictMode>
            <Navbar/>
            <Intro/>
            <Experience/>
            <Skills/>
        </React.StrictMode>
    )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
