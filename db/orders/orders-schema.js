const mongoose = require('mongoose')
const productsSchema = require('../products/products-schema')

const ordersSchema = mongoose.Schema({
    products: [{product: productsSchema, quality: Number}],
    finishDate: Date,
    totalPrice: Number,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection: 'orders'})

module.exports = ordersSchema