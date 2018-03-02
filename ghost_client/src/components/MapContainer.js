import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import markers from '../data/markersData';
import { GOOGLE_MAPS_API_KEY } from '../config';

export class MapContainer extends Component {

  renderMarkers = () => {
    return markers.map(marker => 
      <Marker 
        key={marker.title}
        title={marker.title} 
        position={{lat: marker.lat, lng: marker.lng}} 
        name={marker.name} 
      />
    );
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
        </Map>
      </div>
    );
  };
}
export default GoogleApiWrapper({apiKey: GOOGLE_MAPS_API_KEY})(MapContainer)