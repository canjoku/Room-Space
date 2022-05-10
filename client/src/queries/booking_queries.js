import { gql } from '@apollo/client'

export const MAKE_BOOKING = gql`
mutation {
  makeBooking(room: "Room", user: "user", date: "date", startTime: "date", endTime: "endtime") {
    room {
      _id
      roomSize
      bookingStatus
      roomName
      roomLocation
    }
    user {
      _id
      firstName
      surname
      email
      department
    }
    date
    startTime
    endTime
  }
}
`

export const CANCEL_BOOKING =gql`
mutation {
  cancelBooking(_id: "blab laa ") {
    _id
    room {
      _id
      roomSize
      bookingStatus
      roomName
      roomLocation
    }
    user {
      _id
      firstName
      surname
      email
      department
    }
    date
    startTime
    endTime
  }
}
`

export const GET_BOOKINGS = gql`
{
  getBookings {
    _id
    room {
      _id
      roomSize
      bookingStatus
      roomName
      roomLocation
    }
    user {
      _id
      firstName
      surname
      email
      department
    }
    date
    startTime
    endTime
  }
}
`

export const GET_BOOKINGS_BY_ID = gql`
{
  getBookingById(_id: hehdhdheh) {
    _id
    room {
      _id
      roomSize
      bookingStatus
      roomName
      roomLocation
    }
    user {
      _id
      firstName
      surname
      email
      department
    }
    date
    startTime
    endTime
  }
}
`