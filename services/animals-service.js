const animalsDAO = require('../daos/animals-dao')

const findAllAnimalsType = () =>
    animalsDAO.findAllAnimalsType()

module.exports = {
    findAllAnimalsType
}