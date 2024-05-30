import "./HeroSection.css"
import personWithPC from "../images/person_with_pc.png"
import theet from "../images/Teeth.svg"

const HeroSection = () => {
    return <div className="container">
        <div className="content">
            <img className="person" src={personWithPC} alt="" />
            <h1 className="title">Samueltazky</h1>
            <h1 className="title w">front-end</h1>
            <h1 className="title">developer</h1>
        </div>
        <img className="theet" src={theet} alt="" />
    </div>
}

export default HeroSection