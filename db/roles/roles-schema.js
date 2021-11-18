const mongoose = require('mongoose')

const rolesSchema = mongoose.Schema({
    role: String
}, {collection: "roles"})

module.exports = rolesSchema;