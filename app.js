// Include packages
const express = require('express')
const mongoose = require('mongoose')

const port = 3001

const app = express()


// setting connection to db
mongoose.connect('mongodb://localhost/user-authentication')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})



// setting routes
app.get('/', (req, res) => {
  res.send('Hello World')
})


// Start and listen the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
