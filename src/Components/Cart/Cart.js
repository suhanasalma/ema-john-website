import React from 'react';

const Cart = ({cart})=>{
   return (
     <div>
       <h1>Order Summery</h1>
       <p>Selected Items: {cart.length}</p>
       <p>Total Price: {}</p>
     </div>
   );
};

export default Cart;