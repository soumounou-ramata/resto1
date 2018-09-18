import React, {Component} from 'react';
import {Link} from "react-router-dom";
import anime from 'animejs';
import './Navbar.css';

let animateNavBar = () =>{
    anime({
        targets: document.querySelector("#navigationBar"),
        duration: 250,
        easing: 'linear',
        backgroundColor: "#ffffff",
        borderBottomColor: "#021218"
    })
    anime({
        targets: document.querySelector(".titleNB p"),
        duration: 250,
        easing: 'linear',
        color: "#000000",
    })
    anime({
        targets: document.querySelectorAll(".bars"),
        duration: 250,
        easing: 'linear',
        backgroundColor: "#000000",
    })
}


let showMenuList = () =>{
    anime({
        targets: document.querySelector(".overlayNB"),
        translateX: '100%',
        duration: 350,
        easing: 'linear',
        complete: function(){
            document.addEventListener("scroll", function(){
                let scrollPosition = window.scrollY;
                anime({
                    targets: document.querySelector(".overlayNB"),
                    top: scrollPosition,
                    duration: 0,
                    easing: 'linear'
                })
            })
        }

    })
}

class Navbar extends Component{

    constructor(){
        super();
        this.showMenuList = this.showMenuList.bind(this);
        this.hideMenuList = this.hideMenuList.bind(this);
        this.animateNavBar = this.animateNavBar.bind(this);
    }

    
    showMenuList(){
        anime({
            targets: document.querySelector(".overlayNB"),
            translateX: '100%',
            duration: 450,
            easing: 'linear',
            complete: function(){
                document.addEventListener("scroll", function(){
                    let scrollPosition = window.scrollY;
                    anime({
                        targets: document.querySelector(".overlayNB"),
                        top: scrollPosition,
                        duration: 0,
                        easing: 'linear'
                    })
                })
            }

        })
    }

    hideMenuList(){
        anime({
            targets: document.querySelector(".overlayNB"),
            translateX: '-100%',
            duration: 450,
            easing: 'linear'
        })
    }

    animateNavBar(){
        anime({
            targets: document.querySelector("#navigationBar"),
            duration: 250,
            easing: 'linear',
            backgroundColor: "#ffffff",
        })
        anime({
            targets: document.querySelector(".titleNB p"),
            duration: 250,
            easing: 'linear',
            color: "#000000",
        })
        anime({
            targets: document.querySelectorAll(".bars"),
            duration: 250,
            easing: 'linear',
            backgroundColor: "#000000",
        })
    }

    componentDidMount(){
        document.addEventListener("scroll", function(){
            if(window.scrollY > 25){
                animateNavBar();
            }
            document.getElementById("openNB").addEventListener("click", function(){
                showMenuList();
            })
        })
    }


    render(){
        return (
            <div>
                <div className="menuNB">
                    <div className="overlayNB">
                        <p id="nameNB">Tosca Grille</p>
                        <button id="closeNB" onClick={this.hideMenuList}>X</button>
                        <ul>
                            <li><Link to="/" id="homeNB">Home</Link></li>
                            <li><Link to="/aboutUs" id="aboutNB" onClick={window.scrollTo(0, 0)}>About Us</Link></li>
                            <li><Link to="/breakfast" id="breakfastNB" onClick={window.scrollTo(0, 0)}>Breakfast</Link></li>
                            <li><Link to="/mainDishes" id="mainNB" onClick={window.scrollTo(0, 0)}>Main</Link></li>
                            <li><Link to="/desserts" id="dessertsNB" onClick={window.scrollTo(0, 0)}>Desserts</Link></li>
                            <li><Link to="/drinks" id="drinksNB" onClick={window.scrollTo(0, 0)}>Drinks</Link></li>
                        </ul>    
                    </div>
                </div>
                <div id="navigationBar">
                    <div className="titleNB">
                        <p>Tosca Grille</p>
                    </div>
                    <button id="openNB" onClick={this.showMenuList}>
                        <div className="bars"></div>
                        <div className="bars"></div>
                        <div className="bars"></div>
                    </button>
                </div>
            </div>
        );
    }
}


export default Navbar;

