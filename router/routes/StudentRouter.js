var express = require('express');
var apiRouter = express.Router();
var StudentController = require('../../controller/CreateStudentController');

apiRouter.post('/createstudent',StudentController.createstudent);
apiRouter.get('/getstudent/:id');
apiRouter.put('/updatestudent');
apiRouter.delete('/deletstudent');

module.exports = apiRouter;