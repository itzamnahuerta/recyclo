import React, { Component } from 'react';
import {login} from '../../Services/ApiServices';
import { Redirect  } from 'react-router-dom';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            error : false,
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
        const {username, password, isAuthenticated, error} = this.state;
        try {
            const resp = await login({username,password});
            console.log(resp);
            this.setState({isAuthenticated: true})
            if(isAuthenticated === true && error !== true){
                return <Redirect to='/Dashboard'/>
            }
        } catch (error) {
            this.setState({error:true})
            throw error
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.handleLogin();
        console.log('handle Submit')
    }

    render() {
        const {username, password, error, isAuthenticated} = this.state;
            if(error === true ){
                alert('Invalid Login')
            }

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