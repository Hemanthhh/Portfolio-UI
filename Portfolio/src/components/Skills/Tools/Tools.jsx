import './Tools.css'

function Tools() {
    const tools = [
        { name: 'VS Code', category: 'IDE', icon: '💻', level: 'Advanced' },
        { name: 'WebStorm', category: 'IDE', icon: '🛠️', level: 'Intermediate' },
        { name: 'Postman', category: 'API Testing', icon: '📮', level: 'Advanced' },
        { name: 'Docker', category: 'Containerization', icon: '🐳', level: 'Intermediate' },
        { name: 'Kubernetes', category: 'Orchestration', icon: '⚓', level: 'Beginner' },
        { name: 'Jenkins', category: 'CI/CD', icon: '🤖', level: 'Intermediate' },
        { name: 'Figma', category: 'Design', icon: '🎨', level: 'Intermediate' },
        { name: 'Adobe XD', category: 'Design', icon: '✏️', level: 'Beginner' },
        { name: 'Jira', category: 'Project Management', icon: '📋', level: 'Advanced' },
        { name: 'Trello', category: 'Project Management', icon: '📌', level: 'Intermediate' },
        { name: 'Slack', category: 'Communication', icon: '💬', level: 'Advanced' },
        { name: 'Discord', category: 'Communication', icon: '🎮', level: 'Intermediate' }
    ]

    const categories = [...new Set(tools.map(tool => tool.category))]

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return '#28a745'
            case 'Intermediate': return '#ffc107'
            case 'Beginner': return '#dc3545'
            default: return '#6c757d'
        }
    }

    return (
        <div className="tools">
            <h1>Development Tools</h1>
            <p className="description">
                Essential tools and utilities that enhance productivity and streamline development workflows.
            </p>
            
            {categories.map(category => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="tools-grid">
                        {tools
                            .filter(tool => tool.category === category)
                            .map((tool, index) => (
                                <div key={index} className="tool-card">
                                    <div className="tool-icon">{tool.icon}</div>
                                    <h3>{tool.name}</h3>
                                    <div className="level-badge" style={{ backgroundColor: getLevelColor(tool.level) }}>
                                        {tool.level}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tools 