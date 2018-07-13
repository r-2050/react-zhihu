import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import First from './modules/first/First';
import Thinking from './modules/thinking/Thinking';
// import User from './modules/user/User';
import logo from './logo.svg';
import {Button, Icon} from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>     
        <Button type="primary" className="App-goaway">瞬移<Icon type="apple-o" /></Button>
        <Router>
          <div>
            <Route exact path="/first" component={First}/>
            <Route path="/thinking" component={Thinking}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
