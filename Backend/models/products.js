const mongoose = require('mongoose')

const collection = new mongoose.Schema(

{
    name:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:String,required:true}, 
    details:{type:String},
    stock:{type:Number},
    likes:[],
    dislikes:[],
    comments:[]
},{timestamps:true}

)

module.exports = mongoose.model('Products',collection)
