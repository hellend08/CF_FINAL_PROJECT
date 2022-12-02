// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/commons/Header/Header";
import Layout from "./components/commons/Layout/Layout";
import Footer from "./components/commons/Footer/Footer";

function App() {

  useEffect( () => {
    document.title = 'Oh! Darling';
  })

  return (
    <Router basename={'/'}>
      <Header />
      <Layout />
      <Footer />
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </Router>
  );
}

export default App;
