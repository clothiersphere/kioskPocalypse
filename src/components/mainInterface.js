import React, { Component } from 'react';
import KioskGroup from './kioskGroup';

export default class MainInterface extends Component {
  constructor(props) {
    super(props);

    let tempKiosk = [
      { id: 1, location: 'San Francisco', batteriesInUse: 7, batteriesToReplenish: 17, batteriesInStock: 18 },
      { id: 2, location: 'Santa Ana', batteriesInUse: 19, batteriesToReplenish: 12, batteriesInStock: 38 },
      { id: 3, location: 'San Leandro', batteriesInUse: 44, batteriesToReplenish: 33, batteriesInStock: 12 },
      { id: 4, location: 'San Diego', batteriesInUse: 3, batteriesToReplenish: 1, batteriesInStock: 50 },
      { id: 5, location: 'Los Angeles', batteriesInUse: 1, batteriesToReplenish: 9, batteriesInStock: 5 },
                    ];

    this.state = {
      kiosk: tempKiosk
    };

    console.log("thisstatekiosk", this.state.kiosk)
  }

  render() {
    return (
      <div className="mainInterface">
        <KioskGroup 
        props={this.state.kiosk}
        />

      </div> 
    )
  }
}
