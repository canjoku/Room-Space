const roomModel = require('../models/room_model');


function createRoom(roomSize, bookingStatus, roomNumber, roomLocation) {
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


function deleteRoom() {
    return {
        hey: "Logout user"
    }
}

function getRooms() {
    const rooms = roomModel
    return rooms
    .find()
    .then(rooms => {
        return rooms.map(room => {
            return room
        })
    })
    .catch(err => {
        throw err;
    })
}


module.exports = {createRoom, deleteRoom, getRooms}