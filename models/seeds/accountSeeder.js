// Include db from mongoose.js, account model & users data
const db = require('../../config/mongoose')
const accountModel = require('../account')
const users = require('../../users')


// setting connection to db
db.once('open', () => {
  for ( let i = 0; i < users.length; i++ ) {
    accountModel.create(users[i])
  }
  console.log('done!')
})