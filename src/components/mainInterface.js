import React, { Component } from 'react';
import KioskGroup from './kioskGroup';

export default class MainInterface extends Component {
  constructor(props) {
    super(props);

    const tempKiosk = [
      { id: 1, mall: 'Westfield San Francisco', city: 'San Francisco', state: 'CA', zip: 94103, batteriesInUse: 7, batteriesToReplenish: 17, batteriesInStock: 18, online: true },
      { id: 2, mall: 'Westfield Santa Ana', city: 'Santa Ana', state: 'CA', zip: 92307, batteriesInUse: 19, batteriesToReplenish: 12, batteriesInStock: 38, online: false },
      { id: 3, mall: 'Westfield San Leandro', city: 'San Leandro', state: 'CA', zip: 92222, batteriesInUse: 44, batteriesToReplenish: 33, batteriesInStock: 12, online: true },
      { id: 4, mall: 'The Grove', city: 'San Diego', state: 'CA', zip: 97118, batteriesInUse: 3, batteriesToReplenish: 1, batteriesInStock: 50, online: true },
      { id: 5, mall: 'Angel Park Mall', city: 'Los Angeles', state: 'CA', zip: 90199, batteriesInUse: 1, batteriesToReplenish: 9, batteriesInStock: 5, online: false },
      { id: 6, mall: 'The Great Mall', city: 'AnytownUSA', state: 'CA', zip: 42497, batteriesInUse: 7, batteriesToReplenish: 17, batteriesInStock: 18, online: true },
    ];

    this.state = {
      kiosk: tempKiosk,
    };

    console.log('thisstatekiosk', this.state.kiosk);
  }

  render() {
    return (
      <div className="mainInterface">
        <KioskGroup
          kiosk={this.state.kiosk}
        />
      </div>
    );
  }
}
