const mongoose = require('mongoose')

const animalsSchema = mongoose.Schema({
    animal: {enum: ['CAT', 'DOG', 'FISH', 'BIRD']}
}, {collection: 'animals'})

module.exports = animalsSchema