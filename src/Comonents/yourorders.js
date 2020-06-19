import React from 'react';
import NavBar from './navbar';
import './profile.css';

class YourOrders extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <hr/>
                <div className="profile">
                    <h1>Your Orders</h1>
                </div>
            </div>
        );
    }
}

export default YourOrders;