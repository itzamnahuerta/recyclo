import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import {getMaterials, getLocations} from '../../Services/ApiServices';
import { getUser } from '../../Services/ApiServices';
import { FiMenu  } from 'react-icons/fi';
import {  Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            isClicked: false,
            isOpen : false,
            selectedItem: [],
            materialList : [],
            locationList: [],
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

    render() {
        const {materialList, locationList, selectedItem, isMenuClicked, materialData } = this.state
        const showHamburgerIcon = isMenuClicked === true ? ' icon fi-menu-visible' : 'icon fi-menu-invisible'   
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
                <div className="dash-grid-container"> 
                    <div> {this.state.isClicked === true ? 
                        <MapContainer 
                        className="map-container"
                        materialData={materialData}
                        selectedItem={selectedItem} 
                        materialList={materialList} 
                        locationList={locationList}/> 
                        : <div></div> }
                    </div>
                    {/* <Materials className="materials"/> */}
                </div> 
            </div>
        );
    }
}

export default Dashboard;