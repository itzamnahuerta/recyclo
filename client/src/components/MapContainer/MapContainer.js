import React, { Component } from 'react';
import Map from '../Map/Map';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/content'

class MapContainer extends Component {
    
    // getLocationInfo() {
    //     const url = `${BASE_URL}/locations`
    //     axios.get(url)
    //     .then(response => {
    //         this.setState({
    //             data: response.data
    //         });            
    //     })
    //     .catch((e)  => {
    //         console.log(`getlocationinfo error: ${e} ` )
    //     });
    // }

    // componentDidMount() {
    //     this.getLocationInfo();
    // }

    render() {
        const locationData = this.state.data
        console.log(locationData)
        return (
            <div>
                <Map component={Map} locationData={locationData}/>
            </div>
        );
    }
}

export default MapContainer;
