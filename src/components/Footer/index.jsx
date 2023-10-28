import React from 'react';
import logo from '../../assets/logoBlanc.png';

function Footer() {
	return (
		<div className='containerFooter'>
			<img className='logoFooter' src={logo} alt='Logo du site Kasa' />
			<p>
				<i className='fa-regular fa-copyright'></i> 2020 Kasa. All rights
				reserved
			</p>
		</div>
	);
}

export default Footer;
