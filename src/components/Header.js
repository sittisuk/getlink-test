import React from 'react';
import '../App.css';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div className="circle"></div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      )
    }
  }

  export default Header