import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Footer/>

        
      </div>
    );
  }
}

export default App;
