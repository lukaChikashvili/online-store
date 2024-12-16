const express = require('express');
const { createUser,
        loginUser, 
        getAllUsers,
        logoutUser, 
        getCurrentProfile, 
        updateCurrentProfile,
        deleteUser,
        getUserById,
        updateUser,
        refreshAccessToken} = require('../controllers/actions');

const { authenticate, authorizeAdmin } = require('../middlewares/authHandler');
const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);
router.route('/profile').get(authenticate, getCurrentProfile).put(authenticate, updateCurrentProfile);

// admin routes
router.route('/:id').delete(authenticate, authorizeAdmin, deleteUser).
                     get(authenticate, authorizeAdmin, getUserById).
                     put(authenticate, authorizeAdmin, updateUser);



module.exports = {routes: router}