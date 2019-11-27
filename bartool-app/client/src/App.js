import React, { Component } from 'react'
// import agave from './assets/agave.png'
import './app.scss'
import LogIn from './components/LogIn'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <LogIn />
        {/* <img className='logo' src={agave} alt=''/> */}
        

      </div>
    )
  }
}

export default App

