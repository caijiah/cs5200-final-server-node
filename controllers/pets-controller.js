const petsService = require('../services/pets-service')

module.exports = (app) => {
    const findPetsByUserId = (req, res) => {
        console.log(req.body)
        const receive = req.body
        const userId = receive.userId
        petsService.findPetsByUserId(userId)
            .then(pets => {
                console.log(pets)
                res.send(pets)
            })
    }

    app.post('/api/pets', findPetsByUserId)
}