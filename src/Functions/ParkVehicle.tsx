import React from 'react';

interface Props{
    parkingSlotSize:number,
    vehicleSize:number,
}

const ParkVehicle = (props:Props) => {
    const compatibilityCheck = props.vehicleSize <= props.parkingSlotSize;
    if(compatibilityCheck == true){
        //update the value of the selected parking slot
        return console.log('compatible')
    }
    else{
        //return a popup dialog
        return console.log('not compatible')
    }
}