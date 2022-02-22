// Include packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/mongoose')
const routes = require('./routes')
const port = 3001

const app = express()

// setting template engine
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// default processing for all requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

// Start and listen the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
