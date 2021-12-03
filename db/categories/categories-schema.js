const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({
    category: {enum: ['FOOD', 'TOY', 'TREAT', 'MEDICINE']}
}, {collection: "categories"})

module.exports = categoriesSchema