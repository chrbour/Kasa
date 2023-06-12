import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'



function Collapse({valeur, description}){
    const [isOpened, updateIsOpened]= useState(false)
    const affichageDescription =() => {
        isOpened? updateIsOpened(false) : updateIsOpened(true);
    }
    return(
        <div className="containerCollapse">
            <p className="titreCollapse" onClick={() => affichageDescription()}>
                {valeur}{isOpened? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}
            </p>
            {isOpened? <p className="descriptionCollapse" >{description}</p>:null}
        </div>
    )
}

export default Collapse