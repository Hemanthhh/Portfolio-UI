import './VersionControl.css'

function VersionControl() {
    const versionControlSystems = [
        { name: 'Git', icon: '📚', level: 'Advanced', features: ['Branching', 'Merging', 'Rebasing'] },
        { name: 'GitHub', icon: '🐙', level: 'Advanced', features: ['Pull Requests', 'Issues', 'Actions'] },
        { name: 'GitLab', icon: '🦊', level: 'Intermediate', features: ['CI/CD', 'Code Review', 'Wiki'] },
        { name: 'Bitbucket', icon: '🔵', level: 'Intermediate', features: ['Pipelines', 'Jira Integration'] }
         
    ]

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return '#28a745'
            case 'Intermediate': return '#ffc107'
            case 'Beginner': return '#dc3545'
            default: return '#6c757d'
        }
    }

    return (
        <div className="version-control">
            <h1>Version Control Systems</h1>
            <p className="description">
                Experience with modern version control systems and collaboration platforms for team development.
            </p>
            
            <div className="vc-grid">
                {versionControlSystems.map((vcs, index) => (
                    <div key={index} className="vc-card">
                        <div className="vc-icon">{vcs.icon}</div>
                        <h3>{vcs.name}</h3>
                        <div className="level-badge" style={{ backgroundColor: getLevelColor(vcs.level) }}>
                            {vcs.level}
                        </div>
                        <div className="features-list">
                            {vcs.features.map((feature, idx) => (
                                <span key={idx} className="feature-tag">{feature}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VersionControl 