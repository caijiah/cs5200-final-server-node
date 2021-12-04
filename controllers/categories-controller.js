const categoriesService = require('../services/categories-service')

module.exports = (app) => {
    const findAllProductCategory = (req, res) => {
        categoriesService.findAllProductCategory()
            .then(categories => {
                res.send(categories)
            })
    }

    app.get('/api/categories', findAllProductCategory)
}