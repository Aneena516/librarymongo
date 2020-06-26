const express = require('express');
const updateRouter = express.Router();
const title = "Update Books";
const Bookdata =require('../model/bookData'); 

function route5(nav){
    updateRouter.get('/:id',function(req,res){
        const id = req.params.id
       Bookdata.findById({_id:id})
       .then(function(book){
        res.render("updatebooks",{
            nav,
            title,
           book
        })
       })
  
    })
    
    updateRouter.post('/:id',function(req,res){
        const id = req.params.id
        var item = {
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }
        Bookdata.findByIdAndUpdate({_id:id},item,function(req,res){
            
        });
        res.redirect('/books')
    })
    return updateRouter;
}

module.exports=route5;