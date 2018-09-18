import React, {Component} from 'react';
import anime from 'animejs';
import './Drinks.css';
import drinkHeading1 from './images/drinksheading.png';
import drinkHeading2 from './images/drinksheading2.png';
import drinkHeading3 from './images/drinksheading3.png';
import drinkHeading4 from './images/drinksheading4.png';
import drink1 from './images/drink1.png';
import drink2 from './images/drink2.png';
import drink3 from './images/drink3.png';
import drink4 from './images/drink4.png';
import drink5 from './images/drink5.png';
import drink6 from './images/drink6.png';
import drink7 from './images/drink7.png';
import drink8 from './images/drink8.png';
import drink9 from './images/drink9.png';
import Footer from './Footer';
import './Footer.css';
import Navbar from './Navbar';


class Drinks extends Component{
    constructor(){
        super();
        this.animateOverlay1 = this.animateOverlay1.bind(this);
        this.animateOverlay2 = this.animateOverlay2.bind(this);
        this.animateOverlay3 = this.animateOverlay3.bind(this);
        this.animateOverlay4 = this.animateOverlay4.bind(this);
        this.animateOverlay5 = this.animateOverlay5.bind(this);
        this.animateOverlay6 = this.animateOverlay6.bind(this);
        this.animateOverlay7 = this.animateOverlay7.bind(this);
        this.animateOverlay8 = this.animateOverlay8.bind(this);
        this.animateOverlay9 = this.reverseAnimateOverlay9.bind(this);
        this.reverseAnimateOverlay1 = this.reverseAnimateOverlay1.bind(this);
        this.reverseAnimateOverlay2 = this.reverseAnimateOverlay2.bind(this);
        this.reverseAnimateOverlay3 = this.reverseAnimateOverlay3.bind(this);
        this.reverseAnimateOverlay4 = this.reverseAnimateOverlay4.bind(this);
        this.reverseAnimateOverlay5 = this.reverseAnimateOverlay5.bind(this);
        this.reverseAnimateOverlay6 = this.reverseAnimateOverlay6.bind(this);
        this.reverseAnimateOverlay7 = this.reverseAnimateOverlay7.bind(this);
        this.reverseAnimateOverlay8 = this.reverseAnimateOverlay8.bind(this);
        this.reverseAnimateOverlay9 = this.reverseAnimateOverlay9.bind(this);
        this.animateDrinkImages = this.animateDrinkImages.bind(this);
    }

    
    animateOverlay1(){
        anime({
            targets: document.getElementById("galleryOverlay1"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay2(){
        anime({
            targets: document.getElementById("galleryOverlay2"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay3(){
        anime({
            targets: document.getElementById("galleryOverlay3"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay4(){
        anime({
            targets: document.getElementById("galleryOverlay4"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay5(){
        anime({
            targets: document.getElementById("galleryOverlay5"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay6(){
        anime({
            targets: document.getElementById("galleryOverlay6"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay7(){
        anime({
            targets: document.getElementById("galleryOverlay7"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    animateOverlay8(){
        anime({
            targets: document.getElementById("galleryOverlay8"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }

    animateOverlay9(){
        anime({
            targets: document.getElementById("galleryOverlay9"),
            duration: 500,
            easing: 'linear',
            opacity: 0
        })
    }


    reverseAnimateOverlay1(){
        anime({
            targets: document.getElementById("galleryOverlay1"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay2 = () =>{
        anime({
            targets: document.getElementById("galleryOverlay2"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay3(){
        anime({
            targets: document.getElementById("galleryOverlay3"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay4(){
        anime({
            targets: document.getElementById("galleryOverlay4"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay5(){
        anime({
            targets: document.getElementById("galleryOverlay5"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay6(){
        anime({
            targets: document.getElementById("galleryOverlay6"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay7(){
        anime({
            targets: document.getElementById("galleryOverlay7"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay8(){
        anime({
            targets: document.getElementById("galleryOverlay8"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    reverseAnimateOverlay9(){
        anime({
            targets: document.getElementById("galleryOverlay9"),
            duration: 500,
            easing: 'linear',
            opacity: 1
        })
    }

    animateDrinkImages(){
        let imagesAnimation = anime({
            targets: document.querySelector("#drink1"),
            duration: 20500,
            easing: 'linear',
            scale: 1.5,
            complete: function(){
                anime({
                    targets: document.querySelector("#drink1"),
                    duration: 1,
                    zIndex: -1,
                    complete: function(){
                        anime({
                            targets: document.querySelector("#drink2"),
                            duration: 20500,
                            easing: 'linear',
                            scale: 1.5,
                            complete: function(){
                                anime({
                                    targets: document.querySelector("#drink2"),
                                    duration: 1,
                                    scale: 1,
                                    zIndex: -1,
                                    complete: function(){
                                        anime({
                                            targets: document.querySelector("#drink3"),
                                            duration: 20500,
                                            easing: 'linear',
                                            scale: 1.5,
                                            complete: function(){
                                                anime({
                                                    targets: document.querySelector("#drink3"),
                                                    duration: 1,
                                                    scale: 1,
                                                    zIndex: -1,
                                                    complete: function(){
                                                        anime({
                                                            targets: document.querySelector("#drink4"),
                                                            duration: 20500,
                                                            easing: 'linear',
                                                            scale: 1.5,
                                                            complete: function(){
                                                                anime({
                                                                    targets: document.querySelector("#drink4"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 1  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#drink3"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 2  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#drink2"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 3  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#drink1"),
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
        this.animateDrinkImages();
    }

    render(){
        return(
            <div>
            <div id="drinkspage">
                <Navbar />
                <div className="heading">
                    <div id="drink4">
                        <img src={drinkHeading4} alt=""  />
                    </div>
                    <div id="drink3">
                        <img src={drinkHeading3} alt=""  />
                    </div>
                    <div id="drink2">
                        <img src={drinkHeading2} alt=""  />
                    </div>
                    <div id="drink1">
                        <img src={drinkHeading1} alt=""  />
                    </div>
                    
                    <div className="headingOverlay">
                        <p>- MENU -</p>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>Drinks</li>
                        <li>Served Daily</li>
                    </ul>
                    <ul>
                        <li>Martini - $7.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Bloody Mary - $8.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Margarita - $7.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>Gin and Tonic - $5.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Mojito - $10.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Old Fashioned - $15.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>

                    <div className="horiLine"></div>
                    <p>Non-Alcoholic Drinks</p>
                    <ul>
                        <li>Sparkling Summer Limeade - $5.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Pineapple-Orange Sherbert Punch - $6.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>Hot Chocolate - $4.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Orange Slush Punch - $4.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                </div>
                <div className="gallery">
                    <div className="gallery1">
                        <img src={drink1} alt=""   />
                        <div id="galleryOverlay1" onMouseEnter={this.animateOverlay1} onMouseLeave={this.reverseAnimateOverlay1}></div>
                    </div>
                    <div className="gallery2">
                        <img src={drink2} alt=""   />
                        <div id="galleryOverlay2" onMouseEnter={this.animateOverlay2} onMouseLeave={this.reverseAnimateOverlay2}></div>
                    </div>
                    <div className="gallery3">
                        <img src={drink3} alt=""   />
                        <div id="galleryOverlay3" onMouseEnter={this.animateOverlay3} onMouseLeave={this.reverseAnimateOverlay3}></div>
                    </div>
                    <div className="gallery4">
                        <img src={drink4} alt=""   />
                        <div id="galleryOverlay4" onMouseEnter={this.animateOverlay4} onMouseLeave={this.reverseAnimateOverlay4}></div>
                    </div>
                    <div className="gallery5">
                        <img src={drink5} alt=""  />
                        <div id="galleryOverlay5" onMouseEnter={this.animateOverlay5} onMouseLeave={this.reverseAnimateOverlay5}></div>
                    </div>
                    <div className="gallery6">
                        <img src={drink6} alt=""   />
                        <div id="galleryOverlay6" onMouseEnter={this.animateOverlay6} onMouseLeave={this.reverseAnimateOverlay6}></div>
                    </div>
                    <div className="gallery7">
                        <img src={drink7} alt=""   />
                        <div id="galleryOverlay7" onMouseEnter={this.animateOverlay7} onMouseLeave={this.reverseAnimateOverlay7}></div>
                    </div>
                    <div className="gallery8">
                        <img src={drink8} alt=""   />
                        <div id="galleryOverlay8" onMouseEnter={this.animateOverlay8} onMouseLeave={this.reverseAnimateOverlay8}></div>
                    </div>
                    <div className="gallery9">
                        <img src={drink9} alt=""   />
                        <div id="galleryOverlay9" onMouseEnter={this.animateOverlay9} onMouseLeave={this.reverseAnimateOverlay9}></div>
                    </div>
                </div>
            </div>
            <div className="footerMenu">
                <Footer     />
            </div>
            </div>
        );
    }
}

export default Drinks;