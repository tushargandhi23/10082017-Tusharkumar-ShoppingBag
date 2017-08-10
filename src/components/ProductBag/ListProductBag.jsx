import React from 'react';
import { Link }  from 'react-router';
import { browserHistory } from 'react-router';
import ProductBagController from '../../controller/ProductBagController.js';

export class ListProductBag extends React.Component{
    constructor(){
        super();
       
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    deleteHandler(index){
        ProductBagController.deleteProduct(index);
        this.forceUpdate();
    }

    render(){
       
        return(
            <div>
                <h2>List of Product in CART</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Amount(in £)</th>                            
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productListInBagProp.map((Product, i) => 
                            <tr key = {i}>
                            <td>{Product.id}</td>
                            <td>{Product.product_name}</td>
                            <td>{Product.product_price}</td>                            
                            <td><button onClick={this.deleteHandler.bind(this,i)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                
            </div>
        );
    }
}