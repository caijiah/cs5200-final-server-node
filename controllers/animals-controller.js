const animalService = require('../services/animals-service')

module.exports = (app) => {
    const findAllAnimalsType = (req, res) => {
        animalService.findAllAnimalsType()
            .then(animals => {
                res.send(animals)
            })
    }

    app.get('/animals', findAllAnimalsType)
}