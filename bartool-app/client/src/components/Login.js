import React, { Component } from "react";
import "./login.scss";
import { Redirect } from "react-router-dom";
import Logo from "./Logo"

export class Login extends Component {

render() {
    const redirect = this.props.redirect;
    if (redirect) {
    return <Redirect to="/search" />;
    }
    return (
    <div>
        <h1>BarTool</h1>
        <form onSubmit={this.props.handleSubmit} className="login__form">
        <label className="login__form-label">Please Enter your Id:</label>
        <input
            type="password"
            name="username"
            value={this.props.id}
            onChange={this.props.handleChange}
            className="login__form-field"
        ></input>
        <button type="submit" className="login__form-btn">
            Submit
        </button>
        </form>
        <Logo />
    </div>
    );
}
}

export default Login;
