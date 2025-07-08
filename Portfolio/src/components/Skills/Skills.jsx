import { useState } from 'react'
import './Skills.css'

import ProgrammingLanguages from './ProgrammingLanguages/ProgrammingLanguages'
import Frameworks from './Frameworks/Frameworks'
import Databases from './Databases/Databases'
import OperatingSystems from './OperatingSystems/OperatingSystems'
import VersionControl from './VersionControl/VersionControl'
import Tools from './Tools/Tools'
import CloudServices from './CloudServices/CloudServices'

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState('programming-languages')

    const skills = [
        { id: 'programming-languages', name: 'Programming Languages', component: <ProgrammingLanguages /> },
        { id: 'frameworks', name: 'Frameworks', component: <Frameworks /> },
        { id: 'databases', name: 'Databases', component: <Databases /> },
        { id: 'operating-systems', name: 'Operating Systems', component: <OperatingSystems /> },
        { id: 'version-control', name: 'Version Control', component: <VersionControl /> },
        { id: 'tools', name: 'Tools', component: <Tools /> },
        { id: 'cloud-services', name: 'Cloud Services', component: <CloudServices /> },
    ]

    const handleSkillClick = (skillId) => {
        setSelectedSkill(skillId)
    }

    const handleDropdownChange = (e) => {
        setSelectedSkill(e.target.value)
    }

    const selectedComponent = skills.find(skill => skill.id === selectedSkill)?.component

    return (
        <div className="skills" id="skills">
            <h1 className="Title">Skills</h1>
            <div className="skills-container">
                {/* Dropdown for mobile */}
                <div className="skills-dropdown-mobile">
                    <select
                        className="skills-dropdown-select"
                        value={selectedSkill}
                        onChange={handleDropdownChange}
                    >
                        {skills.map((skill) => (
                            <option key={skill.id} value={skill.id}>{skill.name}</option>
                        ))}
                    </select>
                </div>
                {/* Sidebar for desktop */}
                <div className="skills-sidebar">
                    <ul className={"skills-list"}>
                        {skills.map((skill) => (
                            <li
                                key={skill.id}
                                className={`skills-list-item ${selectedSkill === skill.id ? 'active' : ''}`}
                                onClick={() => handleSkillClick(skill.id)}
                            >
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="skills-content">
                    {selectedComponent}
                </div>
            </div>
        </div>
    )
}

export default Skills