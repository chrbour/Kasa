import React from 'react'


function Banner({titre, photo, description, classe}){
  return(
    <div className='containerBanner'>
      <p className='textBanner' >{titre}</p>
      <img className={classe + ' imageBanner'} src={photo} alt={description} /> 
    </div>
  )
}

export default Banner