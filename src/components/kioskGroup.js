import React from 'react';
import KioskEntry from './kioskEntry';

const KioskGroup = (props) => { 
  if (!props) {
    return <div> Loading...</div>;
  }

  const kioskItem = props.kiosk.map(data =>
    <KioskEntry
      id={data.id}
      key={data.id}
      mall={data.mall}
      city={data.city}
      state={data.state}
      zip={data.zip}
      batteriesInUse={data.batteriesInUse}
      batteriesToReplenish={data.batteriesToReplenish}
      batteriesInStock={data.batteriesInStock}
    />
  );

  return (
    <div>
      { kioskItem }
    </div>
  );
};

export default KioskGroup;
