const productsModel = require('../db/products/products-model')
const mongoose = require("mongoose");

// create
const createProduct = (newProduct) => {
    return productsModel.create(newProduct)
}

// find
const findAllProducts = () => {
    return productsModel.find()
}

const findProductById = (id) => {
    return productsModel.findById(id)
}

const findProductByName = (name) => {
    return productsModel.findOne({name})
}

const findProductByAnimalId = (animalId) => {
    return productsModel.findOne({'animal': animalId})
        .populate('supplier')
        .populate('category')
}

const findProductByCategoryId = (categoryId) => {
    return productsModel.findOne({'category': categoryId})
        .populate('animal')
        .populate('supplier')
}

const findProductBySupplierId = (supplierId) => {
    return productsModel.findOne({'supplier': supplierId})
        .populate('animal')
        .populate('category')
}

// update
const updateProduct = (id, productInfo) => {
    const id = new mongoose.Types.ObjectId(id)
    return productsModel.updateOne({_id: id}, {$set: productInfo})
}

// delete
const deleteProduct = (id) => {
    return productsModel.deleteOne({_id: id})
}

module.exports = {
    createProduct,
    findAllProducts,
    findProductById,
    findProductByName,
    findProductByAnimalId,
    findProductByCategoryId,
    findProductBySupplierId,
    updateProduct,
    deleteProduct
}