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
            // return resp;
        } catch (error) {
            throw error
        }
    }

    fetchLocations = async () => {
        const { locationList  } = this.state;
        try {
            const resp = await getLocations(locationList);
            console.log(resp)
            this.setState({locationList:resp})
        } catch (error) {
            throw error
        }
    }

    render() {
        return (
            <div className="dashboard">
            <FiMenu/>
            <HamburgerMenu/>
                <MapContainer/>
            </div>
        );
    }
}

export default Dashboard;