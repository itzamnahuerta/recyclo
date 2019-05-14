import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MapPin from './map-pin';
import PinInfo from './pin-info'
const MAPBOX_TOKEN = process.env.REACT_APP_API_KEY

class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: 600,
        height: 400,
        latitude: 40.730610,
        longitude: -73.935242,
        zoom: 11
      },
      popupInfo: null
    }
    this._renderMarker = this._renderMarker.bind(this)
    this._renderPopup = this._renderPopup.bind(this)
  };


  _renderMarker(locations, i) {
    const lat = Number(locations.latitude)
    const long = Number(locations.longitude)
    return (
      <Marker key={`locations-${i}`} longitude={long} latitude={lat} >
        <MapPin
          size={15}
          // onClick={() =>
          //   this.setState({ popupInfo:  })}
        />
      </Marker>
      
    );
  }

  _renderPopup() {
    const { popupInfo } = this.state;
    const lat = Number(popupInfo.latitude)
    const lng = Number(popupInfo.longitude)
    return (
      <Popup tipSize={5}
        anchor="top"
        longitude={lng}
        latitude={lat}
        onClose={() => this.setState({ popupInfo: null })} >
        <PinInfo info={popupInfo} />
      </Popup>
    )
  }


  render() {
    const { viewport } = this.state;
    const locations = this.props.locationData
    
    return (
      <div className="center-map">
        <ReactMapGL
          width={viewport.width}
          height={viewport.height}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}

          mapStyle="mapbox://styles/mapmen/cjvnw7xb901p81cn1q5ebx5vr"

          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}>

          {locations.map(this._renderMarker)}

          {/* {this.state.popupInfo && this._renderPopup()} */}

        </ReactMapGL>
      </div>

    );
  }
}

export default Map;