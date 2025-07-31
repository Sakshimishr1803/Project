const express=require('express');
const path=require('path');
const { title, features } = require('process');

const app=express();
const PORT=process.env.PORT || 3000;
app.set('view engine','ejs');
app.set('view',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) =>
{
    res.render('index',{
        title:'Welcome to our platform',
        tagline:'Build Amazing things with us',
        features:{
            'Fast and Reliable',
            'Beautiful Designs',
            'Save and Secure',
            'Responsive Layout',
        }
    })
})