import React, { Component } from 'react';
import './App.css';
import HeaderSection from "./header/Header";
import Navigation from "./header/Navigation";

class App extends Component {
  render() {
    return (
        <div>
            <Navigation/>
            <HeaderSection />
        </div>
    );
  }
}

export default App;
