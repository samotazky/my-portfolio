import "./style-reset.css"
import Herosection from "./components/HeroSection"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"

const App = () => {
  return <div>
    <Herosection />
    <Skills />
    <Projects />
    <AboutMe />
  </div>
}

export default App