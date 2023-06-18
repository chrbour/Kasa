import React from 'react'

function Slideshow ({images}){
    return (
        <div className='containerLogement'>
            <img src={images[0]} alt="Photo de la location" />
        </div>
    )
}

export default Slideshow
