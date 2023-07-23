const User = require('../models/user_model')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// sign in user 
const signInUser = async (req, res) => {
    const {email,password} = req.body
    try{
        const user = await User.signin(email,password)
        // create a token 
        const token = createToken(user._id)

        res.status(200).json({message:'SIGNED IN SUCCESSFULLY',email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// sign up user
const signUpUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.signup(email,password)
        // create a token 
        const token = createToken(user._id)

        res.status(200).json({message:'SIGNED UP SUCCESSFULLY',email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // res.json({mssg: 'sign up user'})
}

module.exports = { signInUser,signUpUser }