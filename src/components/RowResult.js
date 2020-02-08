import React from "react";
import moment from "moment";

function RowResult(props) {
  const result = props.result;
  let checkInDate = moment(result.checkInDate);
  let checkOutDate = moment(result.checkOutDate);
  let staying = checkOutDate.diff(checkInDate, "days");
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
      <td>{staying}</td>
    </tr>
  );
}

export default RowResult;
