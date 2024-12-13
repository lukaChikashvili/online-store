const { asyncHandler }  = require('../middlewares/asyncHandler');

const createBlog = asyncHandler(async(req, res) => {
    res.send('hello');
});


module.exports = {
    createBlog
}