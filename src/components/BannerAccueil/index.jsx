import React from 'react'
import { styled } from 'styled-components'
import image from '../../assets/kasa-Accueil.webp'

const ImgContainer=styled.div`
  height: 223px;
  overflow: hidden;
  border-radius: 25px;
  margin: 60px 100px 40px;
  position: relative;`

const StyledImg=styled.img`
  filter: brightness(70%);
  width: 1720px;
  object-position: 0px -1210px;`

const Titre=styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #FFFFFF;
    transform: translate(-50%,-50%);
    @media(max-width: 767px){
      font-size: 24px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        font-size: 36px;
    }
    @media(min-width: 992px){
        font-size: 48px;
    }`

function BannerAccueil(){
  return(
    <div>
      <ImgContainer>
        <Titre>Chez vous, partout et ailleurs</Titre>
        <StyledImg src={image} alt="Iles asiatiques" /> 
      </ImgContainer>
    </div>
  )
}

export default BannerAccueil