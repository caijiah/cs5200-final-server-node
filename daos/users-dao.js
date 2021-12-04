const usersModel = require('../db/users/users-model')
const mongoose = require("mongoose");

const createUser = (newUser) => {
    return usersModel.create(newUser)
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
}

const findUserById = (id) => {
    return usersModel.findOne({_id: id})
}

const updateUserInfo = (userId, userInfo) => {
    const id = new mongoose.Types.ObjectId(userId)
    return usersModel.updateOne({_id: id}, {$set: userInfo})
}

module.exports = {
    createUser,
    findSupplierByCompanyName,
    findUserByUserName,
    findUserByCredentials,
    findUserById,
    findReferredId,
    updateUserInfo
}