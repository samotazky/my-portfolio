import "./Skills.css"
import circles from "../images/Circles.svg"
import roadMap from "../images/road-map.png"

const Skills = () => {
    return <div className="container-tech">
        <h1 className="subtitle">Technológie & Skills</h1>
        
        <img src={circles} alt="" />

        <div className="content-tech">
            <div className="rectangle">
                    <div className="tech">
                        <p className="skills">figma</p>
                        <p className="skills">photoshop</p>
                        <p className="skills">html</p>
                        <p className="skills">css</p>
                        <p className="skills">git</p>
                        <p className="skills">sass</p>
                        <p className="skills">jquery</p>
                        <p className="skills">javascript</p>
                        <p className="skills">php</p>
                        <p className="skills">mysql</p>
                        <p className="skills">tailwind</p>
                        <p className="skills">react</p>
                        <img className="road-map" src={roadMap} alt="road map" />
                </div>
            </div>
        </div>
    </div>
}

export default Skills