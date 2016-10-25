import React from 'react';

const kioskEntry = (kiosk) => {
  console.log('kiosk in kioskEntry', kiosk);

  // return (
  //   <div className={`kioskEntry ${kiosk.online ? 'online' : 'offline'}`}>
  //     <div>
  //       ID: {kiosk.id}
  //     </div>
  //     <div>
  //       Mall: {kiosk.mall}
  //     </div>
  //     <div>
  //       Location: {kiosk.city}, {kiosk.state}, {kiosk.zip}
  //     </div>
  //     <div>
  //       Batteries In Use: {kiosk.batteriesInUse}
  //     </div>
  //     <div>
  //       Batteries To Be Replenished: {kiosk.batteriesToReplenish}
  //     </div>
  //     <div>
  //       Battery Count: {kiosk.batteriesInStock}
  //     </div>
  //   </div>
  // );
  return (
    <tr className="kioskEntry" onClick={() => onRowselect(kiosk)}>
      <td className={`kioskStatus ${kiosk.online ? 'online' : 'offline'}`}>{kiosk.online}</td>
      <td>{kiosk.id}</td>
      <td>{kiosk.mall}</td>
      <td>{kiosk.city}</td>
      <td>{kiosk.state}</td>
      <td>{kiosk.zip}</td>
      <td>{kiosk.batteriesInUse}</td>
      <td>{kiosk.batteriesToReplenish}</td>
      <td>{kiosk.batteriesInStock}</td>
    </tr>
  );
};

export default kioskEntry;
