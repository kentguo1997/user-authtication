// Include Packages
const express = require('express')
const router = express.Router()

// setting routes
router.get('/', (req, res) => {
  res.render('index')
})

// export
module.exports = router
