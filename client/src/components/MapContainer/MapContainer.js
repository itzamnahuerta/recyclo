import React, { Component } from 'react';
import Map from '../Map/Map';

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
        // let materialsUpdate = this.state.materials
        // let locationsUpdate = this.state.locations
        // console.log(locationsUpdate)
        console.log(this.props.locationList)
        return (
            <div>
                <Map component={Map}  />
            </div>
        );
    }
}

export default MapContainer;
