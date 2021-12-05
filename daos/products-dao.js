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

const findAllBrands = () =>
    productsModel.aggregate([
                                {
                                    $group: {
                                        _id: '$supplier'
                                    }
                                },
                                {
                                    '$lookup': {
                                        'from': 'users',
                                        'localField': '_id',
                                        'foreignField': '_id',
                                        'as': 'supplier'
                                    }
                                },
                                {'$unwind': '$supplier'},
                                { "$project": {'supplier._id' : 1,'supplier.companyName': 1}},
                                {
                                    $sort: {
                                        'seller.companyName': 1
                                    }
                                },
                                ])

const findProductsByCategoryId = (categoryId) => {
   return productsModel.find({category: categoryId})
}

const findProductsByAnimalType = (animalType) => {
    return productsModel.find({animal: animalType})
}


module.exports = {
    findAllProducts,
    findProductsForSupplier,
    updateProduct,
    deleteProduct,
    createProduct,
    findProductById,
    findAllBrands,
    findProductsByAnimalType,
    findProductsByCategoryId
}