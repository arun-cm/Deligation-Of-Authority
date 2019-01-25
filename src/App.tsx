import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/header';
import Body from './components/layout/body';
import Users from './containers/user/users';
import Actionlog from './components/actionlog/actionlogs';
import Error from './components/layout/error';


import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <footer></footer>
      </>
    );
  }
}

export default App;
