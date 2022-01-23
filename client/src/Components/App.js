import React from 'react';
import './App.css';
import goldtoiletpaper from "./../images/goldtoiletpaper.png";

// import Header from "./Header/header.js"
// import Main from "./Main/main.js"
// import Forms from "../Components/Forms"
// import SignInForm from './Forms/SignInForm';
// import SignUpForm from './Forms/SignUpForm';


// HEADER
function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>

    </header>
  )
}


// MAIN
function Main() {
  return (

    <section>
      <div className="flexbox-container">
        <img
          src={goldtoiletpaper}
          alt="gold toilet paper hanging on a roll" />
      </div>

      <div>
        <form>
          
        </form>
      </div>

      <form action="#" class="form-flex">
        <ul>
          <li>
            <label for="restroom">
              <input type="checkbox" id="restroom" name="restroom" value="standard" />
              <span>Standard Men's or Women's</span>
            </label>
          </li>

          <li>
            <label for="restroom2">
              <input type="checkbox" id="restroom2" name="restroom2" value="family" />
              <span>Family Style</span>
            </label>
          </li>

          <li>
            <label for="restroom3">
              <input type="checkbox" id="restroom3" name="restroom3" value="unisex" />
              <span>Unisex</span>
            </label>
          </li>
        </ul>
      </form>
      <div className='theBttn'>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </div>
    </section>
  )
}


// FOOTER
function Footer(props) {
  return (
    <footer className="foot">
      <p>Copyright {props.year}</p>

    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header name="Gotta Go?" />
      <Main />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
