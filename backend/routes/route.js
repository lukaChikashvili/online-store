const express = require('express');
const { createUser } = require('../controllers/actions');
const router = express.Router();

router.route("/users").post(createUser);


module.exports = {routes: router}