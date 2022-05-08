const roomModel = require('../models/room_model');


function createRoom(roomSize, bookingStatus, roomNumber, roomLocation, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    const room = new roomModel({
        roomSize,
        bookingStatus,
        roomNumber,
        roomLocation
    })
    return room
    .save()
    .then(result => {
        return result
    })
    .catch(err => {
        throw err
    })
}


function deleteRoom(req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    return {
        hey: "Logout user"
    }
}

function getRooms(req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    return roomModel
    .find({})
    .then(rooms => {
        return rooms;
    })
    .catch(err => {
        throw err;
    })
}


module.exports = {createRoom, deleteRoom, getRooms}