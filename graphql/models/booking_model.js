const mongoose = require ('mongoose');
const uuid = require('uuid');
const bookingSchema = mongoose.Schema({
    id: {
        type: String, default: uuid.v1
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,ref:'Room'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,ref:'User'
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
})

module.exports= mongoose.model('Booking', bookingSchema);