// import React, { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav(props) {
  return (
    <nav>
      {/* <Link to="home"> Home</Link>
      <br />
      <br /> */}
      <Link to="signup"> Sign Up</Link>
      <br />
      <br />
      <Link to="login">Log In</Link>
      <br />
      <br />
      <Link to="/">Search</Link>
      
      {!Auth.loggedIn() ? (
        <>
          <Link to="signup"> Sign Up</Link>
          <Link to="login">Log In</Link>
        </>
      ) : (
        <button className="btn" onClick={() => Auth.logout()}>Logout</button>
      )}
    </nav>
  );
}

export default Nav;
