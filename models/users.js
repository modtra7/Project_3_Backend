const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    age: Number,
    gender: String,
    bio: String,
    posts: [{
        text: String,
        image: String,
        link: String
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User