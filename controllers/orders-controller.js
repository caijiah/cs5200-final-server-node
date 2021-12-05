const ordersService = require('../services/orders-service')

module.exports = (app) => {
    const finishCurrentOrder = (req, res) => {
        const customerId = req.body.customerId
        ordersService.finishCurrentOrder(customerId)
            .then(status => {
                res.send(status)
            })
            .catch(error => {
                res.sendStatus(403)
            })
    }

    const findOrdersByCustomerId = (req, res) => {
        const customerId = req.body.customerId
        ordersService.findOrderByCustomerId(customerId)
            .then(orders => {
                console.log(orders)
                res.send(orders)
            })
    }

    app.post('/api/orders/finishOrder', finishCurrentOrder)
    app.post('/api/orders/', findOrdersByCustomerId)
}