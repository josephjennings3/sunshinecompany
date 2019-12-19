import React from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <div className="header">
      <div className="header-wrap">
        {/* <div className="title">
          <h1>Sunshine Company Saloon</h1>
          <p>An Ocean Beach institution since 1974</p>
        </div> */}
        <div className="header_list">
          <ul>
              <li>
                <NavLink className="link_style" to ='/' exact 
                activeStyle={
                        {borderTop: 'solid 3px #ff652f'}}>Home</NavLink>
            </li>
            <li>
                <NavLink className="link_style" to ='/pages/about' exact 
                    activeStyle={
                            {borderTop: 'solid 3px #ff652f'}}>
                    About Us</NavLink>
            </li>
            <li>
                <NavLink className="link_style" to ='/pages/gallery' exact 
                    activeStyle={
                            {borderTop: 'solid 3px #ff652f'}}>
                    Gallery</NavLink>
            </li>
            <li>
                <NavLink className="link_style" to ='/pages/latest' exact 
                    activeStyle={
                            {borderTop: 'solid 3px #ff652f'}}>
                    Latest</NavLink>
            </li>
            <li>
                <NavLink className="link_style" to ='/pages/contact' exact 
                    activeStyle={
                        {borderTop: 'solid 3px #ff652f'}}>
                Contact</NavLink>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  );
}

export default Header;