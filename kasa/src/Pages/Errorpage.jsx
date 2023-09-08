import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import { Link } from "react-router-dom";
import "./Errorpage.scss"

function Errorpage () {
    return <div className="errorpage">
    <Navbar/>
    <main className="errordesc">
        <h1>404</h1>
        <h2>Oups ! la page que vous demandez n'existe pas.</h2>
        <Link to='/'>
            <p>Retournez sur la page d'acceuil</p>
        </Link>
    </main>
    <Footer/>
    </div>
    
        

}

export default Errorpage