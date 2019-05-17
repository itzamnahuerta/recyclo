import React, { Component } from 'react';
import Map from '../Map/Map';

class MapContainer extends Component {  
    render() {
        const selectedItem = this.props.selectedItem        
        const locationData = this.props.locationList                                   
        return (
            <div>
                <Map component={Map} selectedItem={selectedItem} locationData={locationData} materialData={this.props.materialData}/>
            </div>
        );
    }
}


export default MapContainer;