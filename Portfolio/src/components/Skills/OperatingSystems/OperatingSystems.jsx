import './OperatingSystems.css'
import { FaWindows, FaLinux, FaApple } from "react-icons/fa"

function OperatingSystems() {
    const operatingSystems = [
        { name: 'macOS', icon: FaApple },
        { name: 'Windows', icon: FaWindows },
        { name: 'Linux', icon: FaLinux },
    ]

    return (
        <div className="operating-systems">
            <div className="os-list">
                {operatingSystems.map((os, index) => {
                    const IconComponent = os.icon;
                    return (
                        <div key={index} className="os-item">
                            <span className="skill-icon"><IconComponent /></span>
                            <span className="os-name">{os.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default OperatingSystems 