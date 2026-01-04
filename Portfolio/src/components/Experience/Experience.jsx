import './Experience.css'

function Experience() {

    const workExperience = [
        {
            "id": 1,
            "company": "Oracle",
            "startDate": "Oct 2025",
            "endDate": "Present",
            "role": "Senior Member of Technical Staff"
        },
        {
            "id": 2,
            "company": "U.S. Bank",
            "startDate": "Aug 2022",
            "endDate": "Sept 2025",
            "role": "Full Stack Developer"
        },
        {
            "id": 3,
            "company": "Microsoft",
            "startDate": "Mar 2022",
            "endDate": "Aug 2022",
            "role": "SDE - I"
        },
        {
            "id": 4,
            "company": "OCM Advisory Group",
            "startDate": "Sept 2021",
            "endDate": "Dec 2021",
            "role": "Software Engineering Intern"
        },
        {
            "id": 5,
            "company": "SharkNinja",
            "startDate": "Mar 2021",
            "endDate": "Sept 2021",
            "role": "Software Engineer - Data"
        }
    ];

    return (
        <div className="Experience" id="experience">
            <h1 className="Title">Experience</h1>
            <ul className="ExperienceList">
                {workExperience.map((item) => (
                    <li key={item.id} className="ExperienceItem">
                        <div className="ExperienceRow">
                            <div className="DateColumn">
                                {item.startDate} - {item.endDate}
                            </div>
                            <div className="InfoColumn">
                                <div className="RoleTitle">{item.role}</div>
                                <div className="CompanyName">{item.company}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Experience;