import fakeStore from "./images/fake-store.png"
import ageCalculator from "./images/age-calculator-app.png"
import interiorDesign from "./images/interior-design-website.png"
import spaceTourism from "./images/space-tourism.png"
import multiStepForm from "./images/multi-step-form.png"
import myPortfolio from "./images/my_portfolio.png"

const myProjects = [
    {
        id: 2,
        image: interiorDesign,
        name: "Interior design",
        technologies: "HTML, SCSS, JS",
        descriptions: "Projekt ktorý slúži na prezentáciu firmy, ktorá sa zaoberá návrhom interiéru a následnou montážou.PRACUJEM NA DOKONČENÍ!!!",
        gitHub: "https://github.com/samotazky/Interior-design-webpage",
        netlify: "https://stalwart-belekoy-9d1f40.netlify.app/"
    }, {
        id: 1,
        image: fakeStore,
        name: "Simple fake store",
        technologies: "React, CSS",
        descriptions: "Pri tomto projekte som nekládol veľký dôraz na dizajn ale na funkcionalitu a čistotu kódu, z toho dôvodu je tento projekt po vizuálnej stránke jednoduchý. Pri tomto projekte som si osvojoval prácu s react-router-dom a, osviežoval prácu s API.",
        gitHub: "https://github.com/samotazky/fake_store",
        netlify: "https://simple-fake-store.netlify.app"
    }, {
        id: 3,
        image: ageCalculator,
        name: "Age calculator",
        technologies: "HTML, CSS, JS",
        descriptions: "Túto aplikáciu som programov podľa predlohy zo stránky Frontend Mentor. Táto aplikácia počíta na základe dátumu narodenia počet rokov, mesiacov a dní.",
        gitHub: "https://github.com/samotazky/age-calculator-app-main",
        netlify: "https://relaxed-creponne-2df784.netlify.app/"
    }, {
        id: 4,
        image: spaceTourism,
        name: "Space tourism",
        technologies: "HTML, CSS, JS",
        descriptions: "Tento projekt je naprogramovaný podľa predlohy zo stránky Frontend Mentor. Z tohoto dôvodu je nutné si na správne zobrazovanie stránky nastaviť veľkosť webu na šírku 1500px a výšku 900px. PRACUJEM NA DOKONČENÍ!!!",
        gitHub: "https://github.com/samotazky/space-tourism-website",
        netlify: "https://space-tourism123456.netlify.app/",
    }, {
        id: 5,
        image: multiStepForm,
        name: "Multi step form",
        technologies: "HTML, CSS, JS",
        descriptions: "Tento projekt je naprogramovaný podľa predlohy zo stránky Frontend Mentor. Jedná sa o viac stránkový formulár ktorý kontroluje či boli údaje zadané. Po zadaní základných informácii si klient vyberie plán a vyberie si či chce platiť mesačne alebo ročne. Na ďalšej strane si vyberie doplnkové služby a na poslednej strane sa nachádza výsledná cena produktov.",
        gitHub: "https://github.com/samotazky/multi-step-form-main",
        netlify: "https://multistepform5.netlify.app"
    }, {
        id: 6,
        image: myPortfolio,
        name: "My portfolio",
        technologies: "React, CSS",
        descriptions: "Tento projekt slúži na prezentáciu mojej práce. Predlohu som nadizajnoval v programe Figma.",
        gitHub: "https://github.com/samotazky/my-portfolio",
        netlify: "",
    }
]

export default myProjects