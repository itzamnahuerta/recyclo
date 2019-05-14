import React, { Component } from 'react';
import {signup} from '../../Services/ApiServices';

class CreateUser extends Component {
    constructor(){
        super();
        this.state = {
            isValid : false,
            name: '',
            username: '',
            email : '',
            password: ''
        }
    }

    handleSignUp = async () => {
        const {name,username,email,password} = this.state;
        try {
            const resp = signup({name,username,email,password});
            console.log(resp);
            this.setState({isValid:true});
        } catch (error) {
            throw error
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.handleSignUp();
    }

    handleFormChange= e => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({[fieldName] : value})
    }

    render() {
        const {name,password,email,username} = this.state;
        return (
            <div className={this.props.toggleForm}>
            <div className="glass"></div>
            <div className="form-container">
            <button className="close" type="none" onClick={this.props.handleClick}>X</button>
                <form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                    
                    <label>Name</label>
                    <input type="text" name="name" value={name} placeholder="Name"/>
                    <label>Email</label>
                    <input type="email" name="email" value={email} placeholder="Email" />
                    <label>Username</label>
                    <input type="text" name="username" value={username} placeholder="Username" />
                    <label>Password</label>
                    <input type="password" name="password" value={password} placeholder="Password" />
                    <button type="submit" className="sign-up-btn"> Sign Up</button>
                </form>
                </div>
                
            </div>
        );
    }
}

export default CreateUser;