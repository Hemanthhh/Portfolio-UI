import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Experience</Link>
                <Link className="desktopMenuListItem">Work</Link>
                <Link className="desktopMenuListItem">Contact</Link>
            </div>
            <button className="desktopMenuBtn">
                Resume
            </button>
        </nav>
    );
}

export default Navbar;