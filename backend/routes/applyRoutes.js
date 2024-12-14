const express = require('express');
const formidable = require('express-formidable');
const router = express.Router();
const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const { applyTo, allBooks } = require('../controllers/applyActions');


router.route('/').post(authenticate, applyTo );

router.route('/aplications').get(authenticate, authorizeAdmin, allBooks);




module.exports = {applyRoutes: router}