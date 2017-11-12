import React, { Component } from 'react';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme       from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import AppBar               from 'material-ui/AppBar';
import Drawer               from 'material-ui/Drawer';
import MenuItem             from 'material-ui/MenuItem';


import Header from './components/Header';
import Slide from './components/Slide';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './App.css';

class App extends Component {

  
  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    var MenuItems = [];
    for (var i=0; i < 10; i++) {
      MenuItems.push(<MenuItem onClick={this.handleClose} key={i}>Menu Item {i}</MenuItem>);
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="My AppBar" iconClassNameRight="muidocs-icon-navigation-expand-more">
          <Menu onClick={this.handleToggle}/>
        </AppBar>
        

        <div className="App">
          <Header />
          <Slide />
          <Content />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
