import React from 'react';
import KioskEntry from './kioskEntry';

const KioskGroup = (props) => {
  
  if (!props) {
    return <div> Loading...</div>
  }

  console.log("KioskGroup", props)

  const kioskItem = props.map((data) =>
    <KioskEntry 
      id={data.id}
      location={data.location}
      batteriesInUse={data.batteriesInUse}
      batteriesToReplenish={data.batteriesToReplenish}
      batteriesinStock={data.batteriesinStock}
    />
  ); 
  
  return (
    { kioskItem }
  )
  
}

export default KioskGroup;
