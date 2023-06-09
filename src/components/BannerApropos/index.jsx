import React from 'react'
import styled from 'styled-components'
import image from '../../assets/kasa-Apropos.webp'

const ImgContainer=styled.div`
  height: 223px;
  overflow: hidden;
  border-radius: 25px;
  margin: 60px 100px 0px;
  position: relative;`

const StyledImg=styled.img`
  filter: brightness(70%);
  width: 1720px;
  object-position: 0px -500px;
  `

function BannerApropos(){
  return(
    <div>
      <ImgContainer>
        <StyledImg src={image} alt="Rivière entre des montagnes enneigées" /> 
      </ImgContainer>
    </div>
  )
}

export default BannerApropos