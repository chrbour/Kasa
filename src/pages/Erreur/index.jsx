import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'



function Erreur(){
    return(
        <div>
            <Header />
            <div className="pageErreur">
                <h1 className="numeroErreur">404</h1>
                <h2 className="textErreur">Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="lienErreur" >Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Erreur