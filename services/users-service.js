const userDAO = require("../daos/users-dao")
const roleDAO = require("../daos/roles-dao")

// implement logic
const createUserByRoleHelper = (newUser) => {
    return roleDAO.findRoleId(newUser.role)
        .then((roleID) => {
            newUser.role = roleID
            return userDAO.createUser(newUser)
        })
}

const createUserByRole = (newUser) => {
    switch (newUser.role) {
        case 'CUSTOMER':
            const newCustomer = {
                ...newUser,
                shoppingCart: {totalPrice: 0, items:[]},
                // referredBy: newUser.referredBy
            }
            return createUserByRoleHelper(newCustomer)
        case 'SUPPLIER':
            const newSupplier = {
                ...newUser,
                referredBy: null,
                companyName: newUser.companyName,
                revenue: 0
            }
            return createUserByRoleHelper(newSupplier)
    }
}

const userNameCheckingRegister = (newUser) => {
    return userDAO.findUserByUserName(newUser.name)
        .then((existingUser) => {
            if (existingUser && existingUser.name === newUser.name) {

            } else {
                return createUserByRole(newUser)
            }
        })
}

const register = (newUser) => {
    if (newUser.role === 'SUPPLIER') {
        return userDAO.findSupplierByCompanyName(newUser.companyName)
            .then((existingSupplier) => {
                if (existingSupplier && existingSupplier.companyName === newUser.companyName) {

                } else {
                    return userNameCheckingRegister(newUser)
                }
            })
    } else {
        return userNameCheckingRegister(newUser)
    }
}

const login = (credentials) => {
    return userDAO.findUserByCredentials(credentials.username, credentials.password)
}

const findUserById = (id) => {
    return userDAO.findUserById(id).populate('role')
}

module.exports = {
    createUserByRole,
    register,
    login,
    findUserById
}