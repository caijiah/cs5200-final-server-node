const rolesModel = require('../db/roles/roles-model')

const findRoleId = (role) => {
    return rolesModel.findOne({role}).select("_id")
}

module.exports = {
    findRoleId
}