const productsService = require('../services/products-service')

module.exports = (app) => {
    const findProductsForSupplier = (req, res) => {
        const supplier = req.body.supplierId
        productsService.findProductsForSupplier(supplier)
            .then((products) => {
                res.json(products)
            })
    }

    const createProduct = (req, res) => {
        const product = req.body.product
        console.log(product)
        productsService.createProduct(product)
            .then((actualProduct) => {
                productsService.findProductById(actualProduct._id)
                    .then(actualProduct => {
                        res.json(actualProduct)
                    })
            })
    }

    const findAllProducts = (req, res) => {
        productsService.findAllProducts()
            .then(products => res.json(products))
    }

    const updateProduct = (req, res) => {
        const receive = req.body
        const productId = receive.productId
        const product = receive.product
        console.log(receive)
        productsService.updateProduct(productId, product)
            .then(status => {
                res.send(status)
            })
    }

    const deleteProduct = (req, res) => {
        const productId = req.body.productId
        console.log(req.body)
        productsService.deleteProduct(productId)
            .then(status=> res.send(status))
    }

    app.post('/api/products/forSupplier', findProductsForSupplier)
    app.post('/api/products/createProduct', createProduct)
    app.get('/api/products', findAllProducts)
    app.put('/api/products/updateProduct', updateProduct)
    app.delete('/api/products', deleteProduct)
}