import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie=(userId,res)=>{
    const token= jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d',
    });

    res.cookie("jwt", token,{
        maxAge: 15 * 24 * 60 * 60 * 1000 , //15 days * 24 hour * 60 minute * 60 second * 1000 miliSecond and this is called milliSecond formate
        httpOnly:true, //users are not able to access cookie with help of javascript or // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict",  // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV!=="development",
    });
};

export default generateTokenAndSetCookie;