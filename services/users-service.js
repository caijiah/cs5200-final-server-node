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
            if (newUser.referredBy === '' || newUser.referredBy === undefined) {
                const newCustomer = {
                    ...newUser,
                    shoppingCart: {totalPrice: 0, items:[]},
                    referredBy: null
                }
                return createUserByRoleHelper(newCustomer)
            } else {
                return userDAO.findReferredId(newUser.referredBy)
                    .then(referredId => {
                        if (referredId) {
                            const newCustomer = {
                                ...newUser,
                                shoppingCart: {totalPrice: 0, items:[]},
                                referredBy: referredId
                            }
                            return createUserByRoleHelper(newCustomer)
                        } else {

                        }
                    })
            }
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
    return userDAO.findUserById(id)
        .populate('role')
        .populate('referredBy', 'username')
        .populate('referrals', {'username': 1, '_id': 0, 'referredBy': 0})

}

const updateUserInfo = (userId, userInfo) => {
    return userDAO.updateUserInfo(userId, userInfo)
}

module.exports = {
    createUserByRole,
    register,
    login,
    findUserById,
    updateUserInfo
}