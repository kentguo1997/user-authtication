// Include mongoose, account model & users data
const mongoose = require('mongoose')
const accountModel = require('../account')
const users = require('../../users')

// setting connection to db
mongoose.connect('mongodb://localhost/user-authentication')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  for ( let i = 0; i < users.length; i++ ) {
    accountModel.create(users[i])
  }
  console.log('done!')
})