const usersModel = require('../db/users/users-model')

const createUser = (newUser) => {
    return usersModel.create(newUser)
}

const updateUser = (newUser) => {

}

const findReferredId = (username) => {
    return usersModel.findOne({username}).select('_id')
}

const findSupplierByCompanyName = (companyName) => {
    return usersModel.findOne({companyName})
}

const findUserByUserName = (username) => {
    return usersModel.findOne({username})
}

const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username, password})
        // .populate('role')
        // .populate('referrals')
        // .populate('referredBy', '_id', usersModel).exec()
}

const findUserById = (id) => {
    return usersModel.findOne({_id: id})
}

module.exports = {
    createUser,
    findSupplierByCompanyName,
    findUserByUserName,
    findUserByCredentials,
    findUserById,
    findReferredId
}