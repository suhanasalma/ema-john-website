import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Product.css'

const Product =(props)=>{
   const { buttonhandle } = props;
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img className="product-img" src={props.product.img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>Price${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>ratings: {ratings}</p>
      </div>
      <button onClick={() => buttonhandle(props.product)} className="add-btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};


export default Product;