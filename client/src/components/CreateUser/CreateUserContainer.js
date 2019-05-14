import React, { Component } from 'react';
import CreateUser from './CreateUser';

class CreateUserContainer extends Component {
    constructor(){
        super();
        this.state = {
            isClicked : false
        }
    }

    handleClick = () => {
        this.setState({isClicked:!this.state.isClicked})
    }

    render() {
        const {isClicked} = this.state;
        const toggleForm = isClicked === true ? 'signup-form show': 'signup-form hide'
        return (
            <div className="create-account">
                <CreateUser toggleForm={toggleForm} handleClick={this.handleClick}/>
                <button className="create-account-btn" onClick={this.handleClick}>Create Account</button>
            </div>
        );
    }
}

export default CreateUserContainer;