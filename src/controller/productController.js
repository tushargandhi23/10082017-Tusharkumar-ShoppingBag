'use strict';

import productRepository from '../repository/productRepository.js';

let products = productRepository.products;

exports.getAllProducts = function(){
    return products;
}

exports.getProduct = function(index){
    let product = products[index];
    return product;
}

exports.deleteProduct = function(index){  
      products.splice(index, 1);         
}
