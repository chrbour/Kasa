import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Logement from '../../pages/Logement';
import Apropos from '../../pages/Apropos';
import Erreur from '../../pages/Erreur';

function Routeur() {
	return (
		<Router>
			<Routes>
				<Route path='/Kasa/' element={<Home />} />
				<Route path='/logement/:id' element={<Logement />} />
				<Route path='Kasa/apropos/' element={<Apropos />} />
				<Route path='*' element={<Erreur />} />
			</Routes>
		</Router>
	);
}

export default Routeur;
