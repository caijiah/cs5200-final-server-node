const ordersDAO = require('../daos/orders-dao')
const productsDAO = require('../daos/products-dao')
const userDAO = require('../daos/users-dao')

const findOrderByCustomerId = (customerId) =>
    ordersDAO.findOrderByCustomerId(customerId)

const finishCurrentOrder = (customerId) => {
    let enoughQuantityCheck = true
    return userDAO.findCustomerShoppingCart(customerId)
        .then(shoppingCart => {
            let shoppingProductsParis = shoppingCart.shoppingCart.items
            shoppingProductsParis.forEach((pair) => {
                // console.log(pair)
                enoughQuantityCheck &= (pair.product.inventory - pair.quantity >= 0)
            })

            if (enoughQuantityCheck) {
                shoppingProductsParis.forEach((pair) => {
                    // console.log(pair)
                    let product = pair.product
                    product.inventory -= pair.quantity
                    // reduce the product quantity
                    productsDAO.updateProduct(product._id, product)
                        .then(()=> {
                            let newIncome = product.price * pair.quantity
                            userDAO.updateSupplierRevenue(product.supplier._id, newIncome).exec()
                        })
                })
                let newOrder = {
                    products: shoppingCart.shoppingCart.items,
                    totalPrice: shoppingCart.shoppingCart.totalPrice,
                    created: new Date(),
                    customer: customerId
                }
                // console.log(newOrder)
                return ordersDAO.createOrder(newOrder)
                    .then(() => userDAO.cleanShoppingCart(customerId))
            } else {
                throw "Not enough quantity!"
            }
        })
}

module.exports = {
    findOrderByCustomerId,
    finishCurrentOrder
}