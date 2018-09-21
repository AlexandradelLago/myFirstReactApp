import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import MyComponent from './MyComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term:'hola que tal',
        items:[]
    };
  }
  onChange = (event) => {
    this.setState({term: event.target.value});
  };
  whenSending = (event)=>{
    event.preventDefault();
    this.setState({
      term:'',
      items:[...this.state.items,this.state.term]
    })
  }
  render() {
    return (
      <div>
          <form className="App" onSubmit={this.whenSending}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
          </form>
          <MyComponent></MyComponent>
          <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
