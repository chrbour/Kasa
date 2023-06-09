import React from 'react'
import logo from '../../assets/logoRose.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 100px 0px;
    @media(max-width: 530px){
        margin: 40px 50px 0px;
    }`

const Logo = styled.img`
    @media(max-width: 767px){
        height: 48px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        height: 58px;
    }
    @media(min-width: 992px){
        height: 68px;
    }`

    const Menu=styled.div`
        @media(max-width: 430px){
            display:flex;
            height: 50px;
            justify-content: space-between; 
            text-align: center;
            flex-direction: column;
        }
        @media(min-width: 431px){
            .espaceAccueil{
                margin-right: 60px;
        }`
const StyledLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 5px;
    }
    @media(max-width: 767px){
        font-size: 12px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        font-size: 18px;
    }
    @media(min-width: 992px){
        font-size: 24px;
    }`

function Header(){
    return(
        <StyledNav>
            <Logo src={logo} alt="Logo du site Kasa" />
            <Menu>
                <StyledLink to="/" className="espaceAccueil">Accueil</StyledLink>
                <StyledLink to="/apropos/1">A Propos</StyledLink>
            </Menu>
        </StyledNav>
    )
}

export default Header