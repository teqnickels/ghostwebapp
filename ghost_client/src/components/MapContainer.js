import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import markers from '../data/markersData';
import { GOOGLE_MAPS_API_KEY } from '../config';


//export 'default' when exporting the whole file! 

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      showInfoWindow: false,
      activeMarker: {},
      userLat:0, 
      userLng: 0, 
      markers: []
    }
  }

  componentDidMount() {
    this.getSurroundingMarkers()
    this.getLocation()
  }

  getSurroundingMarkers() {
    //FOR NOW, THIS IS USING MOCK DATA TO MIMIC DB CALL
    //IN THE FUTURE, REPLACE MARKERS WITH THE RESULT OF THE DB CALL
    this.setState({
      markers: markers
    })
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator
        .geolocation
        .getCurrentPosition((position) => {
          console.log("position:", position)
          this.setState({
            userLat: position.coords.latitude,
            userLng: position.coords.longitude
          });
        })
    } else {
      console.log("browser doesn't support geolocation, hard set lat and lng")
      //browser doesn't support geolocation, hard set lat and lng
      this.setState({lat: 37.774929, lng: -122.419416});
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
  return this.state.markers.map((marker, index) => {
    return (
        <Marker
          key={marker.title}
          title={marker.title}
          position={{
          lat: this.state.userLat,
          lng: this.state.userLng
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