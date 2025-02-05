import './Work.css'

function Work() {

    const workExperience = [
        {
            "id": 1,
            "company": "U.S. Bank",
            "startDate": "Aug 2022",
            "endDate": "Present",
        },
        {
            "id": 2,
            "company": "Microsoft",
            "startDate": "Mar 2022",
            "endDate": "Aug 2022",
        },
        {
            "id": 3,
            "company": "OCM Advisory Group",
            "startDate": "Sept 2021",
            "endDate": "Dec 2021",
        },
        {
            "id": 4,
            "company": "SharkNinja",
            "startDate": "Mar 2021",
            "endDate": "Sept 2021",
        }
    ];

    return (
        <div className="Work">
            <ul className="Work__list">
                {workExperience.map((item) => (
                    <ul>
                        <li key={item.id}>{item.startDate + "-" + item.endDate}</li>
                        <li key={item.id}>{item.company}</li>
                    </ul>
                ))}
            </ul>

        </div>
    );
}

export default Work;