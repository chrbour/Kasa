import React from 'react'
import logement from '../../logements.json'
import styled from 'styled-components'


    

function Card(){
    return(
        <div className="containerCard">
            <ul className="ensembleFichesCard" >
                {logement.map((picture)=>
                <li key={picture.id} className="ficheCard" >
                    <img className="imageCard" src={picture.cover} alt={picture.description}/>  
                    <p className="titreCard">{picture.title}</p>
                </li>
                )
                }       
            </ul>
        </div>
    )
}

export default Card