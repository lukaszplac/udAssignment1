import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    username: 'Marko'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      width: '80%',
      border: '1px solid blue',
      borderRadius: '10px',
      margin: '10px auto',
      padding: '10px'
    }

    return (
      <div style={style} className="App">
        <UserInput changeUsername = {this.changeUsernameHandler} currentValue={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
