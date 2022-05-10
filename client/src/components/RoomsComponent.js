import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import RoomComponent from './RoomComponent'
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

import {ADD_ROOM, DELETE_ROOM, GET_ROOMS, GET_ROOM_BY_ID } from '../queries/room_queries'


export default function RoomsComponent() {
  const {error, loading, data} = useQuery(GET_ROOMS);
  const[rooms, setRooms] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data.getRooms)
      setRooms(data.getRooms)
    }
  }, [data]);

   return (
   <div>
     {''}
     {rooms.map(room => {
       return (
         <div>
           <br></br>
           <div>Room Name: {room.roomName}</div>
           <div>Room Location: {room.roomlocation}</div>
           <div>Room Number: {room.roomNumber}</div>
           <div>Room Size: {room.roomSize}</div>
           <div>Room Status {room.bookingStatus}</div>
         </div>
       )
     })}
   </div>
   )
}
