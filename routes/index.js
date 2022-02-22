// Include Packages
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const accounts = require('./modules/accounts')


// setting routes
router.use('/', home)
router.use('/accounts', accounts)


// export
module.exports = router
