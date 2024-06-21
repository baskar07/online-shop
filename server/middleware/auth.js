const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandler = require("./asyncErrorHandler");
const User = require('../models/userModel');


exports.isAuthenticated = asyncErrorHandler(async (req,res,next) => {
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
        try {
             const decoded = jwt.verify(token,process.env.JWT_SECRET);
             req.user = await User.findById(decoded.id);
             next();
        } catch (error) {
            return next(new ErrorHandler("token expired. Please login again", 401));
        }
    }else{
        return next(new ErrorHandler("Please login again", 401));
    }

})

