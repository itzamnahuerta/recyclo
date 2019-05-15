import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import AccountSettings from '../AccountSettings/AccountSettings';
import {getMaterials, getLocations} from '../../Services/ApiServices';
import { getUser } from '../../Services/ApiServices';
import { FiMenu  } from 'react-icons/fi';
import { Route, Link  } from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            isClicked: false,
            isOpen : false,
            selectedItem: [],
            materialList : [],
            locationList: [],
            isMenuClicked: false
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

    handleMenuOpen = () => {
        this.setState({isMenuClicked: !this.state.isMenuClicked})
    }

    render() {
        const {materialList, locationList, isMenuClicked } = this.state
        const showHamburgerIcon = isMenuClicked === true ? 'fi-menu-visible' : 'fi-menu-invisible'

        return (
            <div className="dashboard">
                <FiMenu className={showHamburgerIcon} onClick={this.handleMenuOpen}/>
                <HamburgerMenu  isMenuClicked={isMenuClicked} materialList={materialList} locationList={locationList} handleItemClick={this.handleItemClick} handleMenuOpen={this.handleMenuOpen} />
                <MapContainer className="map-box" materialList={materialList} locationList={locationList}/>
                <Link className="account-settings" to="/account-settings">Account Settings</Link>
            </div>
        );
    }
}

export default Dashboard;