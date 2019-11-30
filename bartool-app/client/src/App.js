import React, { Component } from 'react'
import './app.scss'
import Login from './components/Login'
import Search from './components/Search'
import Logo from './components/Logo'

export class App extends Component {
  //Setting state using data from child comp: Search.js
  state={
    user: ''
  }


  getUserFromChild = (childData) => {
    console.log('childData =',childData)
    this.setState({
      user: childData
    })
  };



  render() {
    return (
      <div className='app'>
        <h1>BarTool</h1>
        <Login getUserFromChild={this.getUserFromChild} />
        <Logo />
        {/* <Search username={this.state.user}/> */}
        
      </div>
    )
  }
}

export default App

