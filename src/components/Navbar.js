import React from 'react'
import Image from './Image'

import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar">
            <Image  src={props.logo} width="150" height="150" id="logo-img"/>
            <div id="menu-container" className="container" >
                <Link to="/" className='menu-items'><li>Home</li></Link>
                <Link to="/" className='menu-items'><li>Products</li></Link>
                <Link to="/about" className='menu-items'><li>About Us</li></Link>
            </div>
            <div className="icon-tray">
                <Image src={require("../images/carts.png")} width="40" height="40"/>
                <h6 style={{color: 'white', padding:'5px'}}>Cart</h6>
            </div>
        </nav>
    </div>
  )
}
