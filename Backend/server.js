const http = require('http')
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config()
app.set(process.env.PORT )
const server = http.createServer(app)

server.listen(process.env.PORT,()=>{
    console.log('application start')
})