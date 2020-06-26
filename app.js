const express = require('express');
const app =  express();
const title ='LibraryApp';
const nav = [
    
    {link:'/',name:'HOME'},
    {link:'/signup',name:'SIGNUP'},
    {link:'/signin',name:'SIGNIN'},
    {link:'/books',name:'BOOK DETAILS'},
    {link:'/authors',name:'AUTHOR DETAILS'},
    {link:'/admin',name:'ADD BOOKS'},
    {link:'/add',name:'ADD AUTHORS'}
];
const booksRouter = require('./src/routes/bookroutes')(nav);
const authorRouter = require('./src/routes/authorroutes')(nav);
const signupRouter = require('./src/routes/signup')(nav)
const signinRouter = require('./src/routes/signin')(nav);
const addRouter = require('./src/routes/addbookroutes')(nav);
const updateRouter = require('./src/routes/updaterouter')(nav)
const deleteRouter = require('./src/routes/deleteRouter')(nav)
const updateauthorRouter = require('./src/routes/updateauthorroutes')(nav);
const addauthRouter = require('./src/routes/addauthroutes')(nav)
const deleteauthRouter = require('./src/routes/deleteauthRouter')(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/admin',addRouter);
app.use('/update',updateRouter);
app.use('/delete',deleteRouter);
app.use('/edit',updateauthorRouter);
app.use('/add',addauthRouter);
app.use('/remove',deleteauthRouter);

app.get('/',function(req,res){

    res.render("index",{
        nav,
        title
    })
});


app.listen(3000);