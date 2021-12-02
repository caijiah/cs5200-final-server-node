const animalsModel = require('../db/animals/animals-model')

const findAllAnimalsType = () =>
    animalsModel.find()

const findAnimalId = (animal) => {
    return animalsModel.findOne({animal}.select("_id"))
}

module.exports = {
    findAnimalId,
    findAllAnimalsType
}