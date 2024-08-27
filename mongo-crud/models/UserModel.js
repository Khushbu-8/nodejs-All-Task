// const { name } = require('ejs')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        require: true
    },
    hoby:{
        type:Array,
        require: true
    },
    city:{
        type:String,
        require: true
    },
    image:{
        type:String,
        required:true
    }
})
const user = mongoose.model('user',userSchema);
module.exports = user;