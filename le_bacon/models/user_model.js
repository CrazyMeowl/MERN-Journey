const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

// statsic sign up method
userSchema.statics.signup = async function (email, password) {
    // validation
    if (!email || !password){
        throw Error('All required fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')        
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }
    const emailExists = await this.findOne({ email })

    if (emailExists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: password_hash})

    return user
}

// static signin method
userSchema.statics.signin = async function(email, password) {
    if (!email || !password){
        throw Error('All required fields must be filled')
    }
    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect Password')
    }
    return user
}

module.exports = mongoose.model('User', userSchema)