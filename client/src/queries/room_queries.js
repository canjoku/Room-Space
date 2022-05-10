import { gql } from '@apollo/client'

export const ADD_ROOM = gql`
mutation AddRoom($roomSize: Int!, $bookingStatus: String!, $roomName: String!, $roomLocation: String!){
  addRoom(roomSize: $roomSize, bookingStatus: $bookingStatus, roomName: $roomName, roomLocation: $roomLocation) {
    _id
    roomSize
    roomName
    roomLocation
  }
}
`

export const DELETE_ROOM = gql`
mutation DeleteRoom($_id: String){
  deleteRoom(_id: $_id) {
    _id
    roomSize
    roomName
    roomLocation
  }
}
`

export const GET_ROOMS = gql`
{
  getRooms {
    _id
    roomSize
    bookingStatus
    roomName
    roomLocation
  }
}
`

export const GET_ROOM_BY_ID = gql`
{
  getRoomById(_id: $_id) {
    _id
    roomSize
    bookingStatus
    roomName
    roomLocation
  }
}
`