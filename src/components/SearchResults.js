import React from "react";
import RowResult from "./RowResult";

const SearchResults = props => {
  const results = props.results.map(booking => <RowResult result={booking} />);
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
};

export default SearchResults;
