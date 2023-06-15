import React from 'react'
import Header from '../../components/Header'
import Slideshow from '../../components/Slideshow'
import logement from '../../logements.json'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import { useParams } from 'react-router-dom';

function FicheLogement(){
    let recupId=useParams();
    const chambre = logement.find((element) => {
        return(
             element.id === recupId.id
        )
    })
    console.log(recupId, 'chambre:',chambre);
    return(
        <div>
            <Header />
            <Slideshow />
            <h1>{chambre.title}</h1>
            <p>{chambre.location}</p>
            <p></p>
            <p>{chambre.host.name}</p>
            <img src={chambre.host.picture} alt={chambre.host} />
            <Collapse valeur="Description" description={chambre.description} />
            <Collapse valeur="Equipements" description={chambre.equipments} />

            <Footer />
        </div>
    )
}

export default FicheLogement