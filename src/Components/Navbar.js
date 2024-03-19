import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink exact to="/Home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/BloodDonor" activeClassName="active">Blood Donor</NavLink></li>
        <li><NavLink to="/Tablets" activeClassName="active">Tablets</NavLink></li>
        <li><NavLink to="/Doctors" activeClassName="active">Tests</NavLink></li>
        <li><NavLink to="/Cart" activeClassName="active">Cart</NavLink></li>
        <li className="dropdown">
          <NavLink to="#" className="dropbtn">My Account</NavLink>
          <div className="dropdown-content">
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/MyAppointments">My Appointments</NavLink>
            <NavLink to="/MyPrescriptions">My Prescriptions</NavLink>
            <NavLink to="/Logout">Logout</NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
