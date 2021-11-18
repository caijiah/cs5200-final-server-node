const mongoose = require('mongoose')
const animalsSchema = require('./animals-schema')

const animalsModel = mongoose.model("AnimalsMode", animalsSchema)

module.exports = animalsModel