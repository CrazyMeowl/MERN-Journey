const mongoose = require('mongoose')

const mernSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model('Mern', mernSchema)