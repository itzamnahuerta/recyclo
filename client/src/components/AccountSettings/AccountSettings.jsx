import React, { Component } from 'react';
import { getUser } from '../../Services/ApiServices';
import {updateUser} from '../../Services/ApiServices';
import { Redirect, Link  } from 'react-router-dom';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            updateUser : [],
            name: '',
            username : '',
            email : '',
            isUpdated : false,
            isError: false
        }
    }

    getUserFromDb = async () => {
        
        const user = await getUser();
        this.setState({user})  
        console.log(user)
    }

    async componentWillMount() {
        this.setState({isUpdated:false, error:false});
        try {
            const user = await getUser();
            this.setState({user})  
        } catch (error) {
            throw error
        }
    }

    handleFormChange = async (e) => {
        e.preventDefault();
        this.setState({isError:false})
        const {name, value} = e.target
        await this.setState(prevState => {
            let newUser = prevState.updateUser
            newUser[name] = value
            return newUser
        })
    }

    handleUpdateUser = async (e) => {
        e.preventDefault();
        const {updateUser, user, name, username, email, } = this.state;
        try {
            const newUser = {
                id: updateUser[0].id,
                name: name,
                username: username,
                email: email,
            }
            localStorage.setItem('user', newUser.username)
            const updatedUser = await updateUser(updateUser[0].id, newUser)
            this.setState({isUpdated:true})
            return updatedUser
        } catch (error) {
            getUser()
            if(error){this.setState({isError: true, isUpdated:false})}
        }
    }

    handleCloseError = () => {
        this.setState({isError:false})
    }

    render() {
        const { user, isUpdated, isError } = this.state
        if(isUpdated === true){
            return  <Redirect to='/dashboard'/>
        }

        const errorDiv = isError === true ? 'account-error show' : 'account-error hide'; 

        return (
            <div className="account-settings">
            <Link to ='/dashboard' className="dashboard-link" onClick={this.getUserFromDb}>Go Back</Link>
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
                    <div className={errorDiv}>
                        <h3>Unable to update account settings</h3>
                        <p>Please verify that your information is different than your current settings</p>
                        <button onClick={this.handleCloseError}>Close</button>
                    </div>
            </div>
        );
    }
}

export default AccountSettings;