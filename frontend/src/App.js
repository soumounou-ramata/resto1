import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import About from './About';
import Breakfast from './Breakfast';
import Desserts from './Desserts';
import Drinks from './Drinks';
import Homepage from './Homepage';
import MainDishes from './MainDishes';
import PageNotFound from './PageNotFound';

class App extends Component {
  constructor(){
    super();
    this.returnAboutUs = this.returnAboutUs.bind(this);
    this.returnBreakfast = this.returnBreakfast.bind(this);
    this.returnDesserts = this.returnDesserts.bind(this);
    this.returnDrinks = this.returnDrinks.bind(this);
    this.returnMainDishes = this.returnMainDishes.bind(this);
    this.returnHomepage = this.returnHomepage.bind(this);
    this.returnPageNotFound = this.returnPageNotFound.bind(this);
  }

  returnAboutUs(){
    return(<About />);
  }

  returnBreakfast(){
    return(<Breakfast />);
  }

  returnDesserts(){
    return(<Desserts  />);
  }

  returnDrinks(){
    return(<Drinks  />);
  }

  returnMainDishes(){
    return(<MainDishes />);
  }

  returnHomepage(){
    return(<Homepage  />);
  }

  returnPageNotFound(){
    return(<PageNotFound  />);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Redirect exact={true} from="/pageNotFound" to="/"></Redirect>
            <Route exact={true} path="/" render={this.returnHomepage}></Route>
            <Route exact={true} path="/breakfast" component={this.returnBreakfast}></Route>
            <Route exact={true} path="/mainDishes" render={this.returnMainDishes}></Route>
            <Route exact={true} path="/desserts" render={this.returnDesserts}></Route>
            <Route exact={true} path="/drinks" render={this.returnDrinks}></Route>
            <Route exact={true} path="/aboutUs" render={this.returnAboutUs}></Route>
            <Route render={this.returnPageNotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
