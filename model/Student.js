var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var autoIncrement = require('mongoose-auto-increment');

var Student = new Schema({
    id:{type:Number},
   userId:{type:Number},
   Firstname:{type:String},
   Lastname:{type:String},

},{
    versionKey:false
});
autoIncrement.initialize(mongoose);
Student.plugin(uniqueValidator);
Student.plugin(autoIncrement.plugin,{model:'Student' , startAt:1});
var Student = mongoose.model('Student', Student, 'Students');

module.exports = Student;  