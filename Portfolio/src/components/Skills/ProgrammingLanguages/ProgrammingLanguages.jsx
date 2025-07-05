import './ProgrammingLanguages.css'
import { FaJava, FaPython, FaJs, FaGolang } from "react-icons/fa6"
import { SiDart, SiTypescript } from "react-icons/si"

function ProgrammingLanguages() {
    const languages = [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Go', icon: FaGolang },
        { name: 'Dart', icon: SiDart },
    ]

    return (
        <div className="programming-languages">
            <div className="languages-list">
                {languages.map((language, index) => {
                    const IconComponent = language.icon;
                    return (
                        <div key={index} className="language-item">
                            <span className="language-icon"><IconComponent /></span>
                            <span className="language-name">{language.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProgrammingLanguages;
