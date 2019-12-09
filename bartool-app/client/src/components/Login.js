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
        <h1 className="login__form-label">Hello...</h1>
        <input
            type="password"
            name="username"
            placeholder='Please enter your id'
            value={this.props.id}
            onChange={this.props.handleChange}
            className="login__form-field"
        ></input>
        <button type="submit" className="login__form-btn">
            Sign In
        </button>
        </form>
        <Logo />
    </div>
    );
}
}

export default Login;
