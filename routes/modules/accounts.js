// Include Packages
const express = require('express')
const router = express.Router()

const accountModel = require('../../models/account')

// setting routes
router.post('/', (req, res) => {
  const { inputEmail, inputPassword } = req.body
  let matchedAccount = []

  accountModel.find()
    .lean()
    .then(accounts => {
      // determine if the input email exists
      matchedAccount = accounts.filter(account => account.email === inputEmail)
      if (matchedAccount.length === 0) {
        return res.render('index', { message: 'Wrong Email! Please check again!' })
      } else {
        // determine if the input password is correct
        if (matchedAccount[0].password === inputPassword) {
          res.render('success', { firstName: matchedAccount[0].firstName })
        } else {
          return res.render('index', { message: 'Wrong Password! Please check again!' })
        }
      }
    })
})

// export
module.exports = router
