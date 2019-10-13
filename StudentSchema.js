const mongoose = require('mongoose');

let StudentSchema = mongoose.Schema({
    name: String,
    age: Number
})

module.exports = StudentSchema;