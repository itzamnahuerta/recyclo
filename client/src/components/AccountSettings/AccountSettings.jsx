import React, { Component } from 'react';
import { getUser } from '../../Services/ApiServices';
import {updateUser} from '../../Services/ApiServices'

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
        try {
            const user = await getUser();
            this.setState({user})    
        } catch (error) {
            throw error
        }
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

    handleUpdateUser = async (e) => {
        e.preventDefault();
        const {user, name, username, email } = this.state;
        const newUser = {
            id: user[0].id,
            name: name,
            username: username,
            email: email
        }

        const updatedUser = await updateUser(user[0].id, newUser)
        console.log('new user', newUser)
        return updatedUser
    }

    render() {
        const { user } = this.state
        console.log(this.state.user)
        return (
            <div>
                    { user ? user.map(user => {
                        return (
                            <form onChange={this.handleFormChange} onSubmit={this.handleUpdateUser}>
                                <label>Name</label>
                                <input type="text" name="name" id="name"  defaultValue={user.name}/>
                                <label>Email</label>
                                <input type="text" name="username" id="email"  defaultValue={user.email}/>
                                <label>Username</label>
                                <input type="text" name="email" id="username"  defaultValue={user.username}/>
                                <button type="submit">Update Account</button>
                            </form>
                        )
                    }) : <h4>Cannot retrive account settings</h4>}
            </div>
        );
    }
}

export default AccountSettings;