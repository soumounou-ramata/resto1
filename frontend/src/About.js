import React, {Component} from 'react';
import anime from  'animejs';
import './About.css';
import Footer from './Footer';
import Navbar from './Navbar';
import messageowner from './images/messageowner.png';
import interior1 from './images/restoinside1.png';
import interior2 from './images/restoinside2.png';
import about1 from './images/about1.png';
import about2 from './images/about2.png';
import about3 from './images/about3.png';
import about4 from './images/about4.png';
import about5 from './images/about5.png';
import about6 from './images/about6.png';
import about7 from './images/about7.png';
import about8 from './images/about8.png';
import about9 from './images/about9.png';

class About extends Component{
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

    render(){
        return(
            <div>
                <div id="aboutpage">
                    <Navbar />
                    <div className="heading">
                        <div className="headingOverlay">
                            <p>- About Us-</p>
                        </div>
                        <div className="aboutSection">
                            <img src={interior1} id="interior1" alt="" />
                            <ul>
                                <li>SINCE 1995</li>
                                <li>Maecenas at nibh sit amet nisi aliquet varius. Nunc varius sapien id aliquam mollis. Sed id urna justo. In porttitor vitae mauris in pretium. Proin mattis vehicula dapibus. Fusce fermentum nec justo posuere faucibus. Curabitur ut sodales velit. Vestibulum et volutpat velit, ut vulputate nibh. Nulla pharetra tortor et massa mattis, vitae malesuada ipsum eleifend. Donec et sodales lacus.</li>
                            </ul>
                            <img src={interior2} id="interior2" alt="" />
                            <ul>
                                <li>OUR VISION</li>
                                <li>Morbi nec lacus vitae metus tempor consectetur ac in ipsum. In vitae lacus at elit condimentum imperdiet venenatis sagittis eros. Maecenas sapien orci, egestas at volutpat eu, vulputate ac arcu. Quisque feugiat tellus in justo consequat consectetur. Praesent non urna sed erat placerat commodo. Aliquam a vehicula nisi. Phasellus vehicula nulla odio, vitae sagittis urna malesuada sed.</li>
                            </ul>
                            <img src={messageowner} id="messagebackgr" alt="" />
                            <div className="message">
                                <ul id="ownermessage">
                                    <li>"Donec auctor ante quis eros ornare, eget lacinia nibh condimentum. Sed efficitur tellus eget tortor sollicitudin, et porta dolor efficitur. In et pulvinar sapien. "</li>
                                    <li> - Bobby Joe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="gallery">
                            <div className="gallery1">
                                <img src={about1} alt=""   />
                                <div id="galleryOverlay1" onMouseEnter={this.animateOverlay1} onMouseLeave={this.reverseAnimateOverlay1}></div>
                            </div>
                            <div className="gallery2">
                                <img src={about2} alt=""   />
                                <div id="galleryOverlay2" onMouseEnter={this.animateOverlay2} onMouseLeave={this.reverseAnimateOverlay2}></div>
                            </div>
                            <div className="gallery3">
                                <img src={about3} alt=""   />
                                <div id="galleryOverlay3" onMouseEnter={this.animateOverlay3} onMouseLeave={this.reverseAnimateOverlay3}></div>
                            </div>
                            <div className="gallery4">
                                <img src={about4} alt=""   />
                                <div id="galleryOverlay4" onMouseEnter={this.animateOverlay4} onMouseLeave={this.reverseAnimateOverlay4}></div>
                            </div>
                            <div className="gallery5">
                                <img src={about5} alt=""  />
                                <div id="galleryOverlay5" onMouseEnter={this.animateOverlay5} onMouseLeave={this.reverseAnimateOverlay5}></div>
                            </div>
                            <div className="gallery6">
                                <img src={about6} alt=""   />
                                <div id="galleryOverlay6" onMouseEnter={this.animateOverlay6} onMouseLeave={this.reverseAnimateOverlay6}></div>
                            </div>
                            <div className="gallery7">
                                <img src={about7} alt=""   />
                                <div id="galleryOverlay7" onMouseEnter={this.animateOverlay7} onMouseLeave={this.reverseAnimateOverlay7}></div>
                            </div>
                            <div className="gallery8">
                                <img src={about8} alt=""   />
                                <div id="galleryOverlay8" onMouseEnter={this.animateOverlay8} onMouseLeave={this.reverseAnimateOverlay8}></div>
                            </div>
                            <div className="gallery9">
                                <img src={about9} alt=""   />
                                <div id="galleryOverlay9" onMouseEnter={this.animateOverlay9} onMouseLeave={this.reverseAnimateOverlay9}></div>
                            </div>
                        </div>
                        <div className="footerAU">
                            <Footer />
                        </div>
                </div>
                </div>
                </div>
        );
    }
}

export default About;