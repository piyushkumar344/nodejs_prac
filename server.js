const express=require('express');
const hbs =require('hbs');
var app=express();
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
console.log(req.url);
next();
});
app.get('/nan',(req,res)=>{

res.send('<h1> hello world nan </h1>');

});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
     pagetitle: 'hi this is page',
     date: new Date()
    });
});
app.listen(3000, ()=>{
	console.log('hi this is server 3000');
});
console.log(23);