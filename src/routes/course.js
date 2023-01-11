const express = require('express');
const courseRouter = express.Router();

const CourseController = require('../app/controllers/Coursecontroller');
 
courseRouter.get('/:slug', CourseController.show );
courseRouter.get('/', CourseController.index);

module.exports = courseRouter;