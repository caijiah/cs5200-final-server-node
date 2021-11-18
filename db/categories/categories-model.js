const mongoose = require('mongoose')
const categoriesSchema = require('./categories-schema')

const categoriesModel = mongoose.model("CategoriesModel", categoriesSchema)

module.exports = categoriesModel