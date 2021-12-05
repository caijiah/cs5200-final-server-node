const productsDAO = require('../daos/products-dao')

const findProductsForSupplier = (supplier) =>
    productsDAO.findProductsForSupplier(supplier)
        .populate('animal')
        .populate('category')
        .populate('supplier')

const createProduct = (product) =>
    productsDAO.createProduct(product)

const findAllProducts = () =>
    productsDAO.findAllProducts()
        .populate('supplier', 'companyName')
        .populate('animal')
        .populate('category')

const updateProduct = (productId, product) =>
    productsDAO.updateProduct(productId, product)

const deleteProduct = (productId) =>
    productsDAO.deleteProduct(productId)

const findProductById = (productId) =>
    productsDAO.findProductById(productId)
        .populate('supplier')
        .populate('animal')
        .populate('category').exec()


const findAllBrands = () =>
    productsDAO.findAllBrands()

const findProductsByAnimalType = (animalType) =>
    productsDAO.findProductsByAnimalType(animalType)
        .populate('supplier', 'companyName')
        .populate('animal')
        .populate('category')

const findProductsByCategoryId = (categoryId) =>
    productsDAO.findProductsByCategoryId(categoryId)
        .populate('supplier', 'companyName')
        .populate('animal')
        .populate('category')

module.exports = {
    findProductsForSupplier,
    createProduct,
    findAllProducts,
    updateProduct,
    deleteProduct,
    findProductById,
    findAllBrands,
    findProductsByAnimalType,
    findProductsByCategoryId
}