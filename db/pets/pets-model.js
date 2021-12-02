const mongoose = require('mongoose')
const petsSchema = require('./pets-schema')

const petsModel = mongoose.model("PetsModel", petsSchema)

module.exports = petsModel

