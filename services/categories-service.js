const categoriesDAO = require('../daos/categories-dao')

const findAllProductCategory = () =>
    categoriesDAO.findAllProductCategory()

const findCategoryId = (category) =>
    categoriesDAO.findCategoryId(category)

module.exports = {
    findCategoryId,
    findAllProductCategory
}