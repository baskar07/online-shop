const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const cloudinary = require('cloudinary');
const ErrorHandler = require("../utils/errorHandler");
const slugify = require("slugify");
const Product = require('../models/productModel');

exports.createProduct = asyncErrorHandler( async ( req, res, next ) =>{
    console.log(req.body);
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });

});