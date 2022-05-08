const bookingModel = require('../models/booking_model');


function makeBooking (room, user, date, startTime, endTime, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    const booking = new bookingModel({
        room,
        user,
        date,
        startTime,
        endTime
    })
    return booking
    .save()
    .then(result => {
        return result
    })
    .catch(err => {
        throw err
    })
}

function cancelBooking(parentValue, args, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
}

function getBookings(req) {
    return bookingModel
    .find({})
    .then(bookings => {
        return bookings
    })
    .catch(err => {
        throw err
    })

}


module.exports = {makeBooking, cancelBooking, getBookings}