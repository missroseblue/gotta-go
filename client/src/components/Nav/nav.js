// import React, { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav(props) {
  return (
    <nav>
      <Link to="home"> Home</Link>

      {!Auth.loggedIn() ? (
        <>
          <Link to="signup"> Sign Up</Link>
          <Link to="login">Log In</Link>
        </>
      ) : null}

      <Link to="/">Search</Link>
    </nav>
  );
}

export default Nav;
