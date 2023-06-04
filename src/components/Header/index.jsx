import logo from '../../assets/logoRose.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 100px 0px;`

const Logo = styled.img`height: 68px`

const StyledLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
        text-underline-offset: 5px;
    }`

function Header(){
    return(
        <StyledNav>
            <Logo src={logo} alt="Logo du site Kasa" />
            <div>
                <StyledLink to="/" style={{marginRight: '60px'}}>Accueil</StyledLink>
                <StyledLink to="/apropos/1">A Propos</StyledLink>
            </div>
        </StyledNav>
    )
}

export default Header