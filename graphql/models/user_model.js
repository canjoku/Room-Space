const mongoose = require('mongoose');
const uuid = require('uuid');
const userSchema = mongoose.Schema({
    id: {
        type: String, default: uuid.v1
    },
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('User', userSchema);