const mongoose = require('mongoose')

const rolesSchema = mongoose.Schema({
    role: {enum: ['CUSTOMER', 'SUPPLIER']}
}, {collection: "roles"})

module.exports = rolesSchema;