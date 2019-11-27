import React, { Component } from 'react';
import axios from 'axios';
import './login.scss';

export class LogIn extends Component {

    state={
        id: ''
    }

handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.id || isNaN(this.state.id)) {
        return alert('ID Required!');
            } else{
    console.log('onSubmit Working for axios call')
    axios.get('http://localhost:8080/user')
    .then((response) => {
        console.log(response)
        //look thru data, compare existing IDs to entered ID and 'grant entry' or return an alert
    })
}
}

handleChange = (event) => {
    console.log('onChange Working')
    this.setState({
        id: event.target.value
    })
}

    render() {
        console.log('The current user is:',this.state.id)
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='login__form'>
                    <label>Please Enter your Id:</label>
                    <input type='text' name='username' value={this.state.id} onChange={this.handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default LogIn
