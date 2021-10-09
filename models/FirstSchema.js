const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    link:{
        type: String,
    },
    repo:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    tools:{
        type:String
    }
})

module.exports = mongoose.model('Project',projectSchema)