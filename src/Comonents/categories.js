import React from 'react';
import './categories.css';



class  Categories extends React.Component{

    render(){
        return (
            <div className="list-wraper">
            <div className="list">
                <table>
                    <tr>
                        <td>Tooth Pastes</td>
                        <td width="50px"/>
                        <td>Tooth Brush</td>
                        <td width="50px"/>
                        <td>Mouth Freshner</td>
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
                </table>
            </div>
            </div>
        )
    }
}

export default Categories;