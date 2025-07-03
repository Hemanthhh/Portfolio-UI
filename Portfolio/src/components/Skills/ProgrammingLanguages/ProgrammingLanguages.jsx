import './ProgrammingLanguages.css'

function ProgrammingLanguages() {
    const languages = [
        { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
        { name: 'Python', level: 'Intermediate', icon: '🐍' },
        { name: 'Java', level: 'Intermediate', icon: '☕' },
        { name: 'Go', level: 'Beginner', icon: '🐹' },
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
        <div className="programming-languages">
            <h1>Programming Languages</h1>
            <p className="description">
                A comprehensive overview of my programming language skills and proficiency levels.
            </p>
            
            <div className="languages-grid">
                {languages.map((language, index) => (
                    <div key={index} className="language-card">
                        <div className="language-icon">{language.icon}</div>
                        <h3>{language.name}</h3>
                        <div className="level-badge" style={{ backgroundColor: getLevelColor(language.level) }}>
                            {language.level}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgrammingLanguages
