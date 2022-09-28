import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import {addToDb,getStoredCart} from '../../utilities/fakedb';

const Products =()=>{
   const [products, setProdcuts] = useState([])
   const [cart, setCart] = useState([])

   useEffect( ()=>{
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProdcuts(data));
   },[])

   useEffect(()=>{
    const storedCart = getStoredCart()
    const saveCart = []
    for (const id in storedCart){
      const addedProduct = products.find(product=>product.id === id);
      console.log(addedProduct)
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct)
      }
    }
    setCart(saveCart);
   },[products])



   const addCart=(selectedProduct)=>{
     let newCart = [];
     const exists = cart.find((product) => product.id === selectedProduct.id);

     if (!exists) {
       selectedProduct.quantity = 1;
       newCart = [...cart, selectedProduct];
     }else{
        const rest = products.filter(product=>product.id !==selectedProduct.id)
        exists.quantity +=1
        console.log(rest)
        newCart = [...rest, exists];
     }
     // // const newCart = [...cart, selectedProduct];
     setCart(newCart);
     addToDb(selectedProduct.id);
   }
   return (
     <div className="Products">
       <div className="products-container">
        <input type="text" />
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