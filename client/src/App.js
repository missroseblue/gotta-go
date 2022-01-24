import React, { useState } from 'react';
import './App.css';
import goldtoiletpaper from "../src/images/backgroundv3.jpg";
import Header from "./components/Header/header.js"
import Nav from "./components/Nav/nav.js"
import Main from "./components/Main/main.js"
import Footer from './components/Footer/footer';
import LogInForm from './components/Forms/LogInForm';


function App() {
  return (
    <div className="App">
      <Header name="Gotta Go?" />
      <Nav />
      <Main />
      <LogInForm />
      <Footer year={new Date().getFullYear()} />

    </div>
  );

  
  /////// CHANGE PAGES
  // const [currentPage, setCurrentPage] = useState("Intro")
  //     function renderPage() {
  //       if(currentPage==="Intro") {
  //         return <Intro />
  //       } else if (currentPage==="Home") {
  //         return <Home />
  //       } else if (currentPage==="SignIn") {
  //         return <SignIn />
  //       } else if (currentPage==="SignUp") {
  //         return <SignUp />
  //       } else if (currentPage==="Post") {
  //         return <Post />
  //       } else if (currentPage==="Display") {
  //         return <Display />

  //       }
}

// return
//   <div>
//     <Header setCurrentPage = {setCurrentPage} setCurrentPage = {currentPage} />
//   

        // <main>
        //   {renderPage()}
        // </main>
        // </div >


export default App;
