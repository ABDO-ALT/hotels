import React from "react";
import RestaurantButton from "./RestaurantButton.js";
class Order extends React.Component {
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
      <li>
        {this.state.happy ? "Happy" : "Unhappy"} {this.props.orderType}:{" "}
        {this.state.orders} <RestaurantButton onClick={this.addOrder} />
      </li>
    );
  }
}
export default Order;
