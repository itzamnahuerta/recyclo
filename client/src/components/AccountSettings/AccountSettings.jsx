import React, { Component } from 'react';
import { getUser } from '../../Services/ApiServices';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            name: '',
            username : '',
            email : ''
        }
    }

    async componentDidMount() {
        this.setUser();
        // const {user} = this.state.user;
        const user = await getUser();
        this.setState({user})
    }

    handleFormChange = async (e) => {
        e.preventDefault();
        const {name, value} = e.target
        await this.setState(prevState => {
            let newUser = prevState.user
            newUser[name] = value
            console.log('setting user in account', newUser)
            return newUser
        })
    }

    setUser = () => {

    }

    render() {
        const { user, username, name,email } = this.state
        console.log(this.state.user)
        return (
            <div>
                    {user.map(user => {
                        return (
                            <form onChange={this.handleFormChange}>
                            <label>Name</label>
                            <input type="text" name="name" id="name" onChange={this.handleFormChange} defaultValue={user.name}/>
                            <label>Email</label>
                            <input type="text" name="username" id="email" onChange={this.handleFormChange} defaultValue={user.email}/>
                            <label>Username</label>
                            <input type="text" name="email" id="username" onChange={this.handleFormChange} defaultValue={user.username}/>
                            <button type="submit">Update Account</button>
                        </form>
                        )
                    })}
            </div>
        );
    }
}

export default AccountSettings;