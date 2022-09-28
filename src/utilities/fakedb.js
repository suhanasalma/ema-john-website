// // use local storage to manage cart data
// const addToDb = id =>{
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart);
//     }

//     // add quantity
//     const quantity = shoppingCart[id];
//     if(quantity){
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else{
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

// const deleteShoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb, 
//     removeFromDb,
//     deleteShoppingCart
// }



const addToDb = (id)=>{
   // const product = localStorage.getItem('Product List')
   // console.log(product)

   let shoppingCart = {};

   const storedCart = localStorage.getItem('Product-List');

   if(storedCart){
      shoppingCart = JSON.parse(storedCart)
    }

    let quantity = shoppingCart[id]
   if (quantity){
      let newQuantity = quantity+1;
      shoppingCart[id] = newQuantity
   }else{
      shoppingCart[id] = 1;
   }

   localStorage.setItem('Product-List', JSON.stringify(shoppingCart))




}

const getStoredCart =()=>{
   let shoppingCart = {};

   const storedCart = localStorage.getItem("Product-List");

   if (storedCart) {
     shoppingCart = JSON.parse(storedCart);
   }
   
   return shoppingCart;
}

export {addToDb,getStoredCart};