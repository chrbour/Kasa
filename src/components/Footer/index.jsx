import React from 'react'
import logo from '../../assets/logoBlanc.png'
import styled from 'styled-components'


const Logo=styled.img`
    height: 40px;
    color: #FFFFFF;
    margin: 66px 0px 40px;
    `
const PiedPage=styled.div`
    background-color: #000000;
    text-align: center;
    height: 210px;
    color: #FFFFFF;
    padding-bottom: 30px;
    @media(max-width: 767px){
        font-size: 12px;
    }
    @media(min-width: 768px) and (max-width: 991px){
        font-size: 18px;
    }
    @media(min-width: 992px){
        font-size: 24px;
    }`

function Footer(){
    return(
        <PiedPage className="PiedPage">
            <Logo src={logo} alt="Logo du site Kasa" />
            <p><i class="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
        </PiedPage>
    )
}

export default Footer