import React, { Component } from 'react';
import { getUser } from '../../Services/ApiServices';
import {updateUser} from '../../Services/ApiServices';
import { Redirect  } from 'react-router';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            name: '',
            username : '',
            email : '',
            password: '',
            isUpdated : false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState({isUpdated:false, error:false});
        try {
            const user = await getUser();
            console.log(user)
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
            return newUser
        })
    }

    handleUpdateUser = async (e) => {
        e.preventDefault();
        const {user, name, username, email, } = this.state;
        try {
            const newUser = {
                id: user[0].id,
                name: name,
                username: username,
                email: email,
            }
            const updatedUser = await updateUser(user[0].id, newUser)
            this.setState({isUpdated:true})
            return updatedUser
        } catch (error) {
            if(error){this.setState({isError: true})}
        }
    }

    render() {
        const { user, isUpdated, isError } = this.state
        if(isUpdated === true){
            return  <Redirect to='/dashboard'/>
        } else if(isError === true) {
            alert('Unable to update');
        }
        return (
            <div>
                    { user ? user.map(user => {
                        return (
                            <form onChange={this.handleFormChange} onSubmit={this.handleUpdateUser}>
                            
                                <label>Name</label>
                                <input type="text" name="name" id="name"  defaultValue={user.name}/>

                                <label>Email</label>
                                <input type="text" name="email" id="email"  defaultValue={user.email}/>
                                <label>Username</label>
                                <input type="text" name="username" id="username"  defaultValue={user.username}/>
                                <button type="submit">Update Account</button>
                            </form>
                        )
                    }) : <h4>Cannot retrive account settings</h4>}
            </div>
        );
    }
}

export default AccountSettings;