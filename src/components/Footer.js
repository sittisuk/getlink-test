import React from 'react';
import '../App.css';

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
          <h2>Footer </h2>
          <div className="container">
            <div className="floatingbox">
              <div className="box">
                <div className="box-content">
                  <h3>Footer Content</h3>
                  <p>simply dummy text of the printing and typesetting.</p>
                </div>
              </div>
            </div>
            <div className="floatingbox">
              <div className="box">
                <div className="box-content">
                  <h3>Footer Content</h3>
                  <p>simply dummy text of the printing and typesetting.</p>
                </div>
              </div>
            </div>
            <div className="floatingbox">
              <div className="box">
                <div className="box-content">
                  <h3>Footer Content</h3>
                  <p>simply dummy text of the printing and typesetting.</p>
                </div>
              </div>
            </div>
            <div className="floatingbox">
              <div className="box">
                <div className="box-content">
                  <h3>Social</h3>
                  <div className="social"></div>
                  <div className="social"></div>
                  <div className="social"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Footer