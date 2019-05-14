import React, { Component } from 'react';
import {login} from '../../Services/ApiServices'

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            isAuthenticated : false,
            username: '',
            password: ''
        }
    }

    handleFormChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({[fieldName] : value})
    }

    handleLogin = async () => {
        const {username, password} = this.state;
        try {
            const resp = await login({username,password});
            console.log(resp);
            this.setState({isAuthenticated: true})
        } catch (error) {
            throw error
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.handleLogin();
        console.log('handle Submit')
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="login-form">
                <h3>Login</h3>
                <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                    <input type="text" name='username' value={username} placeholder="Username" />
                    <input type="password" name='password' value={password} placeholder="Password"/>
                    <button type="submit" className="sign-in-btn">Login</button>
                </form> 
            </div>
        );
    }
}

export default LoginForm;