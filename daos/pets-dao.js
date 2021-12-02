const petsModel = require('../db/pets/pets-model')

const findPetsByUserId = (userID) =>
    petsModel.find({owner: userID}).populate('animal')

module.exports = {
    findPetsByUserId
}