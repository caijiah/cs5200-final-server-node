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

    const findAllBrands = (req, res) => {
        productsService.findAllBrands()
            .then(brands => {
                res.send(brands)
            })
    }

    const findProductsByCategoryId= (req, res) => {
        const categoryId = req.params.byCategory
        productsService.findProductsByCategoryId(categoryId)
            .then(products => {
                res.send(products)
            })
    }

    const findProductsByAnimalType = (req, res) => {
        const animalType = req.params.byAnimal
        productsService.findProductsByAnimalType(animalType)
            .then(products => {
                res.send(products)
            })
    }

    app.post('/api/products/forSupplier', findProductsForSupplier)
    app.post('/api/products/createProduct', createProduct)
    app.get('/api/products', findAllProducts)
    app.put('/api/products/updateProduct', updateProduct)
    app.delete('/api/products', deleteProduct)
    app.get('/api/products/brands', findAllBrands)
    app.get('/api/products/category/:byCategory', findProductsByCategoryId)
    app.get('/api/products/animal/:byAnimal', findProductsByAnimalType)
}