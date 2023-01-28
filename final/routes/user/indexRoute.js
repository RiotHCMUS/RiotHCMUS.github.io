const express = require('express');
const route = express.Router();
const controller = require('../../controllers/user/indexController.js');

route.get('/', (req, res) => {
    controller.showHome(req, res);
});

module.exports = route;