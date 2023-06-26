import React from 'react'
import logement from '../../logements.json'
import {Link} from 'react-router-dom'
   

function Card(){
    return(
        <div className="containerCard">
            <ul className="ensembleFichesCard" >
                {logement.map((image)=>
                    <Link to={`logement/${image.id}`} className="lienCard">
                        <li key={image.id} className="ficheCard" >
                            <p className="titreCard">{image.title}</p>
                            <div className="degradeCard"></div> 
                            <img className="imageCard" src={image.cover} alt={image.description}/> 
                        </li>
                    </Link>
                )
                }       
            </ul>
        </div>
    )
}

export default Card