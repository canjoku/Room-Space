import { Component } from 'react'
import BookingComponent from '../components/BookingComponent';
import RoomsComponent from '../components/RoomsComponent';
import CreateRoomComponent from '../components/CreateRoomComponent';

class HomePage extends Component {
  render () {
    return (
      <div>
          <RoomsComponent/>
          <BookingComponent/>
          <CreateRoomComponent/>
      </div>
    )
  }
}

export default HomePage;