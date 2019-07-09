import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render () {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB_RT5j23hWFaxweruTai_jboHpdph0Yjc' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      </GoogleMapReact>
    );
  }
}

export default Map;
