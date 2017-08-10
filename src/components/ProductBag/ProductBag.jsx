import React from 'react';
import ProductController from '../../controller/ProductController.js';
import ProductBagController from '../../controller/ProductBagController.js';
import { ListProductBag }  from './ListProductBag.jsx';
import { ListProduct }  from './ListProduct.jsx';


export class ProductBag extends React.Component{
    constructor(){
        super();
        this.state = {
            products : ProductController.getAllProducts(),
            productsInBag : ProductBagController.getAllProductsInBag()
        };
    }

    render(){
        return(
            <div>
               <ListProduct productListProp={this.state.products} /> 
               <ListProductBag productListInBagProp = {this.state.productsInBag} /> 
            </div>
        )
    }

}