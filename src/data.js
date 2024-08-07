import ageCalculator from "./images/age-calculator-app.png"
import interiorDesign from "./images/interior-design-website.png"
import spaceTourism from "./images/space-tourism.png"
import multiStepForm from "./images/multi-step-form.png"
import myPortfolio from "./images/my_portfolio.png"

const myProjects = [
    {
        id: 1,
        image: ageCalculator,
        name: "Age calculator",
        technologies: "HTML, CSS, JS",
        descriptions: "Túto aplikáciu som programov podľa predlohy zo stránky Frontend Mentor. Táto aplikácia počíta na základe dátumu narodenia počet rokov, mesiacov a dní.",
        gitHub: "https://github.com/samotazky/age-calculator-app-main",
        netlify: "https://relaxed-creponne-2df784.netlify.app/"
    }, {
        id: 2,
        image: interiorDesign,
        name: "Interior design",
        technologies: "HTML, SCSS, JS",
        descriptions: "Projekt ktorý slúži na prezentáciu firmy, ktorá sa zaoberá návrhom interiéru a následnou montážou.",
        gitHub: "https://github.com/samotazky/Interior-design-webpage",
        netlify: "https://stalwart-belekoy-9d1f40.netlify.app/"
    }, {
        id: 3,
        image: spaceTourism,
        name: "Space tourism",
        technologies: "HTML, CSS, JS",
        descriptions: "Tento projekt je naprogramovaný podľa predlohy zo stránky Frontend Mentor. Z tohoto dôvodu je nutné si na správne zobrazovanie stránky nastaviť veľkosť webu na šírku 1500px a výšku 900px. NIE JE DOKONČENÝ!!!",
        gitHub: "https://github.com/samotazky/space-tourism-website",
        netlify: "https://space-tourism123456.netlify.app/",
    }, {
        id: 4,
        image: multiStepForm,
        name: "Multi step form",
        technologies: "React, CSS",
        descriptions: "Tento projekt je naprogramovaný podľa predlohy zo stránky Frontend Mentor. Jedná sa o viac stránkový formulár ktorý kontroluje či boli údaje zadané. PRACUJEM NA DOKONČENÍ!!!",
        gitHub: "https://github.com/samotazky/multi-step-form-main",
        netlify: "https://multistepform5.netlify.app"
    }, {
        id: 5,
        image: myPortfolio,
        name: "My portfolio",
        technologies: "React, CSS",
        descriptions: "Tento projekt slúži na prezentáciu mojej práce. Predlohu som nadizajnoval v programe Figma. NIE JE DOKONČENÝ!!!",
        gitHub: "https://github.com/samotazky/my-portfolio",
        netlify: "",
    }
]

export default myProjects