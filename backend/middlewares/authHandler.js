const { User } = require('../models/userModel') 
const { asyncHandler } = require('../middlewares/asyncHandler');
const jwt  = require('jsonwebtoken');

const authenticate = asyncHandler(async(req, res, next) => {
    let token;

    token = req.cookie.jwt;

    if(token) {
        try {
               
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select("-password");
            next();

        } catch (error) {
            res.status(401);
            throw new Error('not authorised, token failed')
        }
    }else {
        res.status(401);
        throw new Error('not authorised, no token')
    }
});


// check for admin

const authorizeAdmin = (req, res, next) => {
   if(req.user && req.user.isAdmin) {
    next();
   }else {
    res.status(401).send('not authorized as admin');

}
}

module.exports = {
    authenticate, 
    authorizeAdmin
}