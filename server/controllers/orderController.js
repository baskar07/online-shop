const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");


//create new order
exports.newOrder = asyncErrorHandler(async(req,res,next)=>{

    const { shippingInfo, orderItems, paymentInfo, totalPrice } = req.body;

    const orderExist = await Order.findOne({paymentInfo});
    if (orderExist) {
        return next(new ErrorHandler("Order Already Placed", 400));
    }

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        totalPrice,
        paidAt: Date.now(),
        user: req.user.id,
    })

    res.status(200).json({
        success:true,
        order,
    })
});

//get single order details
exports.getSingleOrderDetails = asyncErrorHandler(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate("user", "name email");
    if(!order){
        return next(new ErrorHandler("Order Not Found", 404));
    }
    res.status(200).json({
        success:true,
        order
    })
})

// Get Logged In User Orders
exports.myOrders = asyncErrorHandler(async (req, res, next) => {
    const orders = await Order.find({user: req.user.id});
    if(!orders){
        return next(new ErrorHandler("Order Not Found", 404));
    }
    res.status(200).json({
        success: true,
        orders
    })
});


// Admin Only Access
//Get All Orders --- ADMIN
exports.getAllOrders = asyncErrorHandler(async(req,res,next)=>{

    const orders = await Order.find();
    if (!orders) {
        return next(new ErrorHandler("Order Not Found", 404));
    }
    let totalAmount = 0;
    orders.forEach((order)=>{
        totalAmount += order.totalPrice;
    })
    res.status(200).json({
        success:true,
        orders,
        totalAmount
    })
})