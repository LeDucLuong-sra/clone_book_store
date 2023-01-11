const express = require('express');
const meRouter = express.Router();

const MeController = require('../app/controllers/MeController');
 
meRouter.get('/stored/books', MeController.storedBooks);

module.exports = meRouter;