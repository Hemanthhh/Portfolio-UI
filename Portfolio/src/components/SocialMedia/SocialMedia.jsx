import React from 'react'
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <div className="social-label">Let's Connect! 👋</div>
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
    )
}

export default SocialMedia 