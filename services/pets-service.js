const petsDAO = require('../daos/pets-dao')
const mongoose = require("mongoose");
const {ObjectId} = require('mongodb')

const findPetsByUserId = (userId) => {
    const id = ObjectId(userId)
    return petsDAO.findPetsByUserId(id)
}

const updatePet = (petId, pet) => {
    console.log(petId)
    const pid = ObjectId(petId)
    console.log(pid)
    return petsDAO.updatePet(pid, pet);
}

const deletePet = (petId) => {
    const pid = new mongoose.Types.ObjectId(petId)
    return petsDAO.deletePet(pid)
}

const createPet = (newPet) => {
    return petsDAO.createPet(newPet)
}

const findPetById = (petId) =>
    petsDAO.findPetById(petId)
        .populate('animal')

module.exports = {
    findPetsByUserId,
    updatePet,
    deletePet,
    createPet,
    findPetById
}