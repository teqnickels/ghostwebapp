import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
// import Map from './Map';
import { GOOGLE_MAPS_API_KEY } from '../config';

export class MapContainer extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>      
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={14}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 37.778519, lng: -122.405640}} />
          <Marker
            name={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />
          <Marker />
        </Map>
      </div>
    );
  };
}
export default GoogleApiWrapper({apiKey: GOOGLE_MAPS_API_KEY})(MapContainer)