import React, { Component } from 'react';
import CreateUserContainer from '../CreateUser/CreateUserContainer';
import {login} from '../../Services/ApiServices';
import { Redirect  } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

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
        this.setState({
            [fieldName] : value,
            error: false
        })
    }

    handleLogin = async () => {
        const {username, password} = this.state;
        try {
            await login({username,password});
            localStorage.setItem('user', username)
            this.setState({
                isAuthenticated: true,
                username: '',
                password: '',
                error: false
            })
        } catch (error) {
            this.setState({
                error:true,
                username: '',
                password: ''
            })
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
            if(isAuthenticated === true && error !== true){
                return <Redirect to='/Dashboard' component={Dashboard}/>
            }

        return (
            <div>
                <div className="login-form">
                <h3>Login</h3>
                <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit} ref="">
                    <input type="text" name='username' value={username} placeholder="Username" />
                    <input type="password" name='password' value={password} placeholder="Password"/>
                    <button type="submit" className="sign-in-btn">Login</button>
                </form> 
            </div>
            <CreateUserContainer/>
            </div>
                
        );
    }
}

export default LoginForm;