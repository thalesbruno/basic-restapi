const mongoose = require('mongoose')
const Product = mongoose.model('Product')


module.exports = {

  // listing all products
  async index(req, res) {
    const { page = 1 } = req.query
    const products = await Product.paginate({}, { page, limit: 10 })
    return res.json(products)
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  },

  // creating a product
  async store(req, res) {
    const product = await Product.create(req.body)
    return res.json(product)
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(product)
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id)
    return res.send()
  }

  /* SEE THIS NOTE:
  (node:8419) DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` 
  without the `useFindAndModify` option set to false are deprecated. 
  See: https://mongoosejs.com/docs/deprecations.html#-findandmodify- */

}