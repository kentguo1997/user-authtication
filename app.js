// Include packages
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const accountModel = require('./models/account')
const account = require('./models/account')

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



// setting template engine
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set( 'view engine', 'hbs' )



// default use setting
app.use(bodyParser.urlencoded({ extended: true }))




// setting routes
app.get('/', (req, res) => {
  res.render('index')
})


app.post('/accounts', (req, res) => {
  const inputEmail = req.body.inputEmail
  const inputPassword = req.body.inputPassword
  let matchedAccount = []
  
  accountModel.find()
    .lean()
    .then( accounts => {
      // determine if the input email exists 
      matchedAccount = accounts.filter( account => account.email === inputEmail )
      if (matchedAccount.length === 0) {
        return res.render('index', { message: 'Wrong Email! Please check again!'})
      } else {
        // determine if the input password is correct
        if (matchedAccount[0].password === inputPassword) {
          res.render('success', {firstName: matchedAccount[0].firstName})
        } else {
          return res.render('index', { message: 'Wrong Password! Please check again!' })
        }
      } 
    })
})


// Start and listen the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
