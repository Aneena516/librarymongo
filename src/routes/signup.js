const express = require('express');

const bookRouter = require('../routes/bookroutes');
const signupRouter = express.Router();
const Signupdata = require('../model/signupdata');

function route2(nav){
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav
        
        })
    })
    signupRouter.post('/add',function(req,res){
       var item={
           signupas:req.body.signupas,
        Username:req.body.Username,
        DOB:req.body.DOB,
        Gender:req.body.Gender,
        Email:req.body.Email,
        Mobileno:req.body.Mobileno,
        Address:req.body.Address,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword
       }
        var signup = Signupdata(item);
        signup.save();
        res.redirect('/signin');
     })
   
  
    
    return signupRouter;
}
module.exports = route2;