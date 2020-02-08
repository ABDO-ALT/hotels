import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <hr />
      <TouristInfoCards />
      <hr />
      <Footer footerData={footerData} />
    </div>
  );
};

export default App;
