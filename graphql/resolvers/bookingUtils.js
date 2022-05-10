const bookingModel = require('../models/booking_model');


function makeBooking (room, user, date, startTime, endTime, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    const booking = new bookingModel({
        room,
        user,
        date : new Date(date),
        startTime: new Date(startTime),
        endTime: new Date(endTime)
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

function cancelBooking(_id, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    return bookingModel.findOneAndRemove({_id})
    .then(booking => {
        return booking
    })
    .catch(err => {
        throw err
    })
}

function getBookings(req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    return bookingModel
    .find()
    .then(bookings => {
        return bookings
    })
    .catch(err => {
        throw err
    })

}

function getBookingById(_id, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    return bookingModel
    .findOne({_id})
    .then(booking => {
        return booking
    })
    .catch(err => {
        throw err
    })

}


module.exports = {makeBooking, cancelBooking, getBookings, getBookingById}