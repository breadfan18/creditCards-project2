const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    city: String,
    state: String    
})

module.exports = mongoose.model('User', userSchema);