import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import { getUser } from '../../Services/ApiServices';
import { FiMenu  } from 'react-icons/fi';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import {getMaterials, getLocations} from '../../Services/ApiServices';

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
        console.log(this.state.selectedItem)            
        const {materialList, locationList, selectedItem } = this.state
        return (
            <div className="dashboard">
            <FiMenu/>
            <HamburgerMenu materialList={materialList} locationList={locationList} handleItemClick={this.handleItemClick} />

            <div> {this.state.isClicked === true ?  <MapContainer selectedItem={selectedItem} materialList={materialList} locationList={locationList}/> : <div></div> }
                </div>
               
            </div>
        );
    }
}

export default Dashboard;