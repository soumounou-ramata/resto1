import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './Reservation.css';
import anime from 'animejs';

let animateErrorFirstname = () =>{
    anime({
        targets: document.querySelector("#firstname"),
        duration: 10,
        easing: 'linear',
        borderColor: "#ff0000",
        color: "#ff0000"
    })
    document.getElementById("firstname").value = "Please provide a first name";
}


let animateInvalidFirstname = () =>{
    anime({
        targets: document.querySelector("#firstname"),
        duration: 10,
        easing: 'linear',
        borderColor: "#ff0000",
        color: "#ff0000"
    })
    document.getElementById("firstname").value = "First name invalid. Try again";
}

let reverseErrorFirstname = () =>{
    anime({
        targets: document.querySelector("#firstname"),
        duration: 10,
        easing: 'linear',
        borderColor: "#dddddd",
        color: "#021218"
    })
    document.getElementById("firstname").value = "";
}

let animateErrorLastname = () =>{
    anime({
        targets: document.querySelector("#lastname"),
        duration: 10,
        easing: 'linear',
        borderColor: "#ff0000",
        color: "#ff0000"
    })
    document.getElementById("lastname").value = "Please provide a last name";
}


let animateInvalidLastname = () =>{
    anime({
        targets: document.querySelector("#lastname"),
        duration: 10,
        easing: 'linear',
        borderColor: "#ff0000",
        color: "#ff0000"
    })
    document.getElementById("lastname").value = "Last name invalid. Try again";
}

let reverseErrorLastname = () =>{
    anime({
        targets: document.querySelector("#lastname"),
        duration: 10,
        easing: 'linear',
        borderColor: "#dddddd",
        color: "#021218"
    })
    document.getElementById("lastname").value = "";
}

let animateInvalidEmail = () =>{
    anime({
        targets: document.querySelector("#email"),
        duration: 10,
        easing: 'linear',
        borderColor: "#ff0000",
        color: "#ff0000"
    })
    document.getElementById("email").value = "Email invalid. Try again";
}


let reverseErrorEmail = () =>{
    anime({
        targets: document.querySelector("#email"),
        duration: 10,
        easing: 'linear',
        borderColor: "#dddddd",
        color: "#021218"
    })
    document.getElementById("email").value = "";
}

let openConfirmation = () =>{
    anime({
        targets: document.querySelector("#confirmation"),
        duration: 10,
        translateX: '160%',
        easing: 'linear'
    })
}

let openCannotReserve = () =>{
    anime({
        targets: document.querySelector("#cannotConfirm"),
        duration: 10,
        translateX: '160%',
        easing: 'linear'
    })
}

let closeConfirmation = () =>{
    anime({
        targets: document.querySelector("#confirmation"),
        duration: 100,
        translateX: '-120%',
        easing: 'linear'
    })
    window.location.reload();
}

