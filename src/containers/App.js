import React, { Component } from 'react';
import Header from './HeaderContainer'
import MainRoutes from "../router/MainRoutes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainRoutes/>
      </div>
    );
  }
}

export default App;
