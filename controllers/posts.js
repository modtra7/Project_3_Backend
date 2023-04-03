const express = require('express')
const router = express.Router()

const User = require('../models/users.js')
const Post = require('../models/posts.js')

router.post('/', (req, res) => {
    User.findById(req.body.userId).then((foundUser) => {
        Post.create(req.body).then((createdPost) => {
            res.json(createdPost)
        })
    })
})

router.get('/', (req, res) => {
    User.findById(req.body.userId).then((foundUser) => {
        console.log(req.body.id);
        Post.find({}).then((foundPosts) => {
            res.json(foundPosts)
        })
    })
})

// router.get('/', (req, res) => {
//     Post.find({}).then((foundPost) => {
//         res.json(foundPost)
//     })
// })

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).then((foundPost) => {
        User.find({ 'posts._id': req.params.id }).then((foundUser) => {
            res.json(foundUser, foundPost)
        })
    })
})

router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id).then((foundPost) => {
        User.findOne({'posts._id':req.params.id}).then((foundUser) => {
            foundUser.posts.id(req.params.id).deletedOne()
            foundUser.save().then((data) => {
                res.json(data)
            })
        })
    })
})

router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost) => {
        User.findOne({'posts._id' : req.params.id}, (err, foundUser) => {
            foundUser.posts.id(req.params.id).deleteOne()
            foundUser.posts.push(updatedPost)
            foundUser.save((err, data) => {
                res.json(data)
            })
        })
    })
})

module.exports = router