const indexController = (req, res) => {
    res.render('index', {})
}

const loginController = (req, res) => {
    res.render('login', {})
}

const logoutController = (req, res) => {
    req.logout((err) => {
        if(err) {
            return next()
        }else {
            res.redirect('/')
        }
    })
}

module.exports = { indexController, loginController, logoutController}