import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './PageNotFound.css';


class PageNotFound extends Component{
    render(){
        return(
            <div>
                <div className="pnfpage">
                    <div className="pnfpageOverlay">
                        <p>Page Not Found</p>
                        <p>It seems that you are lost...</p>
                    </div>
                </div>
                <div className="redirection">
                    <ul>
                        <li><Link to="/" id="homePNF">Home</Link></li>
                        <li><Link to="/aboutUs" id="aboutPNF">About Us</Link></li>
                        <li><Link to="/breakfast" id="breakfastPNF">Breakfast</Link></li>
                        <li id="namePNF">Tosca Grille</li>
                        <li><Link to="/mainDishes" id="mainPNF">Main Dishes</Link></li>
                        <li><Link to="/desserts" id="dessertsPNF">Desserts</Link></li>
                        <li><Link to="/drinks" id="drinksPNF">Drinks</Link></li>
                    </ul>
                    </div>
            </div>
        );
    }
}

export default PageNotFound;