import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import axios from "axios";
import "./login.scss";

export class Login extends Component {
state = {
    id: "",
    user: "",
    redirect: false
};

handleSubmit = event => {
    event.preventDefault();
    if (!this.state.id || isNaN(this.state.id)) {
    return alert("ID Required!");
    } else {
    axios.get("http://localhost:8080/user").then(response => {
        console.log(response.data);
        //look thru data, compare existing IDs to entered ID and 'grant entry' or return an alert
        let user = response.data.find(user => user.id === this.state.id)
        console.log(user);
            if(!user){
                alert('User Not Found!')
            } else{
                this.setState({
                    user: user.name,
                    id: "",
                    redirect: true
                })
            }
    }).then(this.sendDataToParent)
    
    }
};
sendDataToParent = () =>{
    this.props.getUserFromChild(this.state.user)
}


handleChange = event => {
    this.setState({
    id: event.target.value
    });
};


render() {
    console.log("The current user is:", this.state.user);
    const redirect = this.state.redirect
    if(redirect){
        return <Redirect to='/search' />
    }
    return (
    <div>
        <form onSubmit={this.handleSubmit} className="login__form">
        <label className='login__form-label'>Please Enter your Id:</label>
        <input
            type="text"
            name="username"
            value={this.state.id}
            onChange={this.handleChange}
            className='login__form-field'
        ></input>
        <button type="submit" className='login__form-btn'>Submit</button>
        </form>
    </div>
    );
}
}

export default Login;
