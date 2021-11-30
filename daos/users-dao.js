const usersModel = require('../db/users/users-model')
const mongoose = require('mongoose')
const roleDAO = require('./roles-dao')

const createUser = (newUser) => {
    const roleId = roleDAO.findRoleId(newUser.role)
    newUser.role = roleId
    return usersModel.create(newUser)
}

const findSupplierByCompanyName = (companyName) => {
    return usersModel.findOne({companyName})
}

const findUserByUserName = (username) => {
    return usersModel.findOne({username})
}

const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username, password}).populate('role')
}

const findUserById = (id) => {
    return usersModel.findById(id)
}

module.exports = {
    createUser,
    findSupplierByCompanyName,
    findUserByUserName,
    findUserByCredentials,
    findUserById
}