import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Materials from '../Materials/Materials';
import {getMaterials, getLocations} from '../../Services/ApiServices';
import { getUser } from '../../Services/ApiServices';
import { FiMenu  } from 'react-icons/fi';
import { Link, Redirect  } from 'react-router-dom';
import { logout } from '../../Services/ApiServices'
import authService from '../../Services/AuthService';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isClicked: false,
            isOpen : false,
            selectedItem: [],
            materialList : [],
            locationList: [],
            isAuthenticated : props.authenticate,
            materialsLocation : [],
            isMenuClicked: false,
            materialData: [],
        }
    }

    async componentDidMount() {
        this.fetchMaterials();
        this.fetchLocations();        
        await getUser()
        this.setState({selectedItem:[], materialData:[]})
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


    handleGetDataProp = e => {
        const data = e.target.getAttribute('data');
        const cleanData = JSON.parse(data)
        this.setState({materialData:cleanData, isClicked:true})
        
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

    handleSignOut = async (e) => {
        e.preventDefault()
        await logout()
    }

    render() {
        const {materialList, locationList, selectedItem, isMenuClicked, materialData } = this.state
        const showHamburgerIcon = isMenuClicked === true ? ' icon fi-menu-visible' : 'icon fi-menu-invisible' 
                if(authService.isAuthenticated() === false){
            return <Redirect exact to='/'/>
        }
        return (
            <div className="dashboard">
                
                <FiMenu 
                    className={`${showHamburgerIcon} fi-menu`} 
                    onClick={this.handleMenuOpen}
                />
                <HamburgerMenu
                    className="hamburger-menu"  
                    isMenuClicked={isMenuClicked} 
                    materialList={materialList} 
                    locationList={locationList} 
                    materialData={materialData}
                    handleItemClick={this.handleItemClick} 
                    handleMenuOpen={this.handleMenuOpen} 
                    getDataProp={this.handleGetDataProp}
                />
                <Link 
                    className="account-settings" 
                    to="/account-settings"> 
                    Account Settings
                </Link>
                {this.state.isClicked === true ? 
                    <MapContainer 
                    className="map-container"
                    materialData={materialData}
                    selectedItem={selectedItem} 
                    materialList={materialList} 
                    locationList={locationList}/> 
                    : <div></div> }
                <Materials/>
                <Link to='/' className="sign-out">Sign Out</Link>
            </div>
        );
    }
}

export default Dashboard;