const ordersModel = require("../db/orders/orders-model")

const findOrderByCustomerId = (customerId) => {
    return ordersModel.find({"customer" : customerId})
        .populate("products.product.animal")
        .populate('products.product.category')
        .populate('products.product.supplier', 'companyName')
}

const createOrder = (newOrder) => {
    return ordersModel.create(newOrder)
}

module.exports = {
    findOrderByCustomerId,
    createOrder
}