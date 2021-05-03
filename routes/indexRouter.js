const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index')


router.get('/', (req, res)=>{
    res.render('layout', {
        messsage: 'Hello world'
    })
})

router.get('/register',indexController.registerGet)

router.post('/register',indexController.registerPost)


module.exports = router