const express = require('express');
const app = express();
const PORT= 8080;


const indexRouter = require('./routes/indexRouter')



app.set('view engine', 'hbs');


//! Routings
app.use('/', indexRouter);

//! Listen app with the port
app.listen(PORT, ()=>{
    console.log(`Server is runnin at http://localhost:${PORT}`);
})