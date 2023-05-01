const mongoose = require('mongoose');
require('dotenv').config()
const mongoDB = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('Connect mongoDb'))
.catch(()=>console.log('failed connect to mongoDb'))

module.exports = mongoose