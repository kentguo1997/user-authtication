// Include mongoose and use Schema which provided by mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// setting Schema of this project
const accountSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  }
}) 

// export model
module.exports = mongoose.model('account', accountSchema) 
