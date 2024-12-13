const { isValidObjectId } = require('mongoose');


function checkId(req, res, next) {
    if(!isValidObjectId(req.params.id)) {
        res.status(404);
        throw new Error(`Invalud object of: ${req.params.id}`);
    }

    next();

}


module.exports = {checkId};