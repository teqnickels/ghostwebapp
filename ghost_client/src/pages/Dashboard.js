import React, { Component } from 'react'; 
import MapContainer from '../components/MapContainer';
import Form from '../components/Form'; 

export default class Dashboard extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="components">
        <MapContainer />
        </div>
        <div className="formComponent">         
          <Form />
        </div>
      </div>
    );
  };
}


