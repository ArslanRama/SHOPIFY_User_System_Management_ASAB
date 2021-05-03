const express = require('express');
const app = express();
const PORT= 8080;

// MongoDB connection using mongoose module
const DB_LINK = 'mongodb+srv://admin:admin@cluster0.fcrdg.mongodb.net/firstDB'
const mongoose = require('mongoose')
mongoose.connect(DB_LINK, {
    useUnifiedTopology : true,
    useNewUrlParser: true
})
.then(()=> console.log('MongoDB is succesfully connected '))
.catch(()=> console.log('Database connection failed '))


app.use(express.json()) 


const indexRouter = require('./routes/indexRouter')


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false }))

//! Routings
app.use('/', indexRouter);


//! Listen app with the port
app.listen(PORT, ()=>{
    console.log(`Server is runnin at http://localhost:${PORT}`);
})