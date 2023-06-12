import React from 'react'
import logo from '../../assets/logoRose.png'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav className="containerHeader">
            <img className="logoHeader" src={logo} alt="Logo du site Kasa" />
            <div className="menuHeader">
                <Link to="/" className="lienPageAccueil">Accueil</Link>
                <Link to="/apropos/1" className="lienPageApropos">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header