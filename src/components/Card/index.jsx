import React from 'react'
import logement from '../../logements.json'
   

function Card(){
    return(
        <div className="containerCard">
            <ul className="ensembleFichesCard" >
                {logement.map((picture)=>
                <li key={picture.id} className="ficheCard" >
                    <p className="titreCard">{picture.title}</p>
                    <div className="degradeCard"></div>
                    <img className="imageCard" src={picture.cover} alt={picture.description}/>  
                </li>
                )
                }       
            </ul>
        </div>
    )
}

export default Card