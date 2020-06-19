import React from 'react';
import './App.css';
import NavBar from './Comonents/navbar';
import Categories from './Comonents/categories';
import AboutUs from './Comonents/aboutus';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetails from './Comonents/itemdetails';
import Profile from './Comonents/profile';
import YourOrders from './Comonents/yourorders';
import YourCart from './Comonents/yourcart';
import Login from './Comonents/login';



class App extends React.Component{

  LandingPage(){
    return (
      <div>
        <NavBar/>
        <hr/>
        <Categories/>
        <hr/>
        <AboutUs/>
      </div>
    );
  }
  render(){
    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={this.LandingPage}/>
              <Route   exact path="/profile" component={Profile}/>
              <Route   exact path="/your-orders" component={YourOrders}/>
              <Route   exact path="/your-cart" component={YourCart}/>
              <Route   exact path="/login" component={Login}/>
              <Route   exact path="/:category" component={ItemDetails}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
