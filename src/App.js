import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Daviniás first app</h1>
          <MyComponent name="davinia"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>
          {this.state.isOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default App;
