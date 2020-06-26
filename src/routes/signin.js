const express = require('express');


const signinRouter = express.Router();


function route3(nav){
    signinRouter.get('/',function(req,res){
        res.render("signin",{
            nav
        
        })
    })
 
    return signinRouter;
}
module.exports = route3;