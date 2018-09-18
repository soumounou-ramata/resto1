import React, {Component} from 'react';
import anime from 'animejs';
import './Gallery.css';
import gallery1 from './images/gallery1.png';
import gallery2 from './images/gallery2.png';
import gallery3 from './images/gallery3.png';
import gallery4 from './images/gallery4.png';
import gallery5 from './images/gallery5.png';
import gallery6 from './images/gallery6.png';
import gallery7 from './images/gallery7.png';
import gallery8 from './images/gallery8.png';
import gallery9 from './images/gallery9.png';
import gallery10 from './images/gallery10.png';
import gallery11 from './images/gallery11.png';
import gallery12 from './images/gallery12.png';
import gallery13 from './images/gallery13.png';
import gallery14 from './images/gallery14.png';
import gallery15 from './images/gallery15.png';
import gallery16 from './images/gallery16.png';

let animateGallery = () =>{
    anime({
        targets: document.querySelector("#gallery"),
        duration: 1750,
        easing: 'linear',
        delay: 4000,
        translateX: '-25%',
        complete: function(){
            anime({
                targets: document.querySelector("#gallery"),
                duration: 1750,
                easing: 'linear',
                delay: 4000,
                translateX: '-50%',
                complete: function(){
                    anime({
                        targets: document.querySelector("#gallery"),
                        duration: 2500,
                        easing: 'linear',
                        delay: 4000,
                        translateX: '-75%',
                        complete: function(){
                            anime({
                                targets: document.querySelector("#gallery"),
                                easing: 'linear',
                                delay: 4000,
                                duration: 1,
                                translateX: '0%',
                                complete: animateGallery                            
                            })
                        }
        
                    })
                }
            })
        }
    })
}


class Gallery extends Component{
    render(){
        return(
            <div id="gallery">
                <img src={gallery1} alt=""  />
                <img src={gallery2} alt=""  />
                <img src={gallery3} alt=""  />
                <img src={gallery4} alt=""  />
                <img src={gallery5} alt=""  />
                <img src={gallery6} alt=""  />
                <img src={gallery7} alt=""  />
                <img src={gallery8} alt=""  />
                <img src={gallery9} alt=""  />
                <img src={gallery10} alt=""  />
                <img src={gallery11} alt=""  />
                <img src={gallery12} alt=""  />
                <img src={gallery13} alt=""  />
                <img src={gallery14} alt=""  />
                <img src={gallery15} alt=""  />
                <img src={gallery16} alt=""  />
                <div className="overlayGL"></div>

                {
                    document.addEventListener("DOMContentLoaded", function(){
                        animateGallery();
                    })
                }
            </div>
        )
    }
}

export default Gallery;