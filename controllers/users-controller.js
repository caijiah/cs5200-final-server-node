const usersService = require("../services/users-service")

module.exports = (app) => {
    const register = (req, res) => {
        const user = req.body
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
            usersService.findUserById(currentUerId).then((profile)=> {
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

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/profile', profile)
    app.post('/api/logout', logout)
}