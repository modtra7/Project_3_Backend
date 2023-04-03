const mongoose = require('mongoose')
const Post = require('./posts.js')

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    age: Number,
    gender: String,
    bio: String,
    posts: [Post.schema]
})

const User = mongoose.model('User', userSchema)

module.exports = User