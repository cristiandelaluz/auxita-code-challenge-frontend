import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const AppNavbar = (props) => {
  return(
    <nav className="navbar fixed-top navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center title-font" href="/">
          <img src={logo} alt="Logo" height="30" className="d-inline-block" />
        </a>

        <div className="navbar-nav flex-row me-auto">
          <NavLink activeClassName="active" className="nav-link px-2" to="/hypertension-calculator">Hypertension calculator</NavLink>
          <NavLink activeClassName="active" className="nav-link px-2" to="/kidney-disease-calculator">Kidney disease calculator</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;