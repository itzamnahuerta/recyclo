import React, { Component } from 'react';
import MapContainer from '../MapContainer/MapContainer';
import { FiMenu  } from 'react-icons/fi';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import {getMaterials, getLocations} from '../../Services/ApiServices';
class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            isClicked: false,
            isOpen : false,
            materialList : [],
            locationList: []
        }
    }

    async componentDidMount() {
        this.fetchMaterials();
        this.fetchLocations();
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

    render() {
        const {materialList, locationList} = this.state
        return (
            <div className="dashboard">
            <FiMenu/>
            <HamburgerMenu materialList={materialList} locationList={locationList} />
                <MapContainer materialList={materialList} locationList={locationList}/>
            </div>
        );
    }
}

export default Dashboard;