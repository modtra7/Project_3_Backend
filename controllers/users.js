const express = require('express')
const router = express.Router()

const User = require('../models/users.js')
const Post = require('../models/posts.js')

router.post('/', (req, res) => {
    User.create(req.body).then((createdUser) => {
        res.json(createdUser)
    })
})

router.get('/', (req, res) => {
    User.find({}).then((foundUser) => {
        res.json(foundUser)
    })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then((deletedUser) => {
        res.json(deletedUser)
    })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((updatedUser) => {
        res.json(updatedUser)
    })
})

module.exports = router