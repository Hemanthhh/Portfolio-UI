import './Frameworks.css'

function Frameworks() {
    const frameworks = [
        { name: 'React', category: 'Frontend', icon: '⚛️', level: 'Advanced' },
        { name: 'Vue.js', category: 'Frontend', icon: '💚', level: 'Intermediate' },
        { name: 'Angular', category: 'Frontend', icon: '🅰️', level: 'Intermediate' },
        { name: 'Node.js', category: 'Backend', icon: '🟢', level: 'Advanced' },
        { name: 'Express.js', category: 'Backend', icon: '🚂', level: 'Advanced' },
        { name: 'Django', category: 'Backend', icon: '🐍', level: 'Intermediate' },
        { name: 'Flask', category: 'Backend', icon: '🍶', level: 'Intermediate' },
        { name: 'Spring Boot', category: 'Backend', icon: '🍃', level: 'Intermediate' },
        { name: 'Laravel', category: 'Backend', icon: '🔥', level: 'Intermediate' },
        { name: 'Next.js', category: 'Full Stack', icon: '⚡', level: 'Advanced' },
        { name: 'Nuxt.js', category: 'Full Stack', icon: '🟢', level: 'Intermediate' },
        { name: 'Gatsby', category: 'Static Site', icon: '🌐', level: 'Intermediate' }
    ]

    const categories = [...new Set(frameworks.map(fw => fw.category))]

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return '#28a745'
            case 'Intermediate': return '#ffc107'
            case 'Beginner': return '#dc3545'
            default: return '#6c757d'
        }
    }

    return (
        <div className="frameworks">
            <h1>Frameworks & Libraries</h1>
            <p className="description">
                Modern frameworks and libraries I use to build scalable and maintainable applications.
            </p>
            
            {categories.map(category => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="frameworks-grid">
                        {frameworks
                            .filter(fw => fw.category === category)
                            .map((framework, index) => (
                                <div key={index} className="framework-card">
                                    <div className="framework-icon">{framework.icon}</div>
                                    <h3>{framework.name}</h3>
                                    <div className="level-badge" style={{ backgroundColor: getLevelColor(framework.level) }}>
                                        {framework.level}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Frameworks 