const express = require('express')
const router = express.Router()
const Mern = require('../models/merns')
//Basic router

// Get All
router.get('/', async (req, res) => {
    try {
        const merns = await Mern.find()
        res.json(merns)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

// Get by ID
router.get('/:id', getMern, (req, res) => {
    res.json(res.mern)
})

// Create
router.post('/', async (req, res) => {
    const mern = new Mern({
        name: req.body.name,
        activeState: req.body.activeState,
        
    })
    try {
        const newMern = await mern.save()
        res.status(201).json(newMern)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update
router.patch('/:id', getMern, async (req, res) => {
    if(req.body.name != null){
        res.mern.name = req.body.name
    }
    if (req.body.activeState != null) {
        res.mern.activeState = req.body.activeState
    }

    try{
        const updatedMern = await res.mern.save()
        res.json(updatedMern)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})

// Delete
router.delete('/:id', getMern, async (req, res) => {
    try {
        await res.mern.deleteOne()
        res.json({ message: 'Mern Deleted Successfully'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getMern(req, res, next) {
    let mern
    try{
        mern = await Mern.findById(req.params.id)
        if (mern == null) {
            return res.status(404).json({ message: 'Cannot find mern'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    
    res.mern = mern
    next()
}

module.exports = router