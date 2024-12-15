const jwt  = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        { 
            userId: user._id, 
            isAdmin: user.isAdmin  
        },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }  
    );
};


module.exports = {generateToken}