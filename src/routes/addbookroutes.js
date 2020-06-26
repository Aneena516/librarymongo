const express = require('express');
const addRouter = express.Router();
const title = "AddBooks";
const Bookdata =require('../model/bookData'); 

function route4(nav){
    addRouter.get('/',function(req,res){
        res.render("addbooks",{
            nav,
            title
        })
    })
    addRouter.post('/add',function(req,res){
       var item = {
           title:req.body.title,
           author:req.body.author,
           genre:req.body.genre,
           image:req.body.image
       }
       var book = Bookdata(item);
       book.save();
       res.redirect('/books');
    })
   
    
    return addRouter;
}

module.exports=route4;