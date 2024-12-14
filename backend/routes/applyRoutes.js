const express = require('express');
const formidable = require('express-formidable');
const router = express.Router();
const { authenticate } = require('../middlewares/authHandler');
const { applyTo } = require('../controllers/applyActions');


router.route('/').post(authenticate, applyTo );





module.exports = {applyRoutes: router}