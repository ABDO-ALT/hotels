import React from "react";
import RestaurantButton from "./RestaurantButton.js";
class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: 0
    };
  }
  addOrder = () => {
    console.log("Add Order");
  };
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {this.state.orders}{" "}
            <RestaurantButton onClick={this.addOrder} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
