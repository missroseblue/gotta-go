// import React, { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';

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
    </nav>
  );
}

export default Nav;
