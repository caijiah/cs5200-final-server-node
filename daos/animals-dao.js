const animalsModel = require('../db/animals/animals-model')
const findAnimalId = (animal) => {
    return animalsModel.findOne({animal}.select("_id"))
}

module.exports = {
    findAnimalId
}