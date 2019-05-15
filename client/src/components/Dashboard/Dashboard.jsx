import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import AccountSettings from '../AccountSettings/AccountSettings';
import {getMaterials, getLocations} from '../../Services/ApiServices';
import { getUser } from '../../Services/ApiServices';
import { FiMenu  } from 'react-icons/fi';
import { Route, Link  } from 'react-router-dom';
import AddLocation from '../EditLocation/AddLocation';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            isClicked: false,
            isOpen : false,
            selectedItem: [],
            materialList : [],
            locationList: []
        }
    }

    async componentDidMount() {
        this.fetchMaterials();
        this.fetchLocations();
        await getUser()
    }

    fetchMaterials = async () => {
        const { materialList  } = this.state
        try {
            const resp = await getMaterials(materialList);
            this.setState({materialList:resp.data})
        } catch (error) {
            throw error
        }
    }

    fetchLocations = async () => {
        const { locationList  } = this.state;
        try {
            const resp = await getLocations(locationList);
            this.setState({locationList:resp})
        } catch (error) {
            throw error
        }
    }

    handleItemClick = e => {
        const target = e.target.value
        const name = e.target.getAttribute('name');
        const items = {name:name, value:target}
        this.setState({selectedItem:[...this.state.selectedItem,items] })
    }

    render() {
        const {materialList, locationList} = this.state
        return (
            <div className="dashboard">
            <FiMenu/>
            <HamburgerMenu materialList={materialList} locationList={locationList} handleItemClick={this.handleItemClick} />
                <MapContainer materialList={materialList} locationList={locationList}/>
            <Link to="/account-settings">Account Settings</Link>
            <Link to="/add-location">Add Location</Link>
            <Route exact path='/add-location' component={(props)=> AddLocation}/>
            </div>
        );
    }
}

export default Dashboard;