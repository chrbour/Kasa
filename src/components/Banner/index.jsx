import React from 'react'
import { styled } from 'styled-components'



function Banner({titre, photo, description, classe}){
  return(
    <div className='containerBanner'>
      <p className='textBanner' >{titre}</p>
      <img className={classe + ' imageBanner'} src={photo} alt={description} /> 
    </div>
  )
}

export default Banner