const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name: String,
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AnimalsModel'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoriesModel'
    },
    weight: Number,
    inventory: Number,
    price: Number,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now}
},{collection: 'products'})

module.exports = productsSchema