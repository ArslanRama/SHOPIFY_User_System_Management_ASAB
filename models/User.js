const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
// create a Schema 
const userSchema = new Schema({
    name: {
        type: String,
        required : [true, 'Name is required ..!!'],
        minLength: [2, 'Name must be at least 2 characters'],
        maxLength:[66 , 'Name must be less than 66 chars']
    },
    email: {
        type: String,
        required : [true, 'Email is required ..!!'],
        unique :true
    },
    password: {
        type: String,
        required : [true, 'password is required ..!!'],
        minLength: 7
    },
    country: String,
    address: String,
    salary: Number,
})


const User = mongoose.model('User', userSchema) 
module.exports = User;