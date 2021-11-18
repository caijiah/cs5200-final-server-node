const mongoose = require('mongoose')
const rolesSchema = require('./roles-schema')

const rolesModel = mongoose.model("RolesModel", rolesSchema)

module.exports = rolesModel
