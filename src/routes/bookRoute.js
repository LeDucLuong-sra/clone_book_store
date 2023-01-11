const express = require('express');
const bookRouter = express.Router();

const BookController = require('../app/controllers/BookController');
 
bookRouter.get('/create',BookController.create);
bookRouter.post('/store',BookController.store);
bookRouter.get('/:id/edit',BookController.edit);
bookRouter.put('/:id',BookController.update);
bookRouter.delete('/:id',BookController.delete);
bookRouter.get('/:slug', BookController.show );
bookRouter.get('/', BookController.index);

module.exports = bookRouter;