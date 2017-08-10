'use strict';

import productBagRepository from '../repository/productBagRepository.js';

let productsInBag = productBagRepository.productsInBag;

exports.getAllProductsInBag = function(){
    return productsInBag;
}

exports.addProductInBag = function(Product) {
    Product.id = productsInBag.length + 1;
    productsInBag.push(Product);
    
}

exports.deleteProduct = function(index){  
      productsInBag.splice(index, 1);         
}
