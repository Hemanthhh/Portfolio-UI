import './VersionControl.css'
import { FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa"

function VersionControl() {
    const versionControlSystems = [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'GitLab', icon: FaGitlab },
        { name: 'Bitbucket', icon: FaGitAlt }
    ]

    return (
        <div className="version-control">
            <div className="vc-list">
                {versionControlSystems.map((vcs, index) => {
                    const IconComponent = vcs.icon;
                    return (
                        <div key={index} className="vc-item">
                            <span className="skill-icon"><IconComponent /></span>
                            <span className="vc-name">{vcs.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default VersionControl 