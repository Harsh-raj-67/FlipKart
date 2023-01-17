import React from 'react';
import "./Header.css";
import Offer from "./Offer.jpeg";
import Grocery from "./Grocery.jpeg";
import mobile from "./mobile.jpg";
import fashion from "./fashion.jpeg";
import Electronics from "./Electronics.jpeg";
import Beauty from "./Beauty.jpeg";
import Travel from "./Travel.jpeg";
import Twowheeler from "./Twowheeler.jpeg";
function Header() {
  return (

    <div className='Hello'>
      <div className='Harsh'>
        <img src={Offer} alt="logo7" /><br></br>
        <p>Offer</p>
      </div><div className='Harsh'>
        <img src={Grocery} alt="logo" /><br></br>
        <p>Grocery</p>
      </div>
      <div className='Harsh'>
        <img src={mobile} alt="logo1" />
        <p>Mobile</p>
      </div>
      <div className='Harsh'>
        <img src={fashion} alt="logo2" />
        <p>Fashion</p>
      </div>
      <div className='Harsh'>
        <img src={Electronics} alt="logo3" />
        <p>Electronics</p>
      </div>
      <div className='Harsh'>
        <img src={Beauty} alt="logo4" />
        <p>Beauty</p>
      </div>
      <div className='Harsh'>
        <img src={Travel} alt="logo5" />
        <p>Travel</p>
      </div>
      <div className='Harsh'>
        <img src={Twowheeler} alt="logo6" />
        <p>Twowheeler</p>
      </div>
    </div>






  )
}
export default Header;