import React, { Component } from 'react'
import CreateUserContainer from '../CreateUser/CreateUserContainer';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
        <CreateUserContainer/>
        </nav>
      </div>
    )
  }
}