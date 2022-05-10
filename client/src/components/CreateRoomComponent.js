import React, { useEffect, useState } from 'react'
import {ADD_ROOM, DELETE_ROOM, GET_ROOMS, GET_ROOM_BY_ID } from '../queries/room_queries';
import { useQuery, useMutation } from '@apollo/client'

function CreateRoomComponent() {
  const [roomSize, setRoomSize] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomLocation, setRoomLocation] = useState("");

  const [createRoom, {error}] = useMutation(ADD_ROOM);

  const addRoom =(e) => {
    e.preventDefault()
      createRoom({
          variables: {roomSize: roomSize.value, bookingStatus: bookingStatus.value, roomName: roomName.value, roomLocation: roomLocation.value }
      })
      if(error) {
        console.log(error)
      }
  }
    return (
        <form>
        <fieldset>
            <div>
                <label htmlFor='roomName'>Room Name</label>
                <input id="roomName" type="text" placeholder='Enter Room Name' onChange={(e) => {
                    setRoomName(e.target.value)
                }}></input>
            </div>
            <div>
                <label htmlFor='roomSize'>Room Size</label>
                <input id="roomSize" type="Number" placeholder='Enter room Size' onChange={(e) => {
                    setRoomSize(e.target.value)
                }}></input>
            </div>
            <div>
                <label htmlFor='roomLocation'>Room Location</label>
                <input id="roomLocation" type="text" placeholder='Enter Room Location' onChange={(e) => {
                    setRoomLocation(e.target.value)
                }}></input>
            </div>
            <div>
                <labeL htmlFor='bookingStatus'>Booking Status</labeL>
                <input id="bookingStatus" type="text" placeholder='Enter Booking Status' onChange={(e) => {
                    setBookingStatus(e.target.value)
                }}></input>
            </div>
            <button type="submit" onClick={addRoom}>Create new Room</button>
        </fieldset>
    </form>
    )
}

export default CreateRoomComponent