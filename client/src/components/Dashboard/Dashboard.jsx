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
        const name = e.target.getAttribute('name');
        const items = {name:name, value:target}
        this.setState({selectedItem:[...this.state.selectedItem,items] })
    }

    render() {
        const {materialList, locationList} = this.state
        console.log(this.state.locationList)
        return (
            <div className="dashboard">
            <FiMenu/>
            <HamburgerMenu materialList={materialList} locationList={locationList} handleItemClick={this.handleItemClick} />
                <MapContainer materialList={materialList} locationList={locationList} />
            </div>
        );
    }
}

export default Dashboard;