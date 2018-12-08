var CreateStudentdao = require('../dao/CreateStudentdao');

module.exports.createstudent = (student, callback) => {

    CreateStudentdao.createstudent(student, function (err, res) {
        if (err) callback(err);
        else callback(res);
    });
}