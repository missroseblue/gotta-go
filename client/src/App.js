import React, { useState } from 'react';
import './App.css';
import goldtoiletpaper from "../src/images/backgroundv3.jpg";
import Header from "./components/Header/header.js";
import Nav from "./components/Nav/nav.js";
import Main from "./components/Main/main.js";
import Footer from './components/Footer/footer';
import LogInForm from './components/Forms/LogInForm';
import SignUpForm from './components/Forms/SignUpForm';


function App() {
  return (
    <div className="App">
      <Header name="Gotta Go?" />
      <Nav />
      <Main />
      <LogInForm />
      <SignUpForm />
      <Footer year={new Date().getFullYear()} />

    </div>
  );
}

export default App;
