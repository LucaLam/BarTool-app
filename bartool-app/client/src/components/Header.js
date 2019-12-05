import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './header.scss'

export class Header extends Component {
    
    render() {
        return (
            <div className='header'>
                <Burger />
                <h1 className='header__txt-logo'>BarTool</h1>
            </div>
        )
    }
}

export default Header

class Burger extends React.Component {

handleSignOut= (event) => {
    localStorage.removeItem('user')
}
    
showSettings (event) {
    event.preventDefault();
}

render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
    <Menu>
        <a id="home" className="menu-item" href="/search">Search</a>
        <a id="about" className="menu-item" href="/saved">Saved Drinks</a>
        <a id="contact" className="menu-item" href="/" onClick={this.handleSignOut}>Sign Out</a>
    </Menu>
    );
}
}
