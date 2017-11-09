import React, { Component } from 'react';
import Header from './components/Header';
import Slide from './components/Slide';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slide />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
