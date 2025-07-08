import React, { useState, useEffect } from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import './SocialMedia.css'

const SocialMedia = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleSocialMedia = () => {
        setIsOpen(!isOpen);
    };

    if (!isMobile) {
        return (
            <div className="social-media-container desktop">
                <div className="social-label">
                    Let's Connect! <div className="hand-wave" role="img" aria-label="waving hand">👋</div>
                </div>
                <div className="social-icons">
                    <a
                        href="https://linkedin.com/in/hemanthh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin"
                        title="Connect on LinkedIn"
                    >
                        <SiLinkedin />
                    </a>

                    <a
                        href="mailto:hemanthvarma.emmadi@gmail.com"
                        className="social-icon email"
                        title="Send me an email"
                    >
                        <MdOutlineMail />
                    </a>

                    <a
                        href="https://github.com/hemanthhh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon github"
                        title="Check out my GitHub"
                    >
                        <SiGithub />
                    </a>
                </div>
            </div>
        );
    }

    // Mobile/Tablet version - toggleable with hand wave
    return (
        <div className="social-media-container mobile">
            {!isOpen ? (
                // Hand wave button
                <div className="hand-wave-button" onClick={toggleSocialMedia}>
                    <div className="hand-wave">👋</div>
                </div>
            ) : (
                // Social media stack
                <div className="social-stack">
                    <div className="social-icons">
                        <a
                            href="https://linkedin.com/in/hemanthh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon linkedin"
                            title="Connect on LinkedIn"
                        >
                            <SiLinkedin />
                        </a>

                        <a
                            href="mailto:hemanthvarma.emmadi@gmail.com"
                            className="social-icon email"
                            title="Send me an email"
                        >
                            <MdOutlineMail />
                        </a>

                        <a
                            href="https://github.com/hemanthhh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon github"
                            title="Check out my GitHub"
                        >
                            <SiGithub />
                        </a>
                    </div>
                    <button className="close-button" onClick={toggleSocialMedia}>
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}

export default SocialMedia 