let closeCannotReserve = () =>{
    anime({
        targets: document.querySelector("#cannotConfirm"),
        duration: 100,
        translateX: '-120%',
        easing: 'linear'
    })
    window.location.reload();
}

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            date: moment(),
            time: '11:00AM',
            guests: '1',
            phone: '',
            email: '',
            message: ''
        };
        this.handleFirstname = this.handleFirstname.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleGuests = this.handleGuests.bind(this);
    }

    handleFirstname(event){
        event.preventDefault();
        this.setState({firstName: event.target.value});

    }

    handleLastname(event){
        event.preventDefault();
        this.setState({lastName: event.target.value});
    }

    handlePhone(event){
        event.preventDefault();
        this.setState({phone: event.target.value});
    }

    handleEmail(event){
        event.preventDefault();
        this.setState({email: event.target.value});
    }

    handleMessage(event){
        event.preventDefault();
        this.setState({message: event.target.value});
    }

    handleDate(date, event){
        event.preventDefault();
        this.setState({date: date});
    }

    handleTime(event){
        event.preventDefault();
        this.setState({time: event.target.value});
    }

    handleGuests(event){
        event.preventDefault();
        this.setState({guests: event.target.value});
    }

    
    handleSubmit(event){
        event.preventDefault();
        if(!this.cannotBookTable()){
            return;
        }

        fetch('/', {
            method: 'POST',
            body: (JSON.stringify({
                firstName: this.state.firstName.toUpperCase(),
                lastName: this.state.lastName.toUpperCase(),
                phone: this.state.phone,
                date: this.state.date,
                time: this.state.time,
                email: this.state.email,
                message: this.state.message,
                guests: this.state.guests
            }))
        })
            .then(x => x.text())
            .then(res => {
                let body = JSON.parse(res);
                console.log(body);
                
                if(body.message === "reservation could not be completed as it already exists"){
                    console.log(body.message);
                    openCannotReserve();
                }
                else if (body.message === "reservation successful"){
                    openConfirmation();
                }
            })
    }


    cannotBookTable(){
        let isFormValid = true;

        /*Verify if fields firstname, lastname, phone and/or email, date, time, and guests have been filled*/ 
        if(this.state.firstName.length === 0){
            animateErrorFirstname();
            isFormValid = false;
            document.getElementById("firstname").addEventListener("focus", function(){
                reverseErrorFirstname();
            })
        }

        if(this.state.lastName.length === 0){
            animateErrorLastname();
            isFormValid = false;
            document.getElementById("lastname").addEventListener("focus", function(){
                reverseErrorLastname();
            })
        }

        if(this.state.email.length === 0){
            animateInvalidEmail();
            isFormValid = false;
            document.getElementById("email").addEventListener("focus", function(){
                reverseErrorEmail();
            })
        }

        if(this.state.email.length > 0){
            /*Verify if email is valid*/
            if(this.state.email.indexOf("@") === -1){
                isFormValid = false;
                animateInvalidEmail();
                document.getElementById("email").addEventListener("focus", function(){
                    reverseErrorEmail();
                })
            }

        }


        /*Verify if names are valid*/
        if(this.state.firstName.length === 1){
            isFormValid = false;
            animateInvalidFirstname();
            document.getElementById("firstname").addEventListener("focus", function(){
                reverseErrorFirstname();
            })
        } 

        if(this.state.lastName.length === 1){
            isFormValid = false;
            animateInvalidLastname();
            document.getElementById("lastname").addEventListener("focus", function(){
                reverseErrorLastname();
            })
        } 

        
        return isFormValid;
    }

    render(){
        return(
            <div>
                <div id="reservation">
                    <p>Reservation</p>
                    <div id="horiLineRE"></div>
                    <input type="text" onChange={this.handleFirstname} id="firstname" placeholder="First name"  />
                    <input type="text" onChange={this.handleLastname} id="lastname" placeholder="Last name" />
                    <input type="text" onChange={this.handlePhone} id="phone" placeholder="Phone"  />
                    <input type="text" onChange={this.handleEmail} id="email" placeholder="Email"   />
                    <input type="text" onChange={this.handleMessage} id="message" placeholder="Message (optional)" />
                    <select name="guests" id="guests" onChange={this.handleGuests}>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7">7 People</option>
                        <option value="8">8 People</option>
                        <option value="9">9 People</option>
                        <option value="10">10 People</option>
                    </select>
                    <div id="date">
                        <DatePicker selected={this.state.date} onChange={this.handleDate} minDate={moment()} maxDate={moment().add(30, "days")} dateFormat="LL"/>
                    </div>
                    <select name="time" onChange={this.handleTime} id="time">
                        <option value="11:00AM">11:00 AM</option>
                        <option value="11:30AM">11:30 AM</option>
                        <option value="12:00AM">12:00 PM</option>
                        <option value="12:30AM">12:30 PM</option>
                        <option value="1:00PM">1:00 PM</option>
                        <option value="1:30PM">1:30 PM</option>
                        <option value="2:00PM">2:00 PM</option>
                        <option value="2:30PM">2:30 PM</option>
                        <option value="3:00PM">3:00 PM</option>
                        <option value="3:30PM">3:30 PM</option>
                        <option value="4:00PM">4:00 PM</option>
                        <option value="4:30PM">4:30 PM</option>
                        <option value="5:00PM">5:00 PM</option>
                        <option value="5:30PM">5:30 PM</option>
                        <option value="6:00PM">6:00 PM</option>
                        <option value="6:30PM">6:30 PM</option>
                        <option value="7:00PM">7:00 PM</option>
                        <option value="7:30PM">7:30 PM</option>
                        <option value="8:00PM">8:00 PM</option>
                        <option value="8:30PM">8:30 PM</option>
                        <option value="9:00PM">9:00 PM</option>
                        <option value="9:30PM">9:30 PM</option>
                        <option value="10:00PM">10:00 PM</option>
                        <option value="10:30PM">10:30 PM</option>
                    </select>
                    <input type="submit" onClick={this.handleSubmit} id="submitReservation" value="Book a Table"   />
                </div>
                <div id="confirmation">
                    <div className="photoConfir">
                        <div></div>
                    </div>
                    <div id="contentConfir">
                        <p>Confirmation</p>
                        <p>Your reservation was successfully made! If you want to make any changes, please call us.</p>
                        <button id="closeConfir" onClick={closeConfirmation}>X</button>
                        <ul>
                            <li>Name: {this.state.firstName.toUpperCase() + " " + this.state.lastName.toUpperCase()}</li>
                            <li>Date: {this.state.date.toLocaleString().substr(0, 16)}</li>
                            <li>Time: {this.state.time.toString()}</li>
                        </ul>
                    </div>
                </div>
                <div id="cannotConfirm">
                    <div className="photoConfir">
                        <div></div>
                    </div>
                    <div id="contentCannotConfirm">
                        <p>Your reservation could not be made as you already have one the same date, at the same time. Please try again.</p>
                        <button id="closeCannotConfirm" onClick={closeCannotReserve}>X</button>
                    </div>
                </div>
           
            </div>
        )
    }

}   

export default Reservation;