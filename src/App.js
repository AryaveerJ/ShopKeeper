import React from 'react';
import './App.css';
import NavBar from './Comonents/navbar';
import Categories from './Comonents/categories';
import AboutUs from './Comonents/aboutus';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends React.Component{

  LandingPage(){
    return (
      <div>
        <NavBar/>
        <Categories/>
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
              <Route path="/sample" component={this.Sample}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
