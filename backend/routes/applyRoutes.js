const express = require('express');
const formidable = require('express-formidable');
const router = express.Router();
const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const { applyTo, allBooks, deleteBook } = require('../controllers/applyActions');


router.route('/').post(authenticate, applyTo );

router.route('/aplications').get(authenticate, authorizeAdmin, allBooks);
router.route('/aplications/:id').delete(authenticate, authorizeAdmin, deleteBook);




module.exports = {applyRoutes: router}