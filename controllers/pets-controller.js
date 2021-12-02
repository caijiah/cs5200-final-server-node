const petsService = require('../services/pets-service')

module.exports = (app) => {
    const findPetsByUserId = (req, res) => {
        const receive = req.body
        const userId = receive.userId

        petsService.findPetsByUserId(userId)
            .then(pets =>{
                res.json(pets)
            })
    }

    app.post('/api/pets', findPetsByUserId)
}