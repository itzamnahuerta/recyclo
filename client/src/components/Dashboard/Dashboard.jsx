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
            selectedItem: [],
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

    handleItemClick = e => {
        const target = e.target.value
        const name = e.target.getAttribute('name');
        const items = {name:name, value:target}
        this.setState({selectedItem:[...this.state.selectedItem,items] })
    }

    render() {
        // console.log([...this.state.selectedItem])
        const {materialList, locationList} = this.state
        return (
            <div className="dashboard">
            <FiMenu/>
<<<<<<< HEAD
            <HamburgerMenu materialList={materialList} locationList={locationList} handleItemClick={this.handleItemClick} />
                <MapContainer/>
=======
            <HamburgerMenu materialList={materialList} locationList={locationList} />
                <MapContainer materialList={materialList} locationList={locationList}/>
>>>>>>> bc98f61627d888e0b4fdb65e8298f59f40fb4924
            </div>
        );
    }
}

export default Dashboard;