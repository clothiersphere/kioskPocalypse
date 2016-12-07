import React from 'react';
import KioskEntry from './kioskEntry';

const KioskGroup = (props) => {
  
  if (!props.kiosk) {
    return <div> Loading...</div>;
  }

  console.log("props", props)
  const kioskEntry = props.kiosk.map(data =>
    <KioskEntry
      kioskid={data.kiosk_id}
      key={data.id}
      mall={data.mall}
      city={data.city}
      state={data.state}
      zip={data.zip}
      batteries_on_loan={data.batteries_on_loan}
      batteries_to_replace={data.batteries_to_replace}
      battery_count={data.battery_count}
      online={data.online}
    />
  );

  return (
    <table className="kioskTable">
      <caption> Kiosks across the Nation</caption>
      <thead>
        <tr>
          <th rowSpan="2" id="bootstrap-override" className="row-Service">Status</th>
          <th rowSpan="2" id="bootstrap-override" className="row-ID">KioskID</th>
          <th colSpan="4">Location</th>
          <th colSpan="3">Batteries</th>
        </tr>
        <tr> 
          <th rowSpan="2" id="bootstrap-override" className="row-Mall">Mall</th>
          <th rowSpan="2" id="bootstrap-override" className="row-City">City</th>
          <th rowSpan="2" id="bootstrap-override" className="row-State">State</th>
          <th rowSpan="2" id="bootstrap-override" className="row-Zip">Zip</th>
          <th id="bootstrap-override" className="row-BIN">In Use</th>
          <th id="bootstrap-override" className="row-BTR">To Restock</th>
          <th id="bootstrap-override" className="row-BIS">In Stock</th>
        </tr>
      </thead>
      <tbody>
        { kioskEntry }
      </tbody>
    </table>
  );
};

export default KioskGroup;
