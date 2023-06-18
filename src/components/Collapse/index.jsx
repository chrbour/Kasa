import React from 'react'
import {useState} from 'react'

let classe="";
function Collapse({valeur, description, page}){
    const [isOpened, updateIsOpened]= useState(false)
    const affichageDescription =() => {
        isOpened? updateIsOpened(false) : updateIsOpened(true);
    }
    {page==="logement"? classe="Logement" : classe=""}
    return(
        <div className={"containerCollapse" + classe} >
            <p className={"titreCollapse" + classe} onClick={() => affichageDescription()}>
                {valeur}{isOpened? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}
            </p>
            {isOpened? <p className={"descriptionCollapse" + classe}>{description}</p> : null}
        </div>
    )
}

export default Collapse