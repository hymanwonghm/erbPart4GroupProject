const { Router } = require('express')
const { indexController, loginController, logoutController } = require('../controllers')
const { checkAuthenticated, checkLoggedIn } = require('../middleware/authMiddleware')
const router = Router()

router.route('/').get(checkAuthenticated, indexController)
router.route('/login').get(checkLoggedIn, loginController)

module.exports = { router }