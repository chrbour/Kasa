import React from 'react'
import logement from '../../logements.json'
import styled from 'styled-components'

const Container=styled.div`
    margin: 45px 100px;
    padding: 25px;
    background-color: #F6F6F6;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width: 767px){
        background-color: #FFFFFF;
    }
    `
const Fiche=styled.li`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    margin: 25px;
    background-size: cover`

const Titre=styled.div`
    color: #FFFFFF;
    font-size: 18px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;`
    

function Card(){
    return(
        <div>
            <Container>
            {logement.map((picture)=>
                <ul>
                    <Fiche key={picture.id} style={{backgroundImage: `linear-gradient(
                        rgba(255,255,255, 0), 
                        rgba(0,0,0, 0.4)
                      ),url(${picture.cover})`}}>
                    <Titre>{picture.title}</Titre>
                    </Fiche>
                </ul>
                )
            }
            </Container>
        </div>
    )
}

export default Card