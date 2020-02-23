import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookings: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/bookings").then(response => {
      response.json().then(results => {
        console.log(results);

        this.setState({ fakeBookings: results });
      });
    });
  }

  search(searchVal) {
    const filteredBooking = this.state.fakeBookings.filter(booking => {
      return booking.firstName === searchVal;
    });
    this.setState({ fakeBookings: filteredBooking });
  }

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={searchVal => this.search(searchVal)} />
          <SearchResults results={this.state.fakeBookings} />
        </div>
      </div>
    );
  }
}

export default Bookings;
