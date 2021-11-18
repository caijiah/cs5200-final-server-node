const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({
    category: String
}, {collection: "categories"})

module.exports = categoriesSchema