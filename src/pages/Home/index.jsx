import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import image from '../../assets/kasa-Accueil.webp'

function Home(){
  return(
    <div>
      <Header />
      <Banner titre="Chez vous, partout et ailleurs" photo={image} description="Iles asiatiques"/>
      <Card />
      <Footer />
    </div>
  )
}

export default Home