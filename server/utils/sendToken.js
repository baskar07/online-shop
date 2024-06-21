const sendToken = (user, statusCode, res) =>{
    const token = user.getJwtToken();
    const refreshToken = user.getRefreshToken();

    const options ={
        httpOnly:true,
        maxAge: process.env.COOKIE_EXPIRE * 60 * 1000
    }

    res.status(statusCode)
    .cookie('refreshToken',refreshToken,options )
    .json({
        success:true,
        user,
        token
    })
    
}
module.exports = sendToken;