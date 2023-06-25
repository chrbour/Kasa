import React, { Fragment, useState } from 'react'

function Slideshow ({images}){
    let nbrePhotos = images.length
    let [photo, updatePhoto]=useState(0)
    const changePhoto = (sens) => {
        sens===-1? (photo>0? updatePhoto(photo-1) : updatePhoto(nbrePhotos-1)) : (photo<nbrePhotos-1? updatePhoto(photo+1) : updatePhoto(0));
    }    
    return (
        <Fragment>
            <div className='containerPhotos'>
                {nbrePhotos>1? 
                <Fragment>
                        <p className="paginationPhotos">{(photo+1)+'/'+nbrePhotos}</p> 
                    <div className="containerChevrons">
                        <p className="chevronGauche" onClick={() => changePhoto(-1)}><i class="fa-solid fa-chevron-left"></i></p>
                        <p className="chevronDroit" onClick={() => changePhoto(1)}><i class="fa-solid fa-chevron-right"></i></p>
                    </div>
                </Fragment>
                : null }
                <div>
                 <img src={images[photo]} alt="Photo de la location"></img>   
                </div>  
             </div>          
        </Fragment>  
    )
}

export default Slideshow
