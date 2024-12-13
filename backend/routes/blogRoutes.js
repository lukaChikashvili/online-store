const express = require('express');
const formidable = require('express-formidable');
const router = express.Router();
const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const { checkId } = require('../middlewares/checkId');
const { createBlog, updateBlog } = require('../controllers/BlogActions');





router.route('/').post(authenticate, authorizeAdmin, formidable(), createBlog);
router.route('/:id').put(authenticate, authorizeAdmin, formidable(), updateBlog);









module.exports = {blogRoutes: router};