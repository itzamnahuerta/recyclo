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
        console.log(user)
    }

    setUser = () => {
        const user = sessionStorage.getItem('user');
        // this.setState({user});
    }

    render() {
        // console.log(this.state.user)
        return (
            <div>
                <form>
                    <input></input>
                </form>
            </div>
        );
    }
}

export default AccountSettings;