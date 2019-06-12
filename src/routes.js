/* Imports */
const express = require('express')
const ProductController = require('./controllers/ProductController')

const routes = express.Router()

routes.get('/products', ProductController.index)
routes.post('/product', ProductController.store)

module.exports = routes