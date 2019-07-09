import React, { Component } from 'react';
import Map from "./map";
import FlatList from "./flat-list";
import flats from "../../data/flats";

class App extends Component {
  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
