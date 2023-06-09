import React from 'react'
import Header from '../../components/Header'
import BannerApropos from '../../components/BannerApropos'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'

function Apropos(){
    return(
        <div>
            <Header />
            <BannerApropos />
            <Collapse value='Fiabilité'/>
            <Collapse value='Respect'/>
            <Collapse value='Service'/>
            <Collapse value='Sécurité'/>
            <Footer />
        </div>
    )
}

export default Apropos