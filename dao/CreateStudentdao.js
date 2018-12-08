var StudentModel = require('../model/Student');

module.exports.createstudent = (student, callback) => {
    var Student = new StudentModel(student);     

    Student.save(function (err, res) {
        if (err) callback(err);
        else callback(res);
    });
}