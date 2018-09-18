import React, {Component} from 'react';
import {Link} from "react-router-dom";
import anime from 'animejs';
import './Homepage.css';
import 'react-datepicker/dist/react-datepicker.css';
import LandingPage from './LandingPage';
import Gallery from './Gallery';
import Footer from './Footer';
import Navbar from './Navbar';
import Reservation from './Reservation';

let animateSection = () =>{
    anime({
        targets: document.querySelector("#breakfastHP"),
        duration: 150,
        easing: 'easeInQuad',
        translateY: 100,
        opacity: 1
    })
    anime({
        targets: document.querySelector("#mainHP"),
        duration: 150,
        delay: 120,
        easing: 'easeInQuad',
        translateY: 100,
        opacity: 1
    })
    
    anime({
        targets: document.querySelector("#dessertHP"),
        duration: 150,
        delay: 240,
        easing: 'easeInQuad',
        translateY: 100,
        opacity: 1
    })
    
    anime({
        targets: document.querySelector("#drinksHP"),
        duration: 150,
        delay: 360,
        easing: 'easeInQuad',
        translateY: 100,
        opacity: 1
    })
}

let animatePopular = () =>{
    anime({
        targets: document.querySelector("#popular1"),
        translateY: -100,
        duration: 200,
        opacity: 1,
        easing: 'linear'
    })
    anime({
        targets: document.querySelector("#popular2"),
        translateY: -100,
        duration: 200,
        delay: 25,
        opacity: 1,
        easing: 'linear'
    })
    anime({
        targets: document.querySelector("#popular3"),
        translateY: -100,
        duration: 50,
        delay: 300,
        opacity: 1,
        easing: 'linear'
    })
}

class Homepage extends Component{
    constructor(){
        super();
        this.animateHPButton = this.animateHPButton.bind(this);
        this.animateOverlayHP1 = this.animateOverlayHP1.bind(this);
        this.animateOverlayHP2 = this.animateOverlayHP2.bind(this);
        this.animateOverlayHP3 = this.animateOverlayHP3.bind(this);
        this.animateOverlayHP4 = this.animateOverlayHP4.bind(this);
        this.animateSloganButton = this.animateSloganButton.bind(this);
        this.animateTestimonials = this.animateTestimonials.bind(this);
        this.reverseAnimateOverlayHP1 = this.reverseAnimateOverlayHP1.bind(this);
        this.reverseAnimateOverlayHP2 = this.reverseAnimateOverlayHP2.bind(this);
        this.reverseAnimateOverlayHP3 = this.reverseAnimateOverlayHP3.bind(this);
        this.reverseAnimateOverlayHP4 = this.reverseAnimateOverlayHP4.bind(this);
        this.reverserAnimateHPButton = this.reverserAnimateHPButton.bind(this);
        this.reverserAnimateSloganButton = this.reverserAnimateSloganButton.bind(this);
        this.scrollToReservation = this.scrollToReservation.bind(this);
    }

        
    animateHPButton(){
        anime({
            targets: document.getElementById("aboutButton"),
            color: "#398DA7",
            duration: 100,
            easing: 'linear',
            borderColor: "#398DA7",
            scale: 1.1
        })
    }

    reverserAnimateHPButton(){
        anime({
            targets: document.getElementById("aboutButton"),
            color: "#151515",
            duration: 100,
            easing: 'linear',
            borderColor: "#151515",
            scale: 1
        })
    }

    animateSloganButton(){
        anime({
            targets: document.getElementById("buttonSlogan"),
            duration: 100,
            easing: 'linear',
            scale: 1.1
        })
    }

    reverserAnimateSloganButton(){
        anime({
            targets: document.getElementById("buttonSlogan"),
            duration: 100,
            easing: 'linear',
            scale: 1
        })
    }

    animateOverlayHP1(){
        anime({
            targets: document.getElementById("overlayHP1"),
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 200,
            easing: 'linear'
        })
    }

    animateOverlayHP2(){
        anime({
            targets: document.getElementById("overlayHP2"),
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 200,
            easing: 'linear'
        })
    }

    animateOverlayHP3(){
        anime({
            targets: document.getElementById("overlayHP3"),
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 200,
            easing: 'linear'
        })
    }


    animateOverlayHP4(){
        anime({
            targets: document.getElementById("overlayHP4"),
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 200,
            easing: 'linear'
        })
    }

    reverseAnimateOverlayHP1(){
        anime({
            targets: document.getElementById("overlayHP1"),
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            duration: 200,
            easing: 'linear'
        })
    }

    reverseAnimateOverlayHP2(){
        anime({
            targets: document.getElementById("overlayHP2"),
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            duration: 200,
            easing: 'linear'
        })
    }


    reverseAnimateOverlayHP3(){
        anime({
            targets: document.getElementById("overlayHP3"),
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            duration: 200,
            easing: 'linear'
        })
    }


    reverseAnimateOverlayHP4(){
        anime({
            targets: document.getElementById("overlayHP4"),
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            duration: 200,
            easing: 'linear'
        })
    }

    animateTestimonials(){
        let testimonialsAnimation = anime({
            targets: document.querySelector("#testiOne"),
            duration: 1500,
            easing: 'linear',
            opacity: 1,
            complete: function(){
                anime({
                    targets: document.querySelector("#testiOne"),
                    delay: 5450,
                    duration: 1500,
                    easing: 'linear',
                    opacity: 0,
                    complete: function(){
                        anime({
                            targets: document.querySelector("#testiTwo"),
                            duration: 1500,
                            opacity: 1,
                            easing: 'linear',
                            delay: 150,
                            complete: function(){
                                anime({
                                    targets: document.querySelector("#testiTwo"),
                                    delay: 5450,
                                    duration: 1500,
                                    easing: 'linear',
                                    opacity: 0,
                                    complete: function(){
                                        anime({
                                            targets: document.querySelector("#testiThree"),
                                            duration: 1500,
                                            opacity: 1,
                                            easing: 'linear',
                                            delay: 150,
                                            complete: function(){
                                                anime({
                                                    targets: document.querySelector("#testiThree"),
                                                    delay: 5450,
                                                    duration: 1500,
                                                    easing: 'linear',
                                                    opacity: 0,
                                                    complete: testimonialsAnimation.restart
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

    scrollToReservation(){
        window.scrollTo(0, 2850);
    }

    componentDidMount(){
        document.addEventListener("scroll", function(){
            if(window.scrollY > 450){
                animateSection();
            }
            if(window.scrollY > 1000){
                animatePopular();
            }
        })
        this.animateTestimonials();
    }

    render(){
        return (
            <div>
                <div id="homepage">
                    <Navbar />
                    <LandingPage    />
                    <div id="vertiLineHP1"></div>
                    <div className="aboutHP">
                        <ul>
                            <li>About Restaurant</li>
                            <li>Praesent fermentum a ante pharetra feugiat. In et turpis mollis sem rutrum faucibus sed et augue. Nunc a tortor varius, facilisis justo at, auctor est. Nunc rhoncus a urna vitae rutrum. In quis sem nec metus elementum viverra. </li>
                            <li>
                                <Link to="/aboutUs">
                                    <button id="aboutButton" onMouseEnter={this.animateHPButton} onMouseLeave={this.reverserAnimateHPButton}>Read More</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sectionsHP">
                        <Link to="/breakfast">
                            <div id="breakfastHP">
                                <div id="overlayHP1" onMouseEnter={this.animateOverlayHP1} onMouseLeave={this.reverseAnimateOverlayHP1}>
                                    <p>Breakfast</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/mainDishes">
                            <div id="mainHP">
                                <div id="overlayHP2" onMouseEnter={this.animateOverlayHP2} onMouseLeave={this.reverseAnimateOverlayHP2}>
                                    <p>Main Dishes</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="desserts">
                            <div id="dessertHP">
                                <div id="overlayHP3" onMouseEnter={this.animateOverlayHP3} onMouseLeave={this.reverseAnimateOverlayHP3}>
                                    <p>Desserts</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="drinks">
                            <div id="drinksHP">
                                <div id="overlayHP4" onMouseEnter={this.animateOverlayHP4} onMouseLeave={this.reverseAnimateOverlayHP4}>
                                    <p>Drinks</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="popular">
                        <ul id="popular_title">
                            <li>popular Recipes</li>
                            <li><div></div></li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam dolor non leo viverra, quis rutrum odio vulputate. Sed pulvinar ac tellus id tincidunt.</li>
                        </ul>
                        <div id="popular1">
                            <div className="popularOverlay"></div>
                        </div>
                        <ul className="popular_descr">
                            <li>Which Lamb is the Best: American, Australian or New Zealand?</li>
                            <li>See how your users experience your website in realtime or view trends to see any changes in performance over time...</li>
                        </ul>
                        <div id="popular2">
                            <div className="popularOverlay"></div>
                        </div>
                        <ul className="popular_descr">
                            <li>The Caipirinha Is The Brazilian Cocktail You’ve Been Too Afraid To Pronounce</li>
                            <li>See how your users experience your website in realtime or view trends to see any changes in performance over time...</li>
                        </ul>
                        <div id="popular3">
                            <div className="popularOverlay"></div>
                        </div>
                        <ul className="popular_descr">
                            <li>The Plum Recipes That’ll Make You Fall In Love With This Stone Fruit</li>
                            <li>See how your users experience your website in realtime or view trends to see any changes in performance over time...</li>
                        </ul>
                    </div>
                    <div className="slogan">
                        <div id="overlaySlogan">
                            <p>Phasellus ullamcorper magna eu lectus blandit, id convallis arcu dictum.</p>
                            <button id="buttonSlogan" onMouseEnter={this.animateSloganButton} onMouseLeave={this.reverserAnimateSloganButton} onClick={this.scrollToReservation}>Book a Table</button>
                            <div id="vertiLineHP2"></div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>Testimonials</p>
                        <ul id="testiOne">
                            <li>"Suspendisse vitae aliquet leo, at cursus urna. Nam non viverra nisi, non feugiat eros. Donec ornare vehicula leo interdum efficitur."</li>
                            <li>- Rebecca Forest</li>
                        </ul>
                        <ul id="testiTwo">
                            <li>"Phasellus laoreet libero eu tellus imperdiet, vitae convallis est placerat. Aliquam erat volutpat. Ut dignissim elementum augue, non vulputate orci eleifend id. "</li>
                            <li>- Thomas Land</li>
                        </ul>
                        <ul id="testiThree">
                            <li>"Nunc ac imperdiet purus. Duis sollicitudin sollicitudin lectus, non tempor nunc aliquet id. Etiam id quam et erat eleifend tristique. Suspendisse potenti"</li>
                            <li>- John Smith</li>
                        </ul>
                    </div>
                    <div className="reservationHP">
                        <Reservation    />
                    </div>
                    <div className="galleryHP">
                        <Gallery    />
                    </div>
                    <div className="footerHP">
                        <Footer     />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Homepage;