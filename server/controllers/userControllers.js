const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
const jwt = require('jsonwebtoken');

exports.signup = asyncErrorHandler(async (req,res,next)=>{
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return next(new ErrorHandler("Email Already Exists",400));
        }
        user = new User({name, email, password});
        await user.save();

    } catch (error) {
        console.log(error);
    }
});


exports.login = asyncErrorHandler(async(req,res,next)=>{
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorHandler("Please Enter Email And Password", 400));
    }
    let user = await User.findOne({ email}).select("+password");

    if(!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatch = await user.comparePassword(password);
    if(!isPasswordMatch) {
        return next(new ErrorHandler("Wrong Password", 401));
    }

    const refreshToken = await user.getRefreshToken();
    user = await User.findByIdAndUpdate(user.id, {
        refreshToken : refreshToken,
    },
    { new : true }
    );
    sendToken(user, 201, res);
});

exports.handleRefreshToken = asyncErrorHandler(async (req,res,next) =>{
    const cookie = req.cookies;
    if(!cookie?.refreshToken){
        return next(new ErrorHandler("No Refresh Token in Cookies",404));
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        return next(new ErrorHandler("No Refresh Token  present in db or not matched",404));
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET,(err,decoded)=>{
        if(err || user.id !== decoded.id){
            return next(new ErrorHandler("There is something wrong with refresh token",400));
        }
        const accessToken = user.getJwtToken(decoded);
        res.status(200).json({
            success:true,
            accessToken,
        })
    })

});



exports.getUserDetails = asyncErrorHandler(async(req,res,next)=>{

    const user = await User.findById(req.user.id);
   res.status(200).json({
    success:true,
    user
   });
})