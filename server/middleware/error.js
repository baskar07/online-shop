const ErrorHandler = require('../utils/errorHandler');

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if(process.env.NODE_ENV === 'development'){
        res.status(err.statusCode)
        .json({
            success:false,
            message:err.message,
            stack:err.stack,
            error:err
        });
    }

    if(process.env.NODE_ENV === 'production'){
        
        let  message = err.message;
        let error = new ErrorHandler(message);

        // mongoose duplicate key error
        if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new ErrorHandler(message, 400);
        }

        res.status(err.statusCode)
        .json({
            success:false,
            message:err.message    
        })
    }



}