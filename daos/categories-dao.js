const categoriesModel = require('../db/categories/categories-model')

const findAllCategoriesType = () =>
    categoriesModel.find()

const findCategoryId = (category) => {
    return categoriesModel.findOne({category}).select("_id")
}

module.exports = {
    findAllCategoriesType,
    findCategoryId
}