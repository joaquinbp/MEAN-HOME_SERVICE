const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompanySchema = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true}, 
    name: {type: String, required: true},
    CIF: {type: String, required: true}, 
    email: {type: String, required: true}, 
    logo: {type: String, required: true}, 
    address: {type: String, required: true}, 
    sector: {type: String, required: true},
    score: {type: String, required: true}, 
    comments: {type: Array(String), required: true}    
  });

  module.exports = mongoose.model('Company',CompanySchema);