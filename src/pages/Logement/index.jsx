import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import logement from '../../logements.json'
import {Navigate} from 'react-router-dom'


function FicheLogement(){
    let recupId = useParams();
    const chambre = logement.find((element) => {
        return(
             element.id === recupId.id
        )
    }) 
    if (chambre === undefined){
       return(<Navigate to="/Erreur"/>)
    }
    const equipements = chambre.equipments.map((element) => <p>{element}</p>)
    const etoiles = []; 
    let classe="";
    for (let i=0; i<5; i++){
        {i<chambre.rating? classe="Coloree" : classe=""}
        etoiles.push(<span className={'etoileLogement'+classe}><i class="fa-solid fa-star"></i></span>)
    }
    const identite=chambre.host.name.split(' ');
    const prenom=identite[0];
    const nom=identite[1];
    return(
        <div>
            <Header />
            <Slideshow images={chambre.pictures}/>
            <div className="pageLogement">
                <div className="presentationLogement">
                    <div className = "situationLogement">
                        <h1>{chambre.title}</h1>
                        <p>{chambre.location}</p>
                    </div>       
                    <div className = "hoteLogement">
                        <div className='identiteLogement'>
                            <p>{prenom}</p>
                            <p>{nom}</p>
                        </div>
                        <div className="containerImageHoteLogement">
                            <img className="imageHoteLogement" src={chambre.host.picture} alt={chambre.host} />
                        </div>
                    </div>
                </div>
                    <div className = "containerTagsEtAppreciationLogemment">
                        <div className =" tagsLogement">
                            {chambre.tags.map((element) => <span>{element}</span>)}
                        </div>
                        <div className = "etoilesLogement">
                            {etoiles}
                        </div>
                    </div>
                    <div className="containerDetailLogement">
                            <Collapse valeur="Description" description={chambre.description} page="logement"/>
                            <Collapse valeur="Equipements" description={equipements} page="logement" />
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default FicheLogement