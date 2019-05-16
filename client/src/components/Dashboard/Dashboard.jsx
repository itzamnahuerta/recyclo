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

    handleMenuOpen= () => {
        this.setState({isMenuClicked:!this.state.isMenuClicked})
    }

    handleItemClick = e => {
        const target = e.target.value
        const id = e.target.getAttribute('id');
        const name = e.target.getAttribute('name');
        const number = e.target.getAttribute('number');
        const latitude = e.target.getAttribute('latitude');
        const postcode = e.target.getAttribute('postcode')
        const url = e.target.getAttribute('url');
        const longitude = e.target.getAttribute('longitude');    
        const items = {
            id,
            latitude, 
            longitude, 
            number, 
            name,
            postcode,
            url,
            value:target}
        this.setState({
            isClicked: true,
            selectedItem:[...this.state.selectedItem,items] 
        })                         
    }

    render() {
        const {materialList, locationList, selectedItem, isMenuClicked } = this.state
        const showHamburgerIcon = isMenuClicked === true ? 'fi-menu-visible' : 'fi-menu-invisible'

        return (
            <div className="dashboard">
                <FiMenu className={showHamburgerIcon} onClick={this.handleMenuOpen}/>
                <HamburgerMenu  isMenuClicked={isMenuClicked} materialList={materialList} locationList={locationList} handleItemClick={this.handleItemClick} handleMenuOpen={this.handleMenuOpen} />
                <div> {this.state.isClicked === true ?  <MapContainer selectedItem={selectedItem} materialList={materialList} locationList={locationList}/> : <div></div> }
                </div>
                <Link className="account-settings" to="/account-settings">Account Settings</Link>

            </div>
        );
    }
}

export default Dashboard;