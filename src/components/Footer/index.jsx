import logo from '../../assets/logoBlanc.png'
import styled from 'styled-components'
import {faCopyright} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo=styled.img`
    height: 40px;
    color: #FFFFFF;
    margin: 66px 0px 40px;
    `
const PiedPage=styled.div`
    background-color: #000000;
    text-align: center;
    height: 210px;
    color: white;
    padding-bottom: 30px;`

function Footer(){
    return(
        <PiedPage className="PiedPage">
            <Logo src={logo} alt="Logo du site Kasa" />
            <p><FontAwesomeIcon icon={faCopyright} /> 2020 Kasa. All rights reserved</p>
        </PiedPage>
    )
}

export default Footer