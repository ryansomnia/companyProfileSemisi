import React, { Component } from 'react'
import './Header.css';
import Logo from "../../img/semisi.png"
export class Header extends Component {
  render() {
    return (
      <div className='header'>
          <img src={Logo} className='logo'/>
          <div className='navBar'>
          <nav>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Our Service</a>
            </li>
            <li>
              <a href="/#">Our Project</a>
            </li>
            <li>
              <a href="/#">Contact Us</a>
            </li>
          </ul>
        </nav>
          </div>
      </div>
    )
  }
}

export default Header