const Product = require("../models/productModel");

//Create Product - Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//Gell All Product
exports.getAllProducts = async (req, res) => {
   const productsList = await Product.find();
  res.status(200).json({ 
    success:true,
    productsList
  });
};

//Update Product - Admin

exports.updateProduct = async (req, res, next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }
    updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success:true,
        updatedProduct
    })
}

//Delete Product - Admin
exports.deleteProduct = async (req, res, next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully."
    })
}


