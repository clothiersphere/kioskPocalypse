import React from 'react';

const kioskEntry = (kiosk) => {
  
  console.log('kiosk in kioskEntry', kiosk);

  return (
    <div className="kioskEntry">
      <div>
        ID: {kiosk.id}
      </div>
      <div>
        Mall: {kiosk.mall}
      </div>
      <div>
        Location: {kiosk.city}, {kiosk.state}, {kiosk.zip}
      </div>
      <div>
        Batteries In Use: {kiosk.batteriesInUse}
      </div>
      <div>
        Batteries To Be Replenished: {kiosk.batteriesToReplenish}
      </div>
      <div>
        Battery Count: {kiosk.batteriesInStock}
      </div>
    </div>
  );
};

export default kioskEntry;
