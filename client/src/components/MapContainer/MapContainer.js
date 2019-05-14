import React, { Component } from 'react';
import Map from '../Map/Map';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/content'

class MapContainer extends Component {
    render() {
        const locationData = this.props.locationList
        console.log(this.props.locationList)        
        return (
            <div>
                <Map component={Map} locationData={locationData} />
            </div>
        );
    }
}

export default MapContainer;
