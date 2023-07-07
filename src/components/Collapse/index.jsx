import React from 'react'
import {useState, Fragment} from 'react'

let classe="";
function Collapse({valeur, description, page}){
    const [isPageChargee, updateIsPageChargee] = useState(false)
    const [isOpened, updateIsOpened]= useState(false)
    const affichageDescription =() => {
        isOpened? updateIsOpened(false) : updateIsOpened(true);
        !isPageChargee && updateIsPageChargee(true);
    }
    {page==="logement"? classe="Logement" : classe=""}
    return(
        <div className={"containerCollapse" + classe} >
            <p className={"titreCollapse" + classe} onClick={() => affichageDescription()}>
                {valeur}{isOpened? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
            </p>
            {isPageChargee?
                <Fragment>
                    {isOpened? 
                        <span className="containerDescriptionCollapse">
                            <p className={"descriptionCollapse" + classe + " collapseOuvert"} onClick={() => 
                                affichageDescription()}>{description}</p></span> 
                        : <span className="containerDescriptionCollapse">
                            <p className={"descriptionCollapse" + classe + " collapseFerme"}>{description}</p>
                            </span>
                    }
                </Fragment> : null
            }
        </div>
    )
}

export default Collapse