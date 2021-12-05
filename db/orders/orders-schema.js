const mongoose = require('mongoose')
const productsSchema = require('../products/products-schema')

const ordersSchema = mongoose.Schema({
    products: [{product: productsSchema, quantity: Number}],
    created: {type: Date, default: Date.now},
    totalPrice: Number,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }
}, {collection: 'orders'})

module.exports = ordersSchema