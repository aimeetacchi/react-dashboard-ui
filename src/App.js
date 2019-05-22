import React, { Component } from 'react';
import './App.scss';
import Dashboard from './components/dashboard';
import Header from './components/header';


class App extends Component  {

  constructor(props){
    super()

      this.state = {
          active: false,
      }
  }

  isActive = () => {
    console.log('clicking toggle')
    this.setState ({
        active: !this.state.active
    })
}

  render(){
      return (
        <div className="wrapper">
          <Header isActive={this.isActive} active={this.state.active} />
          <Dashboard/>
        </div>
      )
  }
}

export default App;
