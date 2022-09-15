import React from "react";
import './navbar.css'

 function Navbar(){
return(
    <div className='navbar'>
    <div ><input className="search"
          name="search"
          placeholder="Search 8,000+ tutorials"
        /></div>
      <div className="heading">freeCodeCamp</div>
      <div className="action">
     <div ><button className="menu">Menu</button></div>
     <div ><button className="signup"><a href="/signup">SignIn</a></button></div>
    </div>
  </div>
);
}

export default Navbar;