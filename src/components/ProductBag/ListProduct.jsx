import React from 'react';
import { browserHistory } from 'react-router';
import ProductController from '../../controller/ProductController.js';
import ProductBagController from '../../controller/ProductBagController.js';

export class ListProduct extends React.Component{
    constructor(){
        super();
        
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addToCartHandler = this.addToCartHandler.bind(this);
    }
    
    addToCartHandler(index){
        let ProductToBeAdded = ProductController.getProduct(index);
        ProductBagController.addProductInBag(ProductToBeAdded);
        alert(ProductToBeAdded.product_name + " added in the cart.");   
        console.log('added in cart');
        browserHistory.push('/');
    }

    deleteHandler(index){
        ProductController.deleteProduct(index);
        this.forceUpdate();
    }

    render(){
      
        return(
            <div>
                <h2>List of Product</h2>
                
                <p>click <b>Add To Cart</b> button to add product in cart below.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Amount(in £)</th>
                            <th>Add to cart</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productListProp.map((Product, i) => 
                            <tr key = {i}>
                            <td>{Product.id}</td>
                            <td>{Product.product_name}</td>
                            <td>{Product.product_price}</td>
                            <td><button onClick={this.addToCartHandler.bind(this,i)}>Add To Cart</button></td>                             
                            <td><button onClick={this.deleteHandler.bind(this,i)}>Delete</button> 
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                
            </div>
        );
    }
}