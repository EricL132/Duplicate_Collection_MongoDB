const mongoose = require('mongoose')
const dotenv = require('dotenv')
const FirstSchema = require('./models/FirstSchema')
const NewSchema = require('./models/NewSchema')
dotenv.config()

const dup = () =>{
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.once('open', () => {
        console.log('MongoDB connected')
    })
    mongoose.connection.on('error', (err) => {
        console.log(err)
    })
    FirstSchema.find((err,items)=>{
        NewSchema.insertMany(items)
    })
}



dup()