const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/db-myapp',{ useNewUrlParser: true })
require('./src/models/Product')

app.use('/api/v1', require('./src/routes'))

app.listen(3001)