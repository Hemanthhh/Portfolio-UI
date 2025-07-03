import './OperatingSystems.css'

function OperatingSystems() {
    const operatingSystems = [
        { name: 'Windows', icon: '🪟', level: 'Advanced', experience: '10+ years' },
        { name: 'Linux', icon: '🐧', level: 'Advanced', experience: '8+ years' },
        { name: 'macOS', icon: '🍎', level: 'Intermediate', experience: '5+ years' },
        { name: 'Ubuntu', icon: '🟠', level: 'Advanced', experience: '6+ years' },
        { name: 'CentOS', icon: '🔴', level: 'Intermediate', experience: '4+ years' },
        { name: 'Debian', icon: '🔵', level: 'Intermediate', experience: '3+ years' }
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
        <div className="operating-systems">
            <h1>Operating Systems</h1>
            <p className="description">
                Experience with various operating systems for development, deployment, and system administration.
            </p>
            
            <div className="os-grid">
                {operatingSystems.map((os, index) => (
                    <div key={index} className="os-card">
                        <div className="os-icon">{os.icon}</div>
                        <h3>{os.name}</h3>
                        <div className="os-details">
                            <div className="level-badge" style={{ backgroundColor: getLevelColor(os.level) }}>
                                {os.level}
                            </div>
                            <div className="experience-badge">
                                {os.experience}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OperatingSystems 