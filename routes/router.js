//To define routes for client request, create routes folder and router.js file
     //    >> import express
       //  >> using express create a object for router class inorder to setup path
       //  >>resolving client requests

       //import express
       const express=require('express')
//import productController
       const productController= require('../controllers/productController')
       //impoet wishlist controller
       const wishlistController= require('../controllers/wishlistController')
       //import cart c
       const cartController=require('../controllers/cartController')
       
       //using express create an object for router class inorder to setup path
       const router=new express.Router()

       //Resolving client request
       //api- getallproduct request

       router.get('/products/all-products',productController.getallproducts)

       //api - get particular product
       router.get('/products/view-product/:id',productController.viewProduct)

       //api- product added to wishlist
       router.post('/wishlist/add-to-wishlist',wishlistController.addtowishlist)

       //api - get wish list product
       router.get('/wishlist/get-wishlist',wishlistController.getwishlistitems)


       //api-remove wishlist item
       router.delete('/wishlist/remove-wishlist-item/:id',wishlistController.removeWishlistitems)
      
      //api - add to cart
      router.post('/cart/add-to-cart',cartController.addtocart)

      //api get cart item
      router.get('/cart/get-item',cartController.getcart)
      //api- remove item from cart
      router.delete('/cart/remove-item/:id',cartController.removecartitems) 
      //api-increment cart item count
      router.get('/cart/increment-count/:id',cartController.incrementcount)
      //api- decrement
      router.get('/cart/decrement-count/:id',cartController.decrementcount)

      
      //export routers
       module.exports = router