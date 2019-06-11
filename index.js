const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/db-myapp',{ useNewUrlParser: true })
require('./src/models/Product')

const Product = mongoose.model('Product')

app.get('/', (req, res) => {
  Product.create({ 
    title: 'Some product',
    description: 'Product with great value',
    url: 'https://product.com'
   })
  return res.send('Virtual Store')
}) 

app.listen(30000)