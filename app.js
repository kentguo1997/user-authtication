// Include packages
const express = require('express')
const port = 3001

const app = express()


// setting routes
app.get('/', (req, res) => {
  res.send('Hello World')
})


// Start and listen the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
