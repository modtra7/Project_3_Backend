const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    date: String,
    text: String,
    image: String,
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post