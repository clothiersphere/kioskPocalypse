import React from 'react';

const kioskEntry = (kiosk) => {
  console.log('kiosk in kioskEntry', kiosk);

  return (
    <tr className="kioskEntry" onClick={() => onRowselect(kiosk)}>
      <td className={`kioskStatus ${kiosk.online ? 'online' : 'offline'}`}>{kiosk.online}</td>
      <td>{kiosk.kioskid}</td>
      <td>{kiosk.mall}</td>
      <td>{kiosk.city}</td>
      <td>{kiosk.state}</td>
      <td>{kiosk.zip}</td>
      <td>{kiosk.batteries_on_loan}</td>
      <td>{kiosk.batteries_to_replace}</td>
      <td>{kiosk.battery_count}</td>
    </tr>
  );
};

export default kioskEntry;
