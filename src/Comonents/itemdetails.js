import React from 'react';
import './itemdetails.css';
import NavBar from './navbar';
import logo from './logo.svg';



class Item extends React.Component{
    render(){
        return (
            <div className="item">
                <div className="item-wraper">
                    <div>
                        <img  src={logo} alt="Product"/>
                    </div>
                </div>
                <div className="item-wraper">
                    <div>
                        <h3> Rs.500</h3>
                    </div>
                </div>
                <div className="item-wraper"> 
                    <div>
                        <p>{`Min 10 items`}</p>
                    </div>
                </div>
                <div className="item-wraper">
                    <div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}


class ItemDetails extends React.Component{

    render(){
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div className="item-details-wraper">
                    <div className="item-details">
                        <table>
                            <tbody>
                            <tr>
                                <td><Item/></td>
                                <td width="50px"/>
                                <td><Item/></td>
                                <td width="50px"/>
                                <td><Item/></td>
                                <td width="50px"/>
                                <td><Item/></td> 
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

} 

export default ItemDetails;