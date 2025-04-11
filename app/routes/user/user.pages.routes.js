const express = require('express');
const router = express.Router();


const userpagesController = require('../../controller/user/user.pages.controller');

// User Pages Routes
router.get('/', userpagesController.index);








// Export the router
module.exports = router;