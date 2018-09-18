import React, {Component} from 'react';
import anime from 'animejs';
import './MainDishes.css';
import dishHeading1 from './images/dishesheading.png';
import dishHeading2 from './images/dishesheading2.png';
import dishHeading3 from './images/dishesheading3.png';
import dishHeading4 from './images/dishesheading4.png';
import dish1 from './images/dish1.png';
import dish2 from './images/dish2.png';
import dish3 from './images/dish3.png';
import dish4 from './images/dish4.png';
import dish5 from './images/dish5.png';
import dish6 from './images/dish6.png';
import dish7 from './images/dish7.png';
import dish8 from './images/dish8.png';
import dish9 from './images/dish9.png';
import Footer from './Footer';
import './Footer.css';
import Navbar from './Navbar';

class MainDishes extends Component{
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
        this.animateDishImages = this.animateDishImages.bind(this);
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

    animateDishImages(){
        let imagesAnimation = anime({
            targets: document.querySelector("#dish1"),
            duration: 20500,
            easing: 'linear',
            scale: 1.5,
            complete: function(){
                anime({
                    targets: document.querySelector("#dish1"),
                    duration: 1,
                    zIndex: -1,
                    complete: function(){
                        anime({
                            targets: document.querySelector("#dish2"),
                            duration: 20500,
                            easing: 'linear',
                            scale: 1.5,
                            complete: function(){
                                anime({
                                    targets: document.querySelector("#dish2"),
                                    duration: 1,
                                    scale: 1,
                                    zIndex: -1,
                                    complete: function(){
                                        anime({
                                            targets: document.querySelector("#dish3"),
                                            duration: 20500,
                                            easing: 'linear',
                                            scale: 1.5,
                                            complete: function(){
                                                anime({
                                                    targets: document.querySelector("#dish3"),
                                                    duration: 1,
                                                    scale: 1,
                                                    zIndex: -1,
                                                    complete: function(){
                                                        anime({
                                                            targets: document.querySelector("#dish4"),
                                                            duration: 20500,
                                                            easing: 'linear',
                                                            scale: 1.5,
                                                            complete: function(){
                                                                anime({
                                                                    targets: document.querySelector("#dish4"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 1  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#dish3"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 2  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#dish2"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 3  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#dish1"),
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
        this.animateDishImages();
    }

    render(){
        return(
            <div>
            <div id="maindishespage">
                <Navbar />
                <div className="heading">
                    <div id="dish4">
                        <img src={dishHeading4} alt=""  />
                    </div>
                    <div id="dish3">
                        <img src={dishHeading3} alt=""  />
                    </div>
                    <div id="dish2">
                        <img src={dishHeading2} alt=""  />
                    </div>
                    <div id="dish1">
                        <img src={dishHeading1} alt=""  />
                    </div>
                    
                    <div className="headingOverlay">
                        <p>- MENU -</p>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>Main Dishes</li>
                        <li>Served Daily as from 1:00 PM</li>
                    </ul>
                    <ul>
                        <li>Moroccan Grilled Chicken - $14.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Spring Chicken Parmesan - $12.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Spicy Shrimp Bowl - $17.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>bibimbap with crispy tofu - $15.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>red pepper pasta with white beans and basil - $14.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Rosemary Chicken - $15.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>

                    <div className="horiLine"></div>
                    <p>Vegan Options</p>
                    <ul>
                        <li>Vegan Cauliflower Tikka Masala - $17.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>ROASTED PLANTAIN &amp; BLACK BEAN VEGAN BOWL - $18.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>Vegan Coleslaw - $8.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Vegan Tacos - $12.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                </div>
                <div className="gallery">
                    <div className="gallery1">
                        <img src={dish1} alt=""   />
                        <div id="galleryOverlay1" onMouseEnter={this.animateOverlay1} onMouseLeave={this.reverseAnimateOverlay1}></div>
                    </div>
                    <div className="gallery2">
                        <img src={dish2} alt=""   />
                        <div id="galleryOverlay2" onMouseEnter={this.animateOverlay2} onMouseLeave={this.reverseAnimateOverlay2}></div>
                    </div>
                    <div className="gallery3">
                        <img src={dish3} alt=""   />
                        <div id="galleryOverlay3" onMouseEnter={this.animateOverlay3} onMouseLeave={this.reverseAnimateOverlay3}></div>
                    </div>
                    <div className="gallery4">
                        <img src={dish4} alt=""   />
                        <div id="galleryOverlay4" onMouseEnter={this.animateOverlay4} onMouseLeave={this.reverseAnimateOverlay4}></div>
                    </div>
                    <div className="gallery5">
                        <img src={dish5} alt=""   />
                        <div id="galleryOverlay5" onMouseEnter={this.animateOverlay5} onMouseLeave={this.reverseAnimateOverlay5}></div>
                    </div>
                    <div className="gallery6">
                        <img src={dish6} alt=""   />
                        <div id="galleryOverlay6" onMouseEnter={this.animateOverlay6} onMouseLeave={this.reverseAnimateOverlay6}></div>
                    </div>
                    <div className="gallery7">
                        <img src={dish7} alt=""   />
                        <div id="galleryOverlay7" onMouseEnter={this.animateOverlay7} onMouseLeave={this.reverseAnimateOverlay7}></div>
                    </div>
                    <div className="gallery8">
                        <img src={dish8} alt=""   />
                        <div id="galleryOverlay8" onMouseEnter={this.animateOverlay8} onMouseLeave={this.reverseAnimateOverlay8}></div>
                    </div>
                    <div className="gallery9">
                        <img src={dish9} alt=""   />
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

export default MainDishes;