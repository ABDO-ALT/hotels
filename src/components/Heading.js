import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <header className="App-header">
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo"
      />
      <span className="App-title">CYF Hotel</span>
      <Clock />
    </header>
  );
};

export default Heading;
