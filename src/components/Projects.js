import { useState } from "react"
import "./Projects.css"
import circles from "../images/Circles.svg"
import PersonWithNotebook from "../images/person_with_notebook.png"
import data from "../data"

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(2)
    const [showAll, setShowAll] = useState(false)

    const toggleProjects = () => {
        if (showAll) {
            setVisibleProjects(2)
            setShowAll(false)
        } else {
            setVisibleProjects(data.length)
            setShowAll(true)
        }
    }

    return <div className="work sec">
        <h1 className="subtitle">projekty</h1>
        <img src={circles} alt="" />

        <div className="projects">
            {
                data.slice(0, visibleProjects).map( (oneProject) => {
                    const {id, image, name, technologies, descriptions, gitHub, netlify} = oneProject
                    
                    return <div className="project" key={id}>
                            <div className="project-img" style={{ backgroundImage: `url(${image})` }}>
                                <div className="project-links">
                                    <a className="github link" href={gitHub} target="blank">Code</a>
                                    <a className="netlify link" href={netlify} target="blank">Live</a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h2>{name}</h2>
                                <h3>{technologies}</h3>
                                <p>{descriptions}</p>
                        </div>
                    </div>
                })
            }
            <img id="person-with-ntb" src={PersonWithNotebook} alt="" />
            <button onClick={toggleProjects}>{showAll ? "menej" : "viac"}</button>
        </div>
        
    </div>
}

export default Projects