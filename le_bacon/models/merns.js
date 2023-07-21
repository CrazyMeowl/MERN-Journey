const mongoose = require('mongoose')

const mernsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    activeState:{
        type: String,
        require: true
    },
    createDate:{
        type: Date,
        require: true,
        default: Date.now
    }

})

module.exports = mongoose.model('Merns', mernsSchema)