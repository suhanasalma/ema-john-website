import React from "react";
import logo from '../../images/Logo.svg'
import './Header.css'

const Header =()=>{
   return (
     <div>
       <nav className="nav-bar">
         <img src={logo} alt="" />
         <div>
           <a href="">Order</a>
           <a href="">Order Review</a>
           <a href="">Manage Inventory</a>
           <a href="">Login</a>
         </div>
       </nav>
     </div>
   );
};


export default Header;