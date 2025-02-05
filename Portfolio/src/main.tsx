import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Work from './components/Work/Work'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Navbar/>
        <Intro/>
        <Work/>
    </React.StrictMode>,
)
