
const app=require("express")();
const express = require('express');
 var genroutes=require("./routes/genroutes");
 app.use('/assets',express.static('assets')); 
app.set('view engine','ejs');

app.use('/',genroutes);




app.listen(3000,()=>{
    console.log('Server Is running on port 3000');
});
