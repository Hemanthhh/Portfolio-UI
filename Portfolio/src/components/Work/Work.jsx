import './Work.css'

function Work() {

    const workExperience = [
        {
            "id": 1,
            "company": "U.S. Bank",
            "startDate": "Aug 2022",
            "endDate": "Present",
            "role": "Full Stack Developer"
        },
        {
            "id": 2,
            "company": "Microsoft",
            "startDate": "Mar 2022",
            "endDate": "Aug 2022",
            "role": "SDE - I"
        },
        {
            "id": 3,
            "company": "OCM Advisory Group",
            "startDate": "Sept 2021",
            "endDate": "Dec 2021",
            "role": "Software Engineering"
        },
        {
            "id": 4,
            "company": "SharkNinja",
            "startDate": "Mar 2021",
            "endDate": "Sept 2021",
            "role": "Software Engineer - Data"
        }
    ];

    return (
        <div className="Work">
            <h1 className="Title">Work</h1>
            <ul >
                {workExperience.map((item) => (
                    <ul className="WorkList">
                        <li key={item.id} className="WorkListItem">{item.startDate + "-" + item.endDate}</li>
                        <li key={item.id} className="WorkListItem">
                            {item.role}
                            <br/>
                            <div className="CompanyName">
                                {item.company}
                            </div>
                        </li>
                    </ul>
                ))}
            </ul>

        </div>
    );
}

export default Work;