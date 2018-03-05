import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import markers from '../data/markersData';
import { GOOGLE_MAPS_API_KEY } from '../config';

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showInfoWindow: false,
      activeMarker: {}
    }
  }

  onMarkerClick = (props, marker, e) => {
    console.log('clicked marker', props, marker);
    
    this.setState({
      showInfoWindow: !this.state.showInfoWindow,
      activeMarker: marker
    })
  }

  renderInfoWindow() {        
     return (
     <InfoWindow
                 visible={this.state.showInfoWindow}
                 marker={this.state.activeMarker}>
       <div><h1> This is an infoWindow</h1> </div>
     </InfoWindow>
     )
      
  }

  renderMarkers = () => {
  return markers.map((marker, index) => {
    return (
        <Marker
          key={marker.title}
          title={marker.title}
          position={{
          lat: marker.lat,
          lng: marker.lng
        }}
          name={marker.name}
          audio={marker.audioFile}
          onClick={this
          .onMarkerClick
          .bind(this)}/>   
    )
  });
};


  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    
    return (
      <div>      
        <Map google={this.props.google}
            style={{width: '100%', height: '100%'}}
            className={'map'}
            zoom={14}>

          {this.renderMarkers()}
          {this.renderInfoWindow()}
        </Map>
      </div>
    );
  };
}
export default GoogleApiWrapper({apiKey: GOOGLE_MAPS_API_KEY})(MapContainer)