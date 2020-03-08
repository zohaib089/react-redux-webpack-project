import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {

    state = {
        email: "",
        password: "",

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:9000/api/users/login', userData)
            .then(res => {
                let userToken = res.data.token
                localStorage.setItem('token', userToken)
                this.props.history.push('/clients')
            })

    }

    render() {
        return (
            <div className="auth-wrapper" style={{
                marginTop: "6.1rem",
                marginBottom: "3.5rem",


            }} >
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={this.handleChange}
                            />
                        </div>

                        {/* <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div> */}

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                        <NavLink style={{
                            float: "right",
                            marginTop: "-1rem"
                        }} href="/register">Register</NavLink>

                    </form>
                </div>
            </div>

        )
    }
}