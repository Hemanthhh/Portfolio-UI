import './Navbar.css'
import {Link} from 'react-scroll'
import Resume from '../../assets/resume/resume.pdf'

function Navbar() {

    const openPdfNewTab = () => {
        window.open(Resume);
    }

    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Experience</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Contact</Link>
            </div>
            <button className="desktopMenuBtn" onClick={openPdfNewTab}>
                Resume
            </button>
        </nav>
    );
}

export default Navbar;