import React from 'react'
import Header from '../../components/Header'
import {Link} from 'react-router-dom'


{/*const NumeroErreur=styled.h1`
    margin: 130px 0px 60px;
    font-weight: bold;
    @media(max-width: 767px){
        font-size: 96px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        font-size: 192px;
    }
    @media(min-width: 992px){
        font-size: 288px;
    }`

const TextErreur=styled.h2`
    margin: 0 100px 150px;
    @media(max-width: 767px){
        font-size: 18px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        font-size: 27px;
    }
    @media(min-width: 992px){
        font-size: 36px;
    }`

const LienAccueil=styled(Link)`
    text-decoration: none;
    color: #FF6060;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 5px;
    }
    @media(max-width: 767px){
        font-size: 14px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        font-size: 16px;
    }
    @media(min-width: 992px){
        font-size: 18px;
    }`
   

const CentrePage=styled.div`
text-align: center;`*/}

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