import React from 'react';

const kioskEntry = (kiosk) => {
  
  console.log("kiosk in kioskEntry", kiosk)

  return (
    <div>
    <div>
    {kiosk.id}
    </div>
    <div>
    {kiosk.location}
    </div>
    <div>
    {kiosk.batteriesInUse}
    </div>
    <div>
    {kiosk.batteresToReplenish}
    </div>
    <div>
    {kiosk.batteriesInStock}
    </div>
    </div>
  )
}

export default kioskEntry;
