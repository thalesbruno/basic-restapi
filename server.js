/* Imports */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


/* Starting the app */
const app = express()
// permision to send data in json format to application
app.use(express.json())
app.use(cors())


/* DB connection */
mongoose.connect('mongodb://localhost:27017/db-myapp', { useNewUrlParser: true })
require('./src/models/Product')


/* Routes */
// Defining base route and referencing the others
app.use('/api/v1', require('./src/routes'))


app.listen(3001)