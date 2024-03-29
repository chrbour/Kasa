import React from 'react'
import logo from '../../assets/logoRose.png'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav className="containerHeader">
            <img className="logoHeader" src={logo} alt="Logo du site Kasa" />
            <div className="menuHeader">
                <Link to="/Kasa/" className="lienPageAccueil">Accueil</Link>
                <Link to="/Kasa/apropos/" className="lienPageApropos">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header