const User =require('../models/User')
const bcrypt = require('bcrypt')

exports.registerGet = (req, res)=>{
    res.render('signup')
}

exports.registerPost = async(req , res)=>{
    const { name , email, password ,address, country, salary} = req.body
    let userData  = await User.findOne({email});
    if(userData){
       return res.status(400).json({ msg :"user already exist "})
    }
    const user = new User({
        name, email , password ,address, country, salary
    })
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password , salt )
    // res.json(req.body)
    user.save()
    res.send(user)
   
 }