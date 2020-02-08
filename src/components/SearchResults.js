import React from "react";
import RowResult from "./RowResult";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.results.map(item => false)
    };
  }
  handleRowSelect = index => {
    this.setState(previousState => {
      return {
        selected: previousState.selected.map((element, i) =>
          i == index ? !element : element
        )
      };
    });
    console.log("Row selected");
  };

  render() {
    const results = this.props.results.map((booking, index) => (
      <RowResult
        onSelect={() => this.handleRowSelect(index)}
        key={booking.id}
        result={booking}
        selected={this.state.selected[index]}
      />
    ));

    console.log(results);

    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title </th>
            <th>firstName</th>
            <th>surname</th>
            <th>email</th>
            <th>roomId</th>
            <th>checkInDate</th>
            <th>checkOutDate</th>
            <th>staying</th>
          </tr>
        </thead>
        <tbody>{results}</tbody>
      </table>
    );
  }
}

export default SearchResults;
