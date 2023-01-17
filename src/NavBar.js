import React from 'react';
import "./NavBar.css";
function NavBar() {
    return (
        <div className='navMain'>

            <div class='navLeft'>
                <h1>FlipKart</h1>
                <div>
                <p>Explore Plus</p>
                </div>
            </div>
            <div className='navMiddle'>
                
                <input type="text" placeholder='Search here'></input>
                <button><b>Login</b></button>
            </div>

            <div className='navRight'>

                <h2>Become a seller</h2>
                <h2>More</h2>
                <h2>Cart</h2>
            </div>
        </div>
    )
}
export default NavBar;