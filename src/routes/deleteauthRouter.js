const express = require('express');
const deleteauthRouter = express.Router();


const Authordata = require('../model/authorData');

function route10(){
    deleteauthRouter.get('/:id',function(req,res){
        const id =req.params.id
        Authordata.findByIdAndDelete({_id:id},function(req,res){
           
        })
        res.redirect('/authors');
    })
    return deleteauthRouter;
}
module.exports=route10;