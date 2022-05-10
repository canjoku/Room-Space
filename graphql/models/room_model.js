const mongoose = require ('mongoose');
const uuid = require('uuid');
const roomSchema = mongoose.Schema({
    roomSize: {
        type: Number,
    },
    bookingStatus: {
        type: String
    },
    roomName: {
        type: String,
        required: true
    },
    roomLocation: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Room', roomSchema);