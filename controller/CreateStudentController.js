var CreateStudentService = require('../service/CreateStudentService');

module.exports.createstudent = (req, res) => {
    var student = req.body;

    CreateStudentService.createstudent(student,function(err,response){
        if(err) res.status(500).send(err);
        else res.status(201).send(response);
    });
}