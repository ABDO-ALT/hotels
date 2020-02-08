import React from "react";
import RestaurantButton from "./RestaurantButton.js";
class Restaurant extends React.Component {
  addOrder = () => {
    console.log("Add Order");
  };
  render() {
    const pizzas = 0;

    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {pizzas} <RestaurantButton onClick={this.addOrder} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
