const express = require('express');
const formidable = require('express-formidable');
const router = express.Router();
const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const { checkId } = require('../middlewares/checkId');
const { createBlog } = require('../controllers/BlogActions');





router.route('/').post(authenticate, authorizeAdmin, formidable(), createBlog);









module.exports = {blogRoutes: router};