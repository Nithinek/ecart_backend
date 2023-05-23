//import wishlist collection
const wishlists=require('../models/wishlistSchema')

// add to wishlist logic

exports.addtowishlist = async (req,res)=>{
    //get product details from request


    //using destructure
    const {id,title,price,image}=req.body
    //logic
    try{
        //check if the product in the mongodb
        const item= await wishlists.findOne({id})
        if(item){
            res.status(403).json("item already exists in wishlist")
        }
        else{
            //add item into the wishlist
            const newProduct=new wishlists({id,title,price,image})
            //to store into mongodb
          await newProduct.save()
          res.status(200).json("product added to wish list")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
//get wish list data
exports.getwishlistitems=async(req,res)=>{
    //logic
try{
//get all wishlist items from the mongodb
const allwishlistitems = await wishlists.find()
res.status(200).json(allwishlistitems)
}
catch(error){
    res.status(401).json(error)
}
}

//remove wishlist item
exports.removeWishlistitems= async(req,res)=>{
    ///get id from the requst
    const {id}=req.params
    try{
        const removewishlistitem = await wishlists.deleteOne({id})
        if(removewishlistitem){
            //get all wishlists item after removing particular wishlist item
            const allWishlists = await wishlists.find()//remaing wishlist items
            res.status(200).json(allWishlists)
        }
        else{
            res.status(404).json("item not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}