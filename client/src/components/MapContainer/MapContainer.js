import React, { Component } from 'react';
import Map from '../Map/Map';
class MapContainer extends Component {
    render() {
        return (
            <div>
                <Map component={Map}/>
            </div>
        );
    }
}

export default MapContainer;
