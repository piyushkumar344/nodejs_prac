const express=require('express');
const hbs =require('hbs');
const port=process.env.PORT || 3000;  // for heroku  process.env.PORT is defined as it can set any port (environment variables)
                                 // if heroku doestmot specify port then default is 3000;

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
app.listen(port, ()=>{
	console.log('hi this is server ' + port );
});
console.log(23);