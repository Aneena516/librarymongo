const express = require('express');

const title = 'Books';
const booksRouter = express.Router();
const Bookdata = require('../model/bookData');
function route(nav){
   /* var books = [
        {
            title:'The God Of Small Things',
            author:'Arudhati Roy',
            genre:'Novel',
            img:'god.jpg'
        },
        {
            title:'Manjaveyil Marannagal',
            author:'Benny Benyamin',
            genre:'Novel',
            img:'man.jpg'
        },
        {
            title:'Anubavagal Paalichakal',
            author:'Thakazhi',
            genre:'Novel',
            img:'anu.jpg'
        }
    ]*/
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title,
                books
            });
        })
       
    });
    booksRouter.get('/:id',function(req,res){
      const id = req.params.id
      Bookdata.findOne({_id:id})
      .then(function(book){
        res.render("book",
        {
            nav,
            title,
            book
        });
      })
       
    });
    booksRouter.get('/:id',function(req,res){
        Bookdata.findByIdAndUpdate()
        .then(function(books){
            res.render("books",{
                nav,
                title,
                books
            });
        })
       
    });
    booksRouter.get('/:id',function(req,res){
        Bookdata.findByIdAndDelete()
        .then(function(books){
            res.render("books",{
                nav,
                title,
                books
            });
        })
       
    });
    return booksRouter;
}
module.exports = route;