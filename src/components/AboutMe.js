import "./AboutMe.css"
import circles from "../images/Circles_bigger.svg"
import me from "../images/me.png"

const AboutMe = () => {
    return <div id="wrapper">
        <h1 className="subtitle-about-me">O mne</h1>
        <div className="content-about-me">
            <img className="circles" src={circles} alt="" />
            <div className="about-me">
                <img id="me" src={me} alt="" />
                <div className="img-text-about-me">
                    <p>Ahoj, volám sa Samo a som webový vývojár so zameraním na front-end technológie. Moja cesta k webovému vývoju začala s dizajnovaním vo Figme, kde som si uvedomil, že ma baví nielen tvorba vizuálnej stránky, ale aj pridávanie funkcionalít a pochopenie celého procesu vývoja webových stránok. Táto kombinácia kreatívnej a technickej práce ma veľmi baví a motivuje k neustálemu učeniu sa. Mojím cieľom je zlepšovať sa a postupne sa učiť aj back-end technológie. Rád riešim problémy a vymýšľam čo najjednoduchšie a efektívne riešenia.  Som otvorený konšturktívnej kritike a radám ktoré by ma mohli v tomto odbore posunúť na vyššiu úroveň.
                    </p>
                    <div className="links-about-me">
                        <a className="github" href="https://github.com/samotazky" target="blank">GitHub</a>
                        <a className="linkedin" href="https://www.linkedin.com/feed/" target="blank">Linkedin</a>
                        <a className="cv" href="/download/CV_S_TAZKY.pdf" download="CV_S_TAZKY">CV-čko</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutMe