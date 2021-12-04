const productsModel = require("../db/products/products-model")

const findProductsForSupplier = (supplier) => {
    return productsModel.find({supplier})
}

const createProduct = (product) => {
    return productsModel.create(product)
}

const findAllProducts = () =>
    productsModel.find()

const updateProduct = (productId, product) =>
    productsModel.updateOne({_id: productId},
                            {$set: {
                                name: product.name,
                                weight: product.weight,
                                inventory: product.inventory,
                                price: product.price}})

const deleteProduct = (productId) =>
    productsModel.deleteOne({_id: productId})

const findProductById = (productId) =>
    productsModel.findById(productId)

module.exports = {
    findAllProducts,
    findProductsForSupplier,
    updateProduct,
    deleteProduct,
    createProduct,
    findProductById
}