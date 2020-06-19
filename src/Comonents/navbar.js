import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{
    render(){
        return(
            <div className="nav-bar">
                <table>
                    <tbody>
                        <tr>   
                            <td><Link to="/"  className="link-style">Home</Link></td>
                            <td width="1150vh"/>
                            <td><Link to="/profile" className="link-style">Profile</Link></td> 
                            <td width="25vh"/> 
                            <td><Link to="/your-orders" className="link-style">Your Orders</Link></td>
                            <td width="25vh"/> 
                            <td><Link to="/your-cart" className="link-style">Your Cart</Link></td>
                            <td width="25vh"/> 
                            <td><Link to="/login"  className="link-style">Login</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NavBar;