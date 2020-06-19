import React from 'react';
import './categories.css';
import { Link } from 'react-router-dom';



class  Categories extends React.Component{

    render(){
        return (
            <div className="list-wraper">
            <div className="list">
                <table>
                    <tbody>
                    <tr>
                        <td><Link to={{pathname:"/tooth-pastes",state:{value:"Paste"} }} className="link-style">Tooth Pastes</Link></td>
                        <td width="50px"/>
                        <td><Link to={{pathname:"/tooth-brush",state:{value:"Brush"} }}  className="link-style">Tooth Brush</Link></td>
                        <td width="50px"/>
                        <td><Link to={{pathname:"/mouth-freshner",state:{value:"Freshner"}}}  className="link-style">Mouth Freshner</Link></td>
                    </tr>
                    <tr>
                        <td>Soaps</td>
                        <td width="50px"/>
                        <td>Shampos</td>
                        <td width="50px"/>
                        <td>Cleaning</td>
                    </tr>
                    <tr>
                        <td>Product 1</td>
                        <td width="50px"/>
                        <td>Product 2</td>
                        <td width="50px"/>
                        <td>Product 3</td>
                        
                    </tr>
                    <tr>
                        <td>Product 4</td>
                        <td width="50px"/>
                        <td>Product 5</td>
                        <td width="50px"/>
                        <td>Product 6</td>
                    </tr>
                    <tr>
                        <td>Product 7</td>
                        <td width="50px"/>
                        <td>Product 7</td>
                        <td width="50px"/>
                        <td>Product 9</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Categories;