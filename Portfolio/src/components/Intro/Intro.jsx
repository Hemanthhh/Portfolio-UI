import './Intro.css'

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="introContent">
                <span className="greetings">Hi, My name is</span><br />
                <span className="name">Hemanth Varma.</span><br />
                <span className="introText">I am a Full Stack Developer</span><br />
                <span className="paragraph">
                    I'm a software engineer specializing in building and designing exceptional digital experiences. <br />
                    Currently, I'm focused on building accessible, human-centered products at 
                    <a href="https://www.oracle.com" id="companyURL">  Oracle </a>
                </span>
            </div>
        </div>
    );
}

export default Intro;