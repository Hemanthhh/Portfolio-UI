import './CloudServices.css'

function CloudServices() {
    const cloudServices = [
        { name: 'AWS', icon: '☁️', level: 'Intermediate', services: ['EC2', 'S3', 'Lambda'] },
        { name: 'Azure', icon: '🔷', level: 'Intermediate', services: ['VM', 'Blob Storage', 'Functions'] },
        { name: 'Google Cloud', icon: '🌐', level: 'Beginner', services: ['Compute Engine', 'Cloud Storage'] },
        { name: 'Heroku', icon: '🚀', level: 'Intermediate', services: ['App Platform', 'Postgres'] },
        { name: 'Vercel', icon: '▲', level: 'Advanced', services: ['Deployment', 'Edge Functions'] },
        { name: 'Netlify', icon: '🌍', level: 'Intermediate', services: ['Static Sites', 'Forms'] },
        { name: 'DigitalOcean', icon: '🐙', level: 'Intermediate', services: ['Droplets', 'Spaces'] },
        { name: 'Firebase', icon: '🔥', level: 'Intermediate', services: ['Auth', 'Firestore', 'Hosting'] }
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
        <div className="cloud-services">
            <h1>Cloud Services & Platforms</h1>
            <p className="description">
                Experience with cloud platforms and services for scalable application deployment and management.
            </p>
            
            <div className="cloud-grid">
                {cloudServices.map((service, index) => (
                    <div key={index} className="cloud-card">
                        <div className="cloud-icon">{service.icon}</div>
                        <h3>{service.name}</h3>
                        <div className="level-badge" style={{ backgroundColor: getLevelColor(service.level) }}>
                            {service.level}
                        </div>
                        <div className="services-list">
                            {service.services.map((srv, idx) => (
                                <span key={idx} className="service-tag">{srv}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CloudServices 