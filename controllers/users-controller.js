const usersService = require("../services/users-service")

module.exports = (app) => {
    const register = (req, res) => {
        const user = req.body
        // console.log(user)
        usersService.register((user))
            .then((actualUser) => {
                if (actualUser) {
                    req.session["currentUser"] = actualUser
                    res.send(actualUser)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        usersService.login(credentials)
            .then((user) => {
                if (user) {
                    // console.log(user)
                    req.session["currentUser"] = user
                    res.send(user)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        if (currentUser) {
            const currentUerId = currentUser._id
            // console.log(currentUerId)
            usersService.findUserById(currentUerId).then((profile)=> {
                // const user = profile
                // user.referrals = profile.referrals
                res.send(profile)
            })
        } else {
            res.sendStatus(403)
        }
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    const updateUserInfo = (req, res) => {
        const receive = req.body
        const userId = receive.userId
        const userInfo = receive.profileInfo

        const currentUser = req.session["currentUser"]
        if (currentUser._id === userId) {
            usersService.updateUserInfo(userId, userInfo)
                .then((updatedProfile)=> {
                    res.json(updatedProfile)
                })
        } else {
            res.sendStatus(403)
        }
    }

    const findCustomerShoppingCart = (req, res) => {
        const userId = req.body.customerId
        // console.log(userId)
        usersService.findCustomerShoppingCart(userId)
            .then(shoppingCart => {
                // console.log(shoppingCart)
                // console.log(shoppingCart.items)
                res.send(shoppingCart)
            })
    }

    const updateCustomerShoppingCart = (req, res) => {
        const receive = req.body
        const userId = receive.customerId
        const shoppingCart = receive.shoppingCart
        // console.log(receive)
        usersService.updateCustomerShoppingCart(userId, shoppingCart)
            .then(status => {
                res.send(status)
            })
    }

    // @POSTMAPPING(url)
    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/profile', profile)
    app.post('/api/logout', logout)
    app.put('/api/profile', updateUserInfo)
    app.post('/api/customer/shoppingCart', findCustomerShoppingCart)
    app.put('/api/customer/shoppingCart', updateCustomerShoppingCart)
}