const categoryModel = require('../db/categories/categories-model')

const findAllProductCategory = () =>
    categoryModel.find()

const findCategoryId = (category) =>
    categoryModel.findOne(category).select('_id')


module.exports = {
    findAllProductCategory,
    findCategoryId
}