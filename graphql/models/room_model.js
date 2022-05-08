const mongoose = require ('mongoose');
const roomSchema = mongoose.Schema({
    roomSize: {
        type: Number
    },
    bookingStatus: {
        type: String
    },
    roomNumber: {
        type: String,
        required: true
    },
    roomLocation: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Room', roomSchema);