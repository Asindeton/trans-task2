const { Schema, model } = require('mongoose')

const schema = new Schema({
  login: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true,
  },
  dateRegistration: {
    type: Date,
    require: true
  },
  dateLastLogIn: {
    type: Date,
    require: true
  },
  status: {
    type: String,
    require: true
  }
})



module.exports = model('Todo', schema)
