import React, { Component } from 'react'
import agave from './assets/agave.svg'
import './app.scss'
import Login from './components/Login'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>BarTool</h1>
        <Login />
        <img className='logo' src={agave} alt=''/>
        
      </div>
    )
  }
}

export default App

