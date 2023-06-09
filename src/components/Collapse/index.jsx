import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

const Consignes=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 35px 0px`

const Container=styled.div`
    width: 53%;
    height: 47px;
    border-radius: 5px;
    background-color: #FF6060;
    color: #FFFFFF;
    font-size: 20px;
    padding: 0 20px; 
    display:flex;
    align-items: center;
    justify-content: space-between;`

const ContText=styled.p`
    width: 53%;
    background-color: #F6F6F6;
    margin: 0;
    border-radius: 5px;
    padding: 20px;
    `

function Collapse(props){
    let value=props.value;
    let text={
        Fiabilité: 'Les annonces postées sur Kasa grantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        Respect: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        Service: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
        Sécurité: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
    const [isOpened, updateIsOpened]= useState(false)
    
    const chevron =() => {
        isOpened? updateIsOpened(false) : updateIsOpened(true);
        console.log (isOpened)
    }

    return(
        <Consignes>
            <Container onClick={() => updateIsOpened(true)}>{value}{isOpened? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</Container>
            <ContText >{isOpened && text[value]}</ContText>
        </Consignes>
    )
}

export default Collapse