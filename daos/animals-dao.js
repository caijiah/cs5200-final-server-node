const animalsModel = require('../db/animals/animals-model')

const findAllAnimalsType = () =>
    animalsModel.find()

module.exports = {
    findAllAnimalsType
}