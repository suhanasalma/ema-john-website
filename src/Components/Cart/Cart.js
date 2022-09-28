import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity
    total += product.price * product.quantity;
  }

  for (let product of cart) {
    shipping += product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let GrandTotal = (total + shipping + tax).toFixed(2);
  return (
    <div className="cart">
      <h1>Order Summery</h1>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <p>Grand Total: {GrandTotal}</p>
    </div>
  );
};

export default Cart;
