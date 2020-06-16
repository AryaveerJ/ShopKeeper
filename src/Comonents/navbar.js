import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{


    render(){
        return(
            <div className="nav-bar-wraper">
                <div className="nav-bar">
                    <table>
                        <tbody>
                            <tr>   
                                <td><Link to="/"  className="link-style">Home</Link></td>
                                <td width="150%"/>
                                <td><Link to="/"  className="link-style">Login</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NavBar;