import React from "react";
// import moment from "moment";

function RowResult(props) {
  const result = props.result;
  return (
    <tr>
      <td>{result.id}</td>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
    </tr>
  );
}

export default RowResult;
