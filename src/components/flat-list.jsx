import React, { Component } from 'react';
import Flat from "./flat";

class FlatList extends Component {
  render () {
    return (
      this.props.flats.map(flat => (
        <Flat
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          key={flat.imageUrl}
        />
      ))
    );
  }
}

export default FlatList;
