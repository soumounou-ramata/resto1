import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <p id="nameFO">Tosca Grille</p> 
                <div id="address_info">
                    <p className="segment">Address</p>
                    <ul>
                        <li>4321 rue LaNourriture</li>
                        <li>Montreal  H6H 6X6, Canada</li>
                        </ul>
                    </div>
                    
                    <div id="vertiLine1"></div>
                
                    <div id="contactus_info">
                        <p className="segment">Contact Us</p>
                        <ul>
                            <li>toscagrille@resto.ca</li>
                            <li>514-977-7997</li>
                        </ul>
                    </div>
                    
                    <div id="vertiLine2"></div>
        
                    <div id="hours_info">
                        <p className="segment">Opening Hours</p>
                        <ul>
                            <li>Sun-Sat</li>
                            <li>11:00am-11:30pm</li>
                        </ul>
                    </div>
 
            </div>
        )
    }
}

export default Footer;