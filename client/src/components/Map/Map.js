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
        // width: 400,
        // height: 580,
        latitude: 40.730610,
        longitude: -73.935242,
        zoom: 11
      },
      popupInfo: null
    }
    this._renderMarker = this._renderMarker.bind(this)
    this._renderPopup = this._renderPopup.bind(this)
  };


  _renderMarker(selectedItem, i) {
    const lat = Number(selectedItem.latitude)
    const long = Number(selectedItem.longitude)
    const { materialData  } = this.props
    if(materialData){
      return materialData.map((data,index) => {
        return (
        <Marker 
          key={`locations-${index}`} 
          longitude={Number(data.longitude)}
          latitude={Number(data.latitude)}>
          <MapPin
          size={15}/>
          </Marker>
        )
      })
    }
    else if(selectedItem){
      return (
        <Marker key={`locations-${i}`} longitude={long} latitude={lat} >
          <MapPin
            size={15}          
            onClick={() =>
              this.setState({ popupInfo: selectedItem  })}
          />
        </Marker>
      );
    }

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
    const { materialData  } = this.props
    const selectedItem = this.props.selectedItem
    return (
      <div className="center-map">
        <ReactMapGL
          width={window.innerWidth}
          height={window.innerHeight/1.5}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          mapStyle="mapbox://styles/mapmen/cjvnw7xb901p81cn1q5ebx5vr"
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}>
          {selectedItem ? selectedItem.map(this._renderMarker): materialData ? materialData.map(this._renderMarker): null}
          {this.state.popupInfo && this._renderPopup()}
        </ReactMapGL>
      </div>

    );
  }
}

export default Map;