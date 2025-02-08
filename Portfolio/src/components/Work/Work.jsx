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
            "role": "Software Development Engineer"
        },
        {
            "id": 3,
            "company": "OCM Advisory Group",
            "startDate": "Sept 2021",
            "endDate": "Dec 2021",
            "role": "Software Engineer"
        },
        {
            "id": 4,
            "company": "SharkNinja",
            "startDate": "Mar 2021",
            "endDate": "Sept 2021",
            "role": "Software Engineer - Data Platform"
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
                            {item.company}
                            <br/>
                            {item.role}
                        </li>
                    </ul>
                ))}
            </ul>

        </div>
    );
}

export default Work;