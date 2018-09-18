import React, {Component} from 'react';
import anime from 'animejs';
import './Breakfast.css';
import breakfastHeading1 from './images/breakfastheading.png';
import breakfastHeading2 from './images/breakfastheading2.png';
import breakfastHeading3 from './images/breakfastheading3.png';
import breakfastHeading4 from './images/breakfastheading4.png';
import breakfast1 from './images/breakfast1.png';
import breakfast2 from './images/breakfast2.png';
import breakfast3 from './images/breakfast3.png';
import breakfast4 from './images/breakfast4.png';
import breakfast5 from './images/breakfast5.png';
import breakfast6 from './images/breakfast6.png';
import breakfast7 from './images/breakfast7.png';
import breakfast8 from './images/breakfast8.png';
import breakfast9 from './images/breakfast9.png';
import Footer from './Footer';
import './Footer.css';
import Navbar from './Navbar';



class Breakfast extends Component{
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
        this.animateBreakfastImages = this.animateBreakfastImages.bind(this);
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

    animateBreakfastImages(){
        let imagesAnimation = anime({
            targets: document.querySelector("#breakfast1"),
            duration: 20500,
            easing: 'linear',
            scale: 1.5,
            complete: function(){
                anime({
                    targets: document.querySelector("#breakfast1"),
                    duration: 1,
                    zIndex: -1,
                    complete: function(){
                        anime({
                            targets: document.querySelector("#breakfast2"),
                            duration: 20500,
                            easing: 'linear',
                            scale: 1.5,
                            complete: function(){
                                anime({
                                    targets: document.querySelector("#breakfast2"),
                                    duration: 1,
                                    scale: 1,
                                    zIndex: -1,
                                    complete: function(){
                                        anime({
                                            targets: document.querySelector("#breakfast3"),
                                            duration: 20500,
                                            easing: 'linear',
                                            scale: 1.5,
                                            complete: function(){
                                                anime({
                                                    targets: document.querySelector("#breakfast3"),
                                                    duration: 1,
                                                    scale: 1,
                                                    zIndex: -1,
                                                    complete: function(){
                                                        anime({
                                                            targets: document.querySelector("#breakfast4"),
                                                            duration: 20500,
                                                            easing: 'linear',
                                                            scale: 1.5,
                                                            complete: function(){
                                                                anime({
                                                                    targets: document.querySelector("#breakfast4"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 1  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#breakfast3"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 2  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#breakfast2"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 3  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#breakfast1"),
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
        this.animateBreakfastImages();
    }

    render(){
        return(
            <div>
            <div id="breakfastpage">
                <Navbar />
                <div className="heading">
                    <div id="breakfast4">
                        <img src={breakfastHeading4} alt=""  />
                    </div>
                    <div id="breakfast3">
                        <img src={breakfastHeading3} alt=""  />
                    </div>
                    <div id="breakfast2">
                        <img src={breakfastHeading2} alt=""  />
                    </div>
                    <div id="breakfast1">
                        <img src={breakfastHeading1} alt=""  />
                    </div>
                    <div className="headingOverlay">
                        <p>- MENU -</p>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>Breakfast</li>
                        <li>Daily from 11:00 AM to 1:00 PM</li>
                    </ul>
                    <ul>
                        <li>Pancakes with Rose Apples - $10.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Chicken and Waffle Sandwich - $12.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Mediterranean Omelette - $9.75</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>French Toasts - $8.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Sausage, Ham or Bacon Burrito - $14.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Avocado Toasts with Eggs - $9.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>

                    <div className="horiLine"></div>
                    <p>Vegan Options</p>
                    <ul>
                        <li>Pancakes with Rose Apples - $10.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Chicken and Waffle Sandwich - $12.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>French Toasts - $8.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Sausage, Ham or Bacon Burrito - $14.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                </div>
                <div className="gallery">
                    <div className="gallery1">
                        <img src={breakfast1} alt=""   />
                        <div id="galleryOverlay1" onMouseEnter={this.animateOverlay1} onMouseLeave={this.reverseAnimateOverlay1}></div>
                    </div>
                    <div className="gallery2">
                        <img src={breakfast2} alt=""   />
                        <div id="galleryOverlay2" onMouseEnter={this.animateOverlay2} onMouseLeave={this.reverseAnimateOverlay2}></div>
                    </div>
                    <div className="gallery3">
                        <img src={breakfast3} alt=""   />
                        <div id="galleryOverlay3" onMouseEnter={this.animateOverlay3} onMouseLeave={this.reverseAnimateOverlay3}></div>
                    </div> 
                    <div className="gallery4">
                        <img src={breakfast4} alt=""   />
                        <div id="galleryOverlay4" onMouseEnter={this.animateOverlay4} onMouseLeave={this.reverseAnimateOverlay4}></div>
                    </div>
                    <div className="gallery5">
                        <img src={breakfast5} alt=""   />
                        <div id="galleryOverlay5" onMouseEnter={this.animateOverlay5} onMouseLeave={this.reverseAnimateOverlay6}></div>
                    </div>
                    <div className="gallery6">
                        <img src={breakfast6} alt=""   />
                        <div id="galleryOverlay6" onMouseEnter={this.animateOverlay6} onMouseLeave={this.reverseAnimateOverlay6}></div>
                    </div>
                    <div className="gallery7">
                        <img src={breakfast7} alt=""   />
                        <div id="galleryOverlay7" onMouseEnter={this.animateOverlay7} onMouseLeave={this.reverseAnimateOverlay7}></div>
                    </div>
                    <div className="gallery8">
                        <img src={breakfast8} alt=""   />
                        <div id="galleryOverlay8" onMouseEnter={this.animateOverlay8} onMouseLeave={this.reverseAnimateOverlay8}></div>
                    </div>
                    <div className="gallery9">
                        <img src={breakfast9} alt=""   />
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

export default Breakfast;