import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-nav'>
          <img src={logo} alt='city tours logo' />
          <ul className='nav-links'>
            <li>
              <NavLink exact to='/' className='nav-link'>
                home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/about' className='nav-link'>
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/tours'
                className='nav-link'
                activeClassName='active'
              >
                tours
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
