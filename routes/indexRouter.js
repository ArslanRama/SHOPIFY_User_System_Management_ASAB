const express = require('express');
const router=express.Router();

router.get('/', (req, res)=>{
    res.render('layout', {
        messsage: 'Hello world'
    })
})

module.exports = router