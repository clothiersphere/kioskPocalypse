import React from 'react';
import KioskEntry from './kioskEntry';

const KioskGroup = (props) => {
  if (!props) {
    return <div> Loading...</div>;
  }

  const kioskItem = props.kiosk.map((data, index) =>
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
      online={data.online}
    />
  );

  // return (
  //   <div>
  //     { kioskItem }
  //   </div>
  // );
  return (
    <table className="kioskTable table table-hover table-inverse">
      <thead>
        <tr>
          <th id="bootstrap-override" className="row-Service">Status</th>
          <th id="bootstrap-override" className="row-ID">ID</th>
          <th id="bootstrap-override" className="row-Mall">Mall</th>
          <th id="bootstrap-override" className="row-City">City</th>
          <th id="bootstrap-override" className="row-State">State</th>
          <th id="bootstrap-override" className="row-Zip">Zip</th>
          <th id="bootstrap-override" className="row-BIN">Batteries In Use</th>
          <th id="bootstrap-override" className="row-BTR">Batteries To Replenish</th>
          <th id="bootstrap-override" className="row-BIS">Batteries In Stock</th>
        </tr>
      </thead>
      <tbody>
        { kioskItem }
      </tbody>
    </table>
  );
};

export default KioskGroup;
