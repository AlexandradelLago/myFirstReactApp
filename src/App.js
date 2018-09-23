import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import MyComponent from './MyComponent';
import DottedBox from './DottedBox';
import styles from './DashedBox.css';
import OutsetBoxStyledC from './OutsetBoxStyledC';
import Counter from './Counter';

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
        show:true,
         // it will be the input
         termApi:'',
        imgApi:'', // it will have the url we will passing to img srr=url
      // tutorial 5 - Mounting 
        counter:0
      };
  }
  // tutorial 5
  incrementCounter = () => {
    this.setState({
      counter: ++this.state.counter
    });
  };
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
// api tutorial 3
  // YO QUERIA HACER QUE EL MISMO ONCHANGE COGIERA EL STATE QUE LE CORRESPONDIERA PERO NO HE PODIDO
  onChangeApi =(event)=>{
    this.setState({termApi:event.target.value});
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.termApi}&api_key=${api_key}`;
    fetch(url)
      .then(response=> response.json())
      .then(data=>this.setState({termApi:'',img:data.data[0].images.fixed_height.url}))
      .catch(e=>console.log('error',e));
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
          <p>Form for the APi - exercise 3</p>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.termApi} onChange={this.onChangeApi}/>
             <button>Search!</button>
          </form>
          <img src={this.state.img} height="100" alt={this.state.termApi} />
          <DottedBox></DottedBox>
          <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
  </div>
        <OutsetBoxStyledC>Este es mi OutsetBox con styles</OutsetBoxStyledC>
        <Counter counter={this.state.counter} />
        
   
      <button onClick={this.incrementCounter}>Click1</button>
      
     
      </div>
      // mounting and updating
    
        
     
    );
  }
}

export default App;
