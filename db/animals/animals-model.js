const mongoose = require('mongoose')
const animalsSchema = require('./animals-schema')

const animalsModel = mongoose.model("AnimalsModel", animalsSchema)

module.exports = animalsModel