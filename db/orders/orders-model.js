const mongoose = require('mongoose')
const ordersSchema = require('../orders/orders-schema')

const ordersModel = mongoose.model("OrdersModel", ordersSchema)

module.exports = ordersModel