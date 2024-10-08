const express = require('express');
const { createUser,
        loginUser, 
        getAllUsers,
        logoutUser, 
        getCurrentProfile, 
        updateCurrentProfile} = require('../controllers/actions');

const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);
router.route('/profile').get(authenticate, getCurrentProfile).put(authenticate, updateCurrentProfile);

module.exports = {routes: router}