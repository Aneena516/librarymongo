const express = require('express');

const title = 'Authors';
const authorRouter = express.Router();
const Authordata = require('../model/authorData');
function route1(nav){
  /*  var authors = [
        {
            title:'The God Of Small Things',
            author:'Arudhati Roy',
            genre:'Novel',
            img:'arundha.jpg'
        },
        {
            title:'Manjaveyil Marannagal',
            author:'Benny Benyamin',
            genre:'Novel',
            img:'benyamin.jpg'
        },
        {
            title:'Anubavagal Paalichakal',
            author:'Thakazhi',
            genre:'Novel',
            img:'thakazhi.jpg'
        }
    ]*/
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title,
            authors
            });
        })
       
    });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
          res.render("author",
          {
              nav,
              title,
              author
          });
        })
         
      });
     authorRouter.get('/:id',function(req,res){
        Authordata.findByIdAndUpdate()
        .then(function(authors){
            res.render("authors",{
                nav,
                title,
                authors
            });
        })
       
    });
    authorRouter.get('/:id',function(req,res){
        Authordata.findByIdAndDelete()
        .then(function(authors){
            res.render("authors",{
                nav,
                title,
                authors
            });
        })
       
    });
    
    return authorRouter;
}
module.exports = route1;