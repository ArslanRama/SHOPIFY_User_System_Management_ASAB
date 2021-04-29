const express = require('express');
const app = express();


const indexRouter = require('./routes/indexRouter')



app.set('view engine', 'hbs');


//! Routings
app.use('/', indexRouter);

//! Listen app with the port
app.listen(8080, ()=>{
    console.log('listening at localhost:')
})