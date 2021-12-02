const petsModel = require('../db/pets/pets-model')

const findPetsByUserId = (userID) =>
    petsModel.find({'owner': userID})
        .populate('animal')

const createPet = (newPet) => {
    return petsModel.create(newPet)
}

const updatePet = (id, newPet) => petsModel.updateOne({_id: id},
    {$set: newPet})

const findAllPets = () => petsModel.find();
const findPetsByName = (name) => petsModel.find({name: name})
const findPetsById = (id) => petsModel.findById(id)
const findPetsByGender = (gender) => petsModel.findOne({gender})
const findPetsByBreed = (breed) => petsModel.findOne({breed})
const findPetsByAge = (age) => petsModel.findOne({age})
const deletePet = (id) => petsModel.deleteOne({_id: id})

module.exports = {
    createPet,
    updatePet,
    findPetsById,
    findPetsByName,
    findAllPets,
    findPetsByAge,
    findPetsByBreed,
    findPetsByGender,
    deletePet,
    findPetsByUserId
}
