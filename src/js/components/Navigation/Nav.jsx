import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,


} from 'reactstrap';
import logo from "../../../img/logo-doppiozero.svg";




const NavBar = () => {


  const AuthLink = () => {
    return (
      <ul className="list">
        <li>
          <Link onClick={logout} className="link" to="/">Logout</Link>
        </li>
        <li>
          <Link className="link" to="/clients">Clients</Link>
        </li>

      </ul>
    )
  }


  const GuestLink = () => (

    <ul className="list">
      <li>
        <Link className="link" to="/">Login</Link>
      </li>
    </ul>

  )


  const isAuthenticated = localStorage.getItem('token')


  const logout = () => {
    localStorage.removeItem('token')
  }



  return (
    <div className=' Nav'>
      <Navbar style={{
        color: 'black'
      }} expand="md">
        <NavbarBrand href="/"> <img style={{
          backgroundColor: 'black'
        }} height='40px' src={logo} alt="" /> </NavbarBrand>
        <NavbarToggler
        // onClick={toggle}//
        />
        <Collapse
          navbar>
          <Nav className="ml-auto" navbar>
            {
              isAuthenticated ? <AuthLink /> : <GuestLink />
            }
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );


}

export default withRouter(NavBar);