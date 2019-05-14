import React, { Component } from 'react';
import Map from '../Map/Map';

class MapContainer extends Component {
    

    render() {
        const locationData = this.props.locationList
        console.log(this.props.locationList)
        // let materialsUpdate = this.state.materials
        // let locationsUpdate = this.state.locations
        // console.log(locationsUpdate)
        
        return (
            <div>
                <Map component={Map} locationData={locationData} />
            </div>
        );
    }
}

export default MapContainer;
