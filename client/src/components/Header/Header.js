import React, { Component } from 'react'
import CreateUserContainer from '../CreateUser/CreateUserContainer';
import LoginForm from '../LoginForm/LoginForm';
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
        <CreateUserContainer/>
        <LoginForm/>
        </nav>
      </div>
    )
  }
}
