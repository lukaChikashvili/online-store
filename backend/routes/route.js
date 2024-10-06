const express = require('express');
const { createUser, loginUser, getAllUsers, logoutUser } = require('../controllers/actions');
const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);

module.exports = {routes: router}