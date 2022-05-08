const mongoose = require ('mongoose');
const Room = require('./room_model');
const User = require('./user_model');
const bookingSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,ref:'Room'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,ref:'User'
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Booking', bookingSchema);