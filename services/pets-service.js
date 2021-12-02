const petsDAO = require('../daos/pets-dao')
const mongoose = require("mongoose");

const findPetsByUserId = (userId) => {
    const id = new mongoose.Types.ObjectId(userId)
    return petsDAO.findPetsByUserId(id)
}

module.exports = {
    findPetsByUserId
}