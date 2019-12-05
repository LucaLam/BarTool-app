import React, { Component } from 'react'
import menu from '../assets/menu.svg'
import './remove.scss'

export class Remove extends Component {

    state={
        toggle: false
    }

    toggleBtn = event => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render() {
        return (
            <div className='main-wrapper'>
            <div className='remove-btn-container' onClick={this.toggleBtn}>
                <img className='remove-btn-img' src={menu} alt='' />
            </div>
            { this.state.toggle ? <button className='remove-btn' onClick={this.props.deleteSavedDrink}>Remove</button> : null}
            </div>
        )
    }
}

export default Remove
