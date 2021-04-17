const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller')

router.post('/', (req, res) => {
    userController.addUser(req, res);
}).get('/', (req, res) => {
    userController.getUsers(req, res);
}).get('/:userId', (req, res) => {
    userController.getUserById(req, res);
})

module.exports = router;

