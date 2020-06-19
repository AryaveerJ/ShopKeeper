import React from 'react';
import NavBar from './navbar';
import './profile.css';

class YourCart extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <hr/>
                <div className="profile">
                    <h1>Your Cart</h1>
                </div>
            </div>
        );
    }
}

export default YourCart;