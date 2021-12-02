const mongoose = require('mongoose')

const petsSchema = mongoose.Schema({
    name: String,
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AnimalsModel'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    breed: String,
    gender: String,
    age: Number
}, {collection: 'pets'})

module.exports = petsSchema