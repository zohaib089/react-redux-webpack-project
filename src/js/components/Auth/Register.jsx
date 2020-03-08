import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    state = {
        email: "",
        password: "",
        name: ""

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:9000/api/users', user)
            .then(res => {
                console.log(res.data)
            })
    }
    render() {
        return (

            <div className="auth-wrapper"
                style={{
                    marginTop: "6.1rem",
                    marginBottom: "3.5rem",
                }}
            >
                <div className="mt-1 auth-inner">

                    <form onSubmit={this.handleSubmit}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input name="name" onChange={this.handleChange} type="text" className="form-control" placeholder="First name" />
                        </div>



                        <div className="form-group">
                            <label>Email address</label>
                            <input name="email" onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}
export default Register