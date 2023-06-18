import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import image from '../../assets/kasa-Apropos.webp'


function Apropos(){
    return(
        <div>
            <Header />
            <Banner titre="" photo={image} description="Rivière entre des montagnes enneigées" classe="aproposBanner" page="apropos"/>
            <Collapse valeur='Fiabilité' description='Les annonces postées sur Kasa grantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' page="apropos" />
            <Collapse valeur='Respect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' page="apropos"/>
            <Collapse valeur='Service' description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." page="apropos"/>
            <Collapse valeur='Sécurité'description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." page="apropos"/>
            <Footer />
        </div>
    )
}

export default Apropos