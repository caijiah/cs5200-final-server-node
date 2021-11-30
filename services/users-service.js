const userDAO = require("../daos/users-dao")

const createUserByRole = (newUser) => {
    // const roleId = roleDAO.findRoleId(newUser.role);
    switch (newUser.role) {
        case 'CUSTOMER':
            const newCustomer = {
                ...newUser,
                shoppingCart: {totalPrice: 0, items:[]},
                // referredBy: newUser.referredBy
            }
            return userDAO.createUser(newCustomer)
        case 'SUPPLIER':
            const newSupplier = {
                ...newUser,
                companyName: newUser.companyName,
                revenue: 0
            }
            return userDAO.createUser(newSupplier)
    }
}

const userNameCheckingRegister = (newUser) => {
    return userDAO.findUserByUserName(newUser.name)
        .then((existingUser) => {
            if (existingUser.name === newUser.name) {

            } else {
                return createUserByRole(newUser)
            }
        })
}

const register = (newUser) => {
    if (newUser.role === 'SUPPLIER') {
        return userDAO.findSupplierByCompanyName(newUser.companyName)
            .then((existingSupplier) => {
                if (existingSupplier.companyName === newUser.companyName) {

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