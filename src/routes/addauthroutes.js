const express = require('express');
const addauthRouter = express.Router();
const title = "Addauthors";
const Authordata =require('../model/authorData'); 

function route9(nav){
    addauthRouter.get('/',function(req,res){
        res.render("addauthors",{
            nav,
            title
        })
    })
    addauthRouter.post('/upload',function(req,res){
       var item = {
           title:req.body.title,
           author:req.body.author,
           genre:req.body.genre,
           image:req.body.image
       }
       var book = Authordata(item);
       book.save();
       res.redirect('/authors');
    })
   
    
    return addauthRouter;
}

module.exports=route9;