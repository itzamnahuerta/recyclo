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
            password: '',
            error:false
        }
    }

    handleSignUp = () => {
        this.setState({
            isValid:false,
            name: '',
            username: '',
            email : '',
            password: '',
        });
        this.props.handleClick();
    }

    handleFormSubmit =  (e) => {
        e.preventDefault();
        const {name,username,email,password} = this.state;
        try {
            const resp = signup({name,username,email,password})
            .then(resp => resp)
            .catch(e => this.setState({error:true, isValid:false}))
            if(resp){
                this.setState({isValid:true})
            }
            return resp
        } catch (error) {
            throw error
        }
        
    }
    handleHideError = () => {
        this.setState({error:false})
    }
    handleFormChange= e => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({[fieldName] : value})
    }

    render() {
        const {name,password,email,username, error, isValid} = this.state;
        const containErr = error === true ? <div className='signup-err' onMouseLeave={this.handleHideError}><h3>Unable to create Account</h3></div> : <div className="signup-noerr"></div>
        const success = isValid === true ? "success":"success hide"
        
        return (
            <div className={this.props.toggleForm} onClick={this.handleHideError}>
            {containErr}
            <div className={success}><h3>Account Created!</h3><button type="submit" onClick={this.handleSignUp}>Login</button></div>
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