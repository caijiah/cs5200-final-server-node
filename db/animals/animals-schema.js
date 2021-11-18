const mongoose = require('mongoose')

const animalsSchema = mongoose.Schema({
    animal: String
}, {collection: 'animals'})

module.exports = animalsSchema