import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import FicheLogement from '../../pages/FicheLogement'
import Apropos from '../../pages/Apropos'
import Erreur from '../../pages/Erreur'

function Routeur() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<FicheLogement />} />
                <Route path="/apropos/:id" element={<Apropos />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </Router>
    )
}

export default Routeur