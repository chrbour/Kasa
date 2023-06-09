import React from 'react'
import Header from '../../components/Header'
import BannerAccueil from '../../components/BannerAccueil'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

function Home(){
  return(
    <div>
      <Header />
      <BannerAccueil />
      <Card />
      <Footer />
    </div>
  )
}

export default Home