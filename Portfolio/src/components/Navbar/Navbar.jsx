import './Navbar.css'
import { Link } from 'react-scroll'
import Resume from '../../assets/resume/resume.pdf'

function Navbar() {

    const openPdfNewTab = () => {
        window.open(Resume);
    }

    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link to="intro" smooth={true} offset={-80} className="desktopMenuListItem">About</Link>
                <Link to="experience" smooth={true} offset={-80} className="desktopMenuListItem">Experience</Link>
                <Link to="skills" smooth={true} offset={-80} className="desktopMenuListItem">Skills</Link>
                <Link to="contact" smooth={true} offset={-80} className="desktopMenuListItem">Contact</Link>
            </div>
            <button className="desktopMenuBtn" onClick={openPdfNewTab}>
                Resume
            </button>
        </nav>
    );
}

export default Navbar;