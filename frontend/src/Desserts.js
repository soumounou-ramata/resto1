import React, {Component} from 'react';
import anime from 'animejs';
import './Desserts.css';
import dessertsHeading1 from './images/dessertsheading.png';
import dessertsHeading2 from './images/dessertsheading2.png';
import dessertsHeading3 from './images/dessertsheading3.png';
import dessertsHeading4 from './images/dessertsheading4.png';
import dessert1 from './images/dessert1.png';
import dessert2 from './images/dessert2.png';
import dessert3 from './images/dessert3.png';
import dessert4 from './images/dessert4.png';
import dessert5 from './images/dessert5.png';
import dessert6 from './images/dessert6.png';
import dessert7 from './images/dessert7.png';
import dessert8 from './images/dessert8.png';
import dessert9 from './images/dessert9.png';
import Footer from './Footer';
import './Footer.css';
import Navbar from './Navbar';

class Desserts extends Component{
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
        this.animateDessertsImages = this.animateDessertsImages.bind(this);
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

    animateDessertsImages(){
        let imagesAnimation = anime({
            targets: document.querySelector("#dessert1"),
            duration: 20500,
            easing: 'linear',
            scale: 1.5,
            complete: function(){
                anime({
                    targets: document.querySelector("#dessert1"),
                    duration: 1,
                    zIndex: -1,
                    complete: function(){
                        anime({
                            targets: document.querySelector("#dessert2"),
                            duration: 20500,
                            easing: 'linear',
                            scale: 1.5,
                            complete: function(){
                                anime({
                                    targets: document.querySelector("#dessert2"),
                                    duration: 1,
                                    scale: 1,
                                    zIndex: -1,
                                    complete: function(){
                                        anime({
                                            targets: document.querySelector("#dessert3"),
                                            duration: 20500,
                                            easing: 'linear',
                                            scale: 1.5,
                                            complete: function(){
                                                anime({
                                                    targets: document.querySelector("#dessert3"),
                                                    duration: 1,
                                                    scale: 1,
                                                    zIndex: -1,
                                                    complete: function(){
                                                        anime({
                                                            targets: document.querySelector("#dessert4"),
                                                            duration: 20500,
                                                            easing: 'linear',
                                                            scale: 1.5,
                                                            complete: function(){
                                                                anime({
                                                                    targets: document.querySelector("#dessert4"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 1  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#dessert3"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 2  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#dessert2"),
                                                                    duration: 1,
                                                                    scale: 1,
                                                                    zIndex: 3  
                                                                })
                                                                anime({
                                                                    targets: document.querySelector("#dessert1"),
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
        this.animateDessertsImages();
    }



    render(){
        return(
            <div>
            <div id="dessertpage">
                <Navbar />
                <div className="heading">
                    <div id="dessert4">
                        <img src={dessertsHeading4} alt=""  />
                    </div>
                    <div id="dessert3">
                        <img src={dessertsHeading3} alt=""  />
                    </div>
                    <div id="dessert2">
                        <img src={dessertsHeading2} alt=""  />
                    </div>
                    <div id="dessert1">
                        <img src={dessertsHeading1} alt=""  />
                    </div>
                    <div className="headingOverlay">
                        <p>- MENU -</p>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>Desserts</li>
                        <li>Served Daily</li>
                    </ul>
                    <ul>
                        <li>Chocolate Mousse - $10.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Cannoli - $12.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Chocolate Chip Pannokies - $7.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>Macarons - $15.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Chocolate and Coffee Cake - $14.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Sundae - $5.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>

                    <div className="horiLine"></div>
                    <p>Vegan Options</p>
                    <ul>
                        <li>Vegan Cinnamon rools - $7.50</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Vegan Chocolate Cake - $8.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                    <ul>
                        <li>Tahini Banana Soft Serve - $8.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                        <li>Dark Chocolate Truffles - $12.00</li>
                        <li>Maecenas facilisis urna vitae ligula vestibulum fermentum a vulputate mi. Suspendisse nec felis non diam ullamcorper tempus vitae sit amet nisi.</li> 
                    </ul>
                </div>
                <div className="gallery">
                    <div className="gallery1">
                        <img src={dessert1} alt=""   />
                        <div id="galleryOverlay1" onMouseEnter={this.animateOverlay1} onMouseLeave={this.reverseAnimateOverlay1}></div>
                    </div>
                    <div className="gallery2">
                        <img src={dessert2} alt=""   />
                        <div id="galleryOverlay2" onMouseEnter={this.animateOverlay2} onMouseLeave={this.reverseAnimateOverlay2}></div>
                    </div>
                    <div className="gallery3">
                        <img src={dessert3} alt=""   />
                        <div id="galleryOverlay3" onMouseEnter={this.animateOverlay3} onMouseLeave={this.reverseAnimateOverlay3}></div>
                    </div>
                    <div className="gallery4">
                        <img src={dessert4} alt=""   />
                        <div id="galleryOverlay4" onMouseEnter={this.animateOverlay4} onMouseLeave={this.reverseAnimateOverlay4}></div>
                    </div>
                    <div className="gallery5">
                        <img src={dessert5} alt=""  />
                        <div id="galleryOverlay5" onMouseEnter={this.animateOverlay5} onMouseLeave={this.reverseAnimateOverlay5}></div>
                    </div>
                    <div className="gallery6">
                        <img src={dessert6} alt=""   />
                        <div id="galleryOverlay6" onMouseEnter={this.animateOverlay6} onMouseLeave={this.reverseAnimateOverlay6}></div>
                    </div>
                    <div className="gallery7">
                        <img src={dessert7} alt=""   />
                        <div id="galleryOverlay7" onMouseEnter={this.animateOverlay7} onMouseLeave={this.reverseAnimateOverlay7}></div>
                    </div>
                    <div className="gallery8">
                        <img src={dessert8} alt=""   />
                        <div id="galleryOverlay8" onMouseEnter={this.animateOverlay8} onMouseLeave={this.reverseAnimateOverlay8}></div>
                    </div>
                    <div className="gallery9">
                        <img src={dessert9} alt=""   />
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

export default Desserts;