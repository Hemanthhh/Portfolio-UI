import './Databases.css'

function Databases() {
    const databases = [
        { name: 'MySQL', type: 'Relational', icon: '🐬', level: 'Advanced' },
        { name: 'PostgreSQL', type: 'Relational', icon: '🐘', level: 'Advanced' },
        { name: 'MongoDB', type: 'NoSQL', icon: '🍃', level: 'Intermediate' },
        { name: 'Redis', type: 'Cache', icon: '🔴', level: 'Intermediate' },
        { name: 'SQLite', type: 'Relational', icon: '💾', level: 'Intermediate' },
        { name: 'Firebase', type: 'Cloud', icon: '🔥', level: 'Intermediate' },
        { name: 'DynamoDB', type: 'NoSQL', icon: '⚡', level: 'Beginner' },
        { name: 'Cassandra', type: 'NoSQL', icon: '🌊', level: 'Beginner' }
    ]

    const types = [...new Set(databases.map(db => db.type))]

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return '#28a745'
            case 'Intermediate': return '#ffc107'
            case 'Beginner': return '#dc3545'
            default: return '#6c757d'
        }
    }

    return (
        <div className="databases">
            <h1>Databases & Data Storage</h1>
            <p className="description">
                Experience with various database technologies for different use cases and requirements.
            </p>
            
            {types.map(type => (
                <div key={type} className="type-section">
                    <h2>{type} Databases</h2>
                    <div className="databases-grid">
                        {databases
                            .filter(db => db.type === type)
                            .map((database, index) => (
                                <div key={index} className="database-card">
                                    <div className="database-icon">{database.icon}</div>
                                    <h3>{database.name}</h3>
                                    <div className="level-badge" style={{ backgroundColor: getLevelColor(database.level) }}>
                                        {database.level}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Databases 