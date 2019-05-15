import React, { Component } from 'react';
import Map from '../Map/Map';


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
