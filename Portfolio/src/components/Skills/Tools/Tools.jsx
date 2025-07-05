import './Tools.css'
import { VscVscode } from "react-icons/vsc"
import {
    SiIntellijidea,
    SiPostman,
    SiKubernetes,
    SiPycharm,
    SiWebstorm,
    SiInsomnia,
    SiHoppscotch,
    SiGithubactions,
    SiGitlab,
    SiFigma,
    SiDocker,
    SiSlack,
    SiJenkins,
    SiConfluence,
    SiJira,
    SiRancher,
    SiTerraform,
    SiExcalidraw,
    SiApachemaven,
    SiGradle,
    SiJfrog,
    SiNpm,
    SiAnaconda,
} from "react-icons/si"
import { BsMicrosoftTeams } from "react-icons/bs";



function Tools() {
    const tools = [
        { name: 'Maven', icon: SiApachemaven },
        { name: 'Gradle', icon: SiGradle },
        { name: 'JFrog', icon: SiJfrog },
        { name: 'NPM', icon: SiNpm },
        { name: 'VS Code', icon: VscVscode },
        { name: 'IntelliJ IDEA', icon: SiIntellijidea },
        { name: 'PyCharm', icon: SiPycharm },
        { name: 'Anaconda', icon: SiAnaconda },
        { name: 'WebStorm', icon: SiWebstorm },
        { name: 'Postman', icon: SiPostman },
        { name: 'Insomnia', icon: SiInsomnia },
        { name: 'Hoppscotch', icon: SiHoppscotch },
        { name: 'Jenkins', icon: SiJenkins },
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'GitLab CI/CD', icon: SiGitlab },
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Rancher', icon: SiRancher },
        { name: 'Terraform', icon: SiTerraform },
        { name: 'Figma', icon: SiFigma },
        { name: 'Jira', icon: SiJira },
        { name: 'Confluence', icon: SiConfluence },
        { name: 'Excalidraw', icon: SiExcalidraw },
        { name: 'Slack', icon: SiSlack },
        { name: 'Microsoft Teams', icon: BsMicrosoftTeams },
    ]

    return (
        <div className="tools">
            <div className="tools-list">
                {tools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                        <div key={index} className="tool-item">
                            <span className="skill-icon"><IconComponent /></span>
                            <span className="tool-name">{tool.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Tools 