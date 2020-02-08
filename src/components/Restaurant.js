import React from "react";
import RestaurantButton from "./RestaurantButton.js";
class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: 0,
      happy: true
    };
  }
  addOrder = () => {
    this.setState(previousState => {
      return {
        orders: previousState.orders + 1,
        happy: !previousState.happy
      };
    });
  };
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            {this.state.happy ? "Happy" : "Unhappy"} Pizzas: {this.state.orders}{" "}
            <RestaurantButton onClick={this.addOrder} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Restaurant;
