import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import MyComponent from './MyComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // intro react
      isOn:true,
      // todo list
        term:'hola que tal',
        items:[],
        // incremente decrement exercise
        clicks:0,
        show:true
    };
  }
  // intro react
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }
  // to do list
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
  // increment decrement
 IncrementItem =()=>{
   this.setState({clicks:this.state.clicks+1});
 };
 DecrementItem=()=>{
  this.setState({clicks:this.state.clicks-1});
}
ToggleClick=()=>{
  this.setState({show:!this.state.show});
}

// todo mi html , la vista
  render() {
    return (
      <div>
          <p>To Do list </p>
          <form className="App" onSubmit={this.whenSending}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
          </form>
          <List items={this.state.items} />
          <p>Intro React </p>
          <button onClick={this.toggle}> {this.state.isOn ? 'On' : 'Off'}</button>
          <MyComponent name={"Davinia :)"}></MyComponent>
          <button onClick={this.IncrementItem}> +</button>
          <button onClick={this.DecrementItem}> -</button>
          <button onClick={this.ToggleClick}> {this.state.show? "Hide number":"Show Number"}</button>
          {this.state.show? <h2>{this.state.clicks}</h2>: ""}
      </div>
    );
  }
}

export default App;
