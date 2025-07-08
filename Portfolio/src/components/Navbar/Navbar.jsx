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
        // Get viewport height to adjust rootMargin dynamically
        const getRootMargin = () => {
            const viewportHeight = window.innerHeight
            const navbarHeight = 80 // Approximate navbar height in pixels

            // For smaller screens, use more conservative margins
            if (viewportHeight <= 768) {
                return `-${navbarHeight + 20}px 0px -${viewportHeight * 0.3}px 0px`
            } else {
                return `-${navbarHeight + 40}px 0px -${viewportHeight * 0.4}px 0px`
            }
        }

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, {
            root: null,
            rootMargin: getRootMargin(),
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] // Multiple thresholds for better detection
        })

        // Observe all sections
        const sections = ['intro', 'experience', 'skills']
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId)
            if (element) {
                observer.observe(element)
            }
        })

        // Handle resize events to update intersection observer
        let resizeTimeout
        const handleResize = () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                // Disconnect current observer
                observer.disconnect()

                // Create new observer with updated rootMargin
                const newObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id)
                        }
                    })
                }, {
                    root: null,
                    rootMargin: getRootMargin(),
                    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] // Multiple thresholds for better detection
                })

                // Re-observe all sections
                sections.forEach(sectionId => {
                    const element = document.getElementById(sectionId)
                    if (element) {
                        newObserver.observe(element)
                    }
                })

                // Update the observer reference
                observer = newObserver
            }, 150) // Small delay to prevent too many recreations
        }

        // Fallback scroll handler for better mobile detection
        let scrollTimeout
        const handleScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                const skillsElement = document.getElementById('skills')
                const experienceElement = document.getElementById('experience')

                if (skillsElement && experienceElement) {
                    const skillsRect = skillsElement.getBoundingClientRect()
                    const experienceRect = experienceElement.getBoundingClientRect()
                    const viewportHeight = window.innerHeight

                    // Check if we're at the bottom of the page or skills section is prominently visible
                    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
                    const isSkillsVisible = skillsRect.top <= viewportHeight * 0.4 && skillsRect.bottom >= viewportHeight * 0.2

                    if (isAtBottom || isSkillsVisible) {
                        setActiveSection('skills')
                    } else if (experienceRect.top <= viewportHeight * 0.3 && experienceRect.bottom >= viewportHeight * 0.3) {
                        setActiveSection('experience')
                    }
                }
            }, 50) // Small delay for performance
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        return () => {
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId)
                if (element) {
                    observer.unobserve(element)
                }
            })
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(resizeTimeout)
            clearTimeout(scrollTimeout)
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