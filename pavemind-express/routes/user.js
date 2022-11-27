const router = require('express').Router()
const user = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/info', auth, user.info)

router.post('/settings', auth, user.settings)

router.post('/changePassword', auth, user.passwordChange)

module.exports = router