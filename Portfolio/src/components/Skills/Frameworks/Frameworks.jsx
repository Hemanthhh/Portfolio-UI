import './Frameworks.css'
import { FaAngular, FaBug } from "react-icons/fa"
import {
    SiApachekafka,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiDjango,
    SiFlask,
    SiTensorflow,
    SiPytorch,
    SiKeras,
    SiFastapi,
    SiSpring,
    SiJunit5,
    SiSpringboot,
    SiReact,
    SiGin,
    SiPytest,
    SiFlutter,
} from "react-icons/si"

function Frameworks() {
    const frameworks = [
        { name: 'Spring', icon: SiSpring },
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'Mockito', icon: FaBug },
        { name: 'JUnit', icon: SiJunit5 },
        { name: 'Kafka', icon: SiApachekafka },
        { name: 'Pandas', icon: SiPandas },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Scikit Learn', icon: SiScikitlearn },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'Keras', icon: SiKeras },
        { name: 'React', icon: SiReact },
        { name: 'Angular', icon: FaAngular },
        { name: 'Django', icon: SiDjango },
        { name: 'Flask', icon: SiFlask },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'PyTest', icon: SiPytest },
        { name: 'Gin', icon: SiGin },
        { name: 'Flutter', icon: SiFlutter },
    ]

    return (
        <div className="frameworks">
            <div className="frameworks-list">
                {frameworks.map((framework, index) => {
                    const IconComponent = framework.icon;
                    return (
                        <div key={index} className="framework-item">
                            <span className="skill-icon"><IconComponent /></span>
                            <span className="framework-name">{framework.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Frameworks 