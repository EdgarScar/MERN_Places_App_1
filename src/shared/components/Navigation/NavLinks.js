import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

//Generates an unordered list of navigational links to app's pages in header 
const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        {/*NavLink, similar to Link but with styling capabilities*/}
        <NavLink to='/' exact>All USERS</NavLink>
      </li>
      <li>
        <NavLink to='/u1/pets'>MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to='/pets/new'>ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>AUTHENTICATE</NavLink>
      </li>
    </ul>
  )
};

export default NavLinks;
