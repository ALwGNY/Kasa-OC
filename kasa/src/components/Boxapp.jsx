import "./Boxapp.scss"
import Card from './Card.jsx'
import React, { useState, useEffect } from 'react';

function Boxapp () {
    const [Flats, setFlats] = useState([])

    useEffect (fetchFlats, [])
  
    function fetchFlats () {
      fetch ("db.json")
      .then ((res) => res.json())
      .then ((res) => setFlats(res))
      .catch(error => console.error('Erreur lors de la récupération JSON :', error));
    }

    return <div className="boxapp">
        {Flats.map((Flat, index) => {
            
                return <Card id={Flat.id} title={Flat.title} imageUrl={Flat.cover} key={index}/>
            

            })}

        </div>
}

export default Boxapp