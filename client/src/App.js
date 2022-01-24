import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
//import Nav from "./Components/Nav";
//import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Main from "./Pages/Main";
import Post from "./Pages/Post";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/Intro";
import Footer from './Components/Footer/footer';



function App() {

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )

  const [currentPage, setCurrentPage] = useState("Intro")
  function renderPage() {
    if (currentPage === "Intro") {
      return <Intro />
    } else if (currentPage === "Main") {
      return <Main />
    } else if (currentPage === "SignIn") {
      return <SignIn />
    } else if (currentPage === "SignUp") {
      return <SignUp />
    } else if (currentPage === "Post") {
      return <Post />
    } else if (currentPage === "Landing") {
      return <Landing />
    } else {
      return <Main />
    }
  }

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
