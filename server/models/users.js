const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  user: {type: String, required: true},
  password: {type: String, required: true}, 
  name: {type: String, required: true},
  surname: {type: String, required: true}, 
  email: {type: String, required: true}, 
  birhtday: {type: String, required: true}, 
  address: {type: String, required: true}, 
  photo: {type: String, required: true},
  admin: {type: Boolean, required: true}   
});

module.exports = mongoose.model('User',UserSchema);