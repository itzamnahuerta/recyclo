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
        const toggleForm = isClicked === true ? 'signup-form show': 'signup-form'
        return (
            <div>
                <CreateUser toggleForm={toggleForm}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default CreateUserContainer;