const mongoose = require('mongoose')
const productsSchema = require('./products-schema')

const productsModel = mongoose.model("ProductsModel", productsSchema)

module.exports = productsModel