import React, { Component } from 'react';
import Header from './Header';
import AppRoute from './AppRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppRoute />
      </div>
    );
  }
}

export default App;
