const express = require('express');
const { createUser, loginUser } = require('../controllers/actions');
const router = express.Router();

router.route("/").post(createUser);
router.post('/auth', loginUser);

module.exports = {routes: router}