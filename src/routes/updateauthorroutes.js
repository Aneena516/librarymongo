const express = require('express');
const updateauthorRouter = express.Router();
const title = "Update authors";
const Authordata =require('../model/authorData'); 

function route8(nav){
    updateauthorRouter.get('/:id',function(req,res){
        const id = req.params.id
       Authordata.findById({_id:id})
       .then(function(author){
        res.render("updateauthors",{
            nav,
            title,
          author
        })
       })
  
    })
    
    updateauthorRouter.post('/:id',function(req,res){
        const id = req.params.id
        var item = {
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }
        Authordata.findByIdAndUpdate({_id:id},item,function(req,res){
            
        });
        res.redirect('/authors')
    })
    return updateauthorRouter;
}

module.exports=route8;