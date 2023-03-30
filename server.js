const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const usersController = require('./controllers/users.js')
app.use('/users', usersController)

const postsController = require('./controllers/posts.js')
app.use('/posts', postsController)

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
app.listen(PORT, () => console.log('Listening on:', PORT))