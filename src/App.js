import React from 'react';
import './App.css';
import NavBar from './Comonents/navbar';
import Categories from './Comonents/categories';
import AboutUs from './Comonents/aboutus';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetails from './Comonents/itemdetails';



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
              <Route path="/itemdetails" component={ItemDetails}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
