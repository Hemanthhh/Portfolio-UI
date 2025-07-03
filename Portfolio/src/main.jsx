import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Experience from './components/Experience/Experience'


const App = () => {
    return (
        <React.StrictMode>
            <Navbar/>
            <Intro/>
            <Experience/>
        </React.StrictMode>
    )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>)
