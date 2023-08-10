import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import Main from "../components/Main"
import Collapse from "../components/Collapse"

import "./about.scss"

function About () {
    return <div className="wrapper">
    <Navbar/>
    <Main>
    <div className="bannerabout">
        <img src="../Logo/Bannerabout.PNG" alt="" />
    </div>
    <div className="aboutdesc">
        <Collapse tittle="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."/>
        <Collapse tittle="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Collapse tittle="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Collapse tittle="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
    </Main>
    <div className="footerposition">
    <Footer/>
    </div>
    </div>
    
        

}

export default About