const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true }) 

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    signupas:String,
    Username:String,
    DOB:String,
    Gender:String,
    Email:String,
    Mobileno:String,
    Address:String,
    Password:String,
    ConfirmPassword:String
})

var Signupdata = mongoose.model('sigupdata',SignupSchema);
module.exports=Signupdata;