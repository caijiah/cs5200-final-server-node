const petsService = require('../services/pets-service')

module.exports = (app) => {
    const findPetsByUserId = (req, res) => {
        // console.log(req.body)
        const receive = req.body
        const userId = receive.userId
        petsService.findPetsByUserId(userId)
            .then(pets => {
                // console.log(pets)
                res.send(pets)
            })
    }

    const updatePet = (req, res) => {
        const receive = req.body
        const petId = receive.petId
        const petUpdate = receive.petUpdate
        petsService.updatePet(petId, petUpdate)
            .then(status => {
                res.send(status)
            })
    }

    const deletePet = (req, res) => {
        const petId = req.params.petId
        petsService.deletePet(petId)
            .then(status => {
                res.send(status)
            })
    }

    const createPet = (req, res) => {
        const newPet = req.body
        console.log(newPet)
        petsService.createPet(newPet.newPet)
            .then(actualPet => {
                petsService.findPetById(actualPet._id)
                    .then(actualPet => res.json(actualPet))
            })
    }

    app.post('/api/pets', findPetsByUserId)
    app.put('/api/pets/updatePet', updatePet)
    app.delete('/api/pets/:petId', deletePet)
    app.post('/api/pets/createPet', createPet)
}