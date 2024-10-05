const User = require('../models/userModel');
const { asyncHandler } = require('../middlewares/asyncHandler');


const createUser = asyncHandler(async(req, res) => {
   res.json({message: "hello world"})
})


module.exports = {
    createUser
}