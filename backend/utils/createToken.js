const jwt  = require('jsonwebtoken');

const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }  
    );

    const refreshToken = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }  
    );

    return { accessToken, refreshToken };
};


module.exports = {generateTokens}