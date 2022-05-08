import { Component } from 'react'
import BookingComponent from '../components/BookingComponent';
import RoomsComponent from '../components/RoomsComponent';

class HomePage extends Component {
  render () {
    return (
      <div>
          <div>The Home Page to hold the main page of App. Notice Rooms component and booking component rendered</div>
          <RoomsComponent/>
          <BookingComponent/>
      </div>
    )
  }
}

export default HomePage;