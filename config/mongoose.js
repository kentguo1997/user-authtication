// Include mongoose
const mongoose = require('mongoose')


// setting connection to db
mongoose.connect('mongodb://localhost/user-authentication')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


// export
module.exports = db