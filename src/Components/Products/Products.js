import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'

const Products =()=>{
   const [products, setProdcuts] = useState([])
   const [cart, setCart] = useState([])

   useEffect( ()=>{
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProdcuts(data));
   },[])
   const addCart=(product)=>{
    console.log(product.price)
    const newCart = [...cart, product];
    setCart(newCart)
    // console.log(cart[0].price)
   }
   return (
     <div className="Products">
       <div className="products-container">
         {products.map((product) => (
           <Product
             buttonhandle={addCart}
             product={product}
             key={product.id}
           ></Product>
         ))}
       </div>
       <div className="order-summery">
         <Cart cart={cart}></Cart>
       </div>
     </div>
   );
};

export default Products;