import styled from 'styled-components'
import image from '../../assets/kasa-Accueil.webp'

const ImgContainer=styled.div`
  height: 223px;
  background: #000000;
  overflow: hidden;
  border-radius: 25px;
  margin: 60px 100px 40px;
  position: relative;`

const StyledImg=styled.img`
  opacity: 70%;
  width: 1720px;
  object-position: 0px -1210px;`

const Titre=styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 48px;
    color: #FFFFFF;
    transform: translate(-50%,-50%);`

function Banner(){
  return(
    <div>
      <ImgContainer>
        <Titre>Chez vous, partout et ailleurs</Titre>
        <StyledImg src={image} alt="Iles asiatiques" /> 
      </ImgContainer>
    </div>
  )
}

export default Banner