import React, { Component } from 'react'
import './logo.scss';
import agave from '../assets/agave.svg'

export class Logo extends Component {
    render() {
        return (
            <div>
                <img className='logo' src={agave} alt=''/>
            </div>
        )
    }
}

export default Logo
