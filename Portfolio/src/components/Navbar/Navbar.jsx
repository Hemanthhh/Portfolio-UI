import './Navbar.css'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import Resume from '../../assets/resume/resume.pdf'

function Navbar() {
    const [activeSection, setActiveSection] = useState('intro')

    const openPdfNewTab = () => {
        window.open(Resume);
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjust these values to control when a section is considered "active"
            threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        // Observe all sections
        const sections = ['intro', 'experience', 'skills']
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId)
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [])

    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link
                    to="intro"
                    smooth={true}
                    offset={-80}
                    className={`desktopMenuListItem ${activeSection === 'intro' ? 'active' : ''}`}
                >
                    About
                </Link>
                <Link
                    to="experience"
                    smooth={true}
                    offset={-80}
                    className={`desktopMenuListItem ${activeSection === 'experience' ? 'active' : ''}`}
                >
                    Experience
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    offset={-80}
                    className={`desktopMenuListItem ${activeSection === 'skills' ? 'active' : ''}`}
                >
                    Skills
                </Link>
            </div>
            <button className="desktopMenuBtn" onClick={openPdfNewTab}>
                Resume
            </button>
        </nav>
    );
}

export default Navbar;