import Footer from "../layout/Footer"
import Navbar from "../layout/Navbar"
import Main from "../components/Main"
import Collapse from "../components/Collapse"
import BannerSlider from "../components/Bannerslider"
import "./Appartements.scss"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import CollapseEquiment from "../components/CollapseEquipment"
import { Navigate } from "react-router-dom"
import Errorpage from "./Errorpage"



function Appartment() {
    const location = useLocation()
  
    const [selectedFlat, setSelectedFlat] = useState()
    const [errorPage, setError] = useState(false)
  
    useEffect(() => {  
        fetchFlatData()
    }, [location.state])
  
    function fetchFlatData() {
      fetch("db.json")
        .then((res) => res.json())
        .then((flats) => {
          const flat = flats.find((flat) => flat.id === location.state.FlatId)
          if (flat) {
            setSelectedFlat(flat)
          } else {
            setError(true)
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération JSON :', error)
          setError(true)
        })
    }
  
    if (errorPage) {
      return <Navigate to='/error404' />
    }
    if (selectedFlat == null) return <div>...</div>


    return <div className="wrapper">
    <Navbar/>
    <Main>       
    <BannerSlider picture={selectedFlat.pictures}/>
    <div className="app_header">
        <div className="app_description">
            <h1>{selectedFlat.title}</h1>
            <h2>{selectedFlat.location}</h2>
            <div className="tag">
                {selectedFlat.tags.map((tag, index) => (
                <p key={index}>{tag}</p>))}
            </div>
        </div>

        <div className="app_owner">
            <div className="details">
                <h3>{selectedFlat.host.name}</h3>
                <div className="badge">
                    <img src={selectedFlat.host.picture} alt="" />
                </div>
            </div>
            <div className="star">
            {[1, 2, 3, 4, 5].map((num) => (
                    <i key={num} className={"fa-solid fa-star" +
                    (selectedFlat.rating >= num ? " on" :"")}></i>)
                )} 
            </div>   
        </div>
    </div>
    <div className="app_collapse">
        <Collapse title="Description" content={selectedFlat.description}/>
        <CollapseEquiment title="Equipements" content={selectedFlat.equipments}/>
    </div>
    </Main>
    <div className="footerposition">
        <Footer/>
    </div>
    </div>
    
        

}

export default Appartment