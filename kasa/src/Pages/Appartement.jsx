import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import Main from "../components/Main"
import Collapse from "../components/Collapse"
import "./Appartment.scss"

function Appartment () {
    return <div className="wrapper">
    <Navbar/>
    <Main>
    <div className="carrousel">
        <img src="" alt="" className="bannerslider"/>
        <i className="fas fa-chevron-down rightarrow"></i>
        <i className="fas fa-chevron-down leftarrow" ></i>
    </div>

    <div className="app_header">
        <div className="app_description">
            <h1>Cozy loft on the canal Saint-Martin</h1>
            <h2>Paris, Île-de-France</h2>
            <div className="tag">
                <p>Cozy</p>
                <p>Canal</p>
                <p>Paris 10</p>
            </div>
        </div>

        <div className="app_owner">
            <div className="details">
                <h3>Alexandre Dumas</h3>
                <div className="badge">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="star">
                <i className="fa-solid fa-star on"></i>
                <i className="fa-solid fa-star on"></i>
                <i className="fa-solid fa-star on"></i>
                <i className="fa-solid fa-star off"></i>
                <i className="fa-solid fa-star off"></i> 
            </div>   
        </div>
    </div>
    <div className="app_collapse">
        <Collapse/>
        <Collapse/>
    </div>
    </Main>
    <div className="footerposition">
        <Footer/>
    </div>
    </div>
    
        

}

export default Appartment