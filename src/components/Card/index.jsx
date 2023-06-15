import React from 'react'
import logement from '../../logements.json'
import {Link} from 'react-router-dom'
   

function Card(){
    return(
        <div className="containerCard">
            <ul className="ensembleFichesCard" >
                {logement.map((picture)=>
                <Link to={`logement/${picture.id}`} className="lienCard">
                    <li key={picture.id} className="ficheCard" >
                        <p className="titreCard">{picture.title}</p>
                        <div className="degradeCard"></div>
                        <img className="imageCard" src={picture.cover} alt={picture.description}/>  
                    </li>
                </Link>
                )
                }       
            </ul>
        </div>
    )
}

export default Card