import React, { ReactNode, useState } from "react";

const ParkingSlotContext = React.createContext([{}]);

interface Props {
  parkingSlotSize: number;
  vehicleSize: number;
  parkVehicle: () => {};
  unParkVehicle: () => {};
}

export const ParkingSlotContextProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [parkingSlotProps, setParkingSlotProps] = useState([{}]);

  const contextValue = [{}];

  return (
    <ParkingSlotContext.Provider value={contextValue}>
      {children}
    </ParkingSlotContext.Provider>
  );
};

export default ParkingSlotContext;
