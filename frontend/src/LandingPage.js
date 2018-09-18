import React, {Component} from 'react';
import './LandingPage.css';
import anime from 'animejs';
import landing1 from './images/landing1.png';
import landing2 from './images/landing2.png';
import landing3 from './images/landing3.png';
import landing4 from './images/landing4.png';


class LandingPage extends Component{
    constructor(){
        super();
        this.animateImages = this.animateImages.bind(this);
        this.animateTitle = this.animateTitle.bind(this);
    }
    animateTitle(){
        anime({
            targets: document.querySelectorAll(".overlayLP p"),
            opacity: 1,
            duration: 4500,
            easing: 'linear'
        })
    }
    
    animateImages(){
        let imagesAnimation = anime({
            targets: document.querySelector("#landing1"),
            duration: 25500,
            easing: 'linear',
            scale: 1.5,
            complete: function(){
                anime({
                    targets: document.querySelector("#landing1"),
                    duration: 1,
                    zIndex: -1,
                    complete: function(){
                        anime({
                            targets: document.querySelector("#landing2"),
                            duration: 25500,
                            easing: 'linear',
                            scale: 1.5,
                            complete: function(){
                                anime({
                                    targets: document.querySelector("#landing2"),
                                    duration: 1,
                                    scale: 1,
                                    zIndex: -1,
                                    complete: function(){
                                        anime({
                                            targets: document.querySelector("#landing3"),
                                            duration: 25500,
                                            easing: 'linear',
                                            scale: 1.5,
                                            complete: function(){
                                                anime({
                                                    targets: document.querySelector("#landing3"),
                                                    duration: 1,
                                                    scale: 1,
                                                    zIndex: -1,
                                                    complete: function(){
                                                        anime({
                                                            targets: document.querySelector("#landing4"),
                                                            duration: 25500,
                                                            easing: 'linear',
                                                            scale: 1.5,
                                                            complete: function(){
                                                                anime({
                                                                    targets: document.querySelector("#landing4"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 1  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#landing3"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 2  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#landing2"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 3  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#landing1"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 4,  
                                                                    complete: imagesAnimation.restart
                                                                })
                                                            }
                                                            
                                                        })
                                                    }  
                                                })
                                            }
                            
                                        })
                                    }    
                                })
                            }
            
                        })
                    }
                })
            }
        })
    }

    componentDidMount(){
        this.animateImages();
        this.animateTitle();
    }
    
    render(){
        return(
            <div id="landingpage">
                <div id="landing4">
                    <img src={landing4} alt=""  />
                </div>
                <div id="landing3">
                    <img src={landing3} alt=""  />
                </div>
                <div id="landing2">
                    <img src={landing2} alt=""  />
                </div>
                <div id="landing1">
                    <img src={landing1} alt=""  />
                </div>
                <div className="overlayLP">
                    <p>Welcome to</p>
                    <p>Tosca Grille</p>
                    <p>Restaurant &amp; Bar</p>
                </div>
            </div>
            
        );
    }
}

export default LandingPage;