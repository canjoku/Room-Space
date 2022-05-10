const roomModel = require('../models/room_model');
const ObjectId = require('mongodb').ObjectId


function createRoom(roomSize, bookingStatus, roomName, roomLocation, req) {
   
    const room = new roomModel({
        roomSize,
        bookingStatus,
        roomName,
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


function deleteRoom(_id, req) {
    if(!req.isAuthenticated) {
        throw new Error('Unathenticated');
    }
    return roomModel
    .findOneAndRemove({_id})
    .then(room => {
        return room
    })
    .catch(err => {
        throw err
    })
}

function getRooms(req) {
    
    return roomModel
    .find()
    .then(rooms => {
        return rooms.map(room => {
            return {...room._doc}
        })
    })
    .catch(err => {
        throw err;
    })
}

function getRoomById(req, _id) {
    return roomModel
    .findOne(_id)
    .then(rooms => {
        return rooms
    })
    .catch(err => {
        throw err;
    })
}



module.exports = {createRoom, deleteRoom, getRooms, getRoomById}