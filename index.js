// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
if (blockNumber< 42){
return 42 - blockNumber;
}else {
    return blockNumber - 42;
}
}

function distanceFromHqInFeet(blockNumber){
return distanceFromHqInBlocks(blockNumber)* 264;
}

function distanceTravelledInFeet(start, destination){
    if(start< destination){
 return (destination-start)* 264;
}else{
    return (start- destination)* 264;
}
}

function calculatesFarePrice(start, destination){
let feetPerBlock =264;
let first400FeetFree =400;
let baseFare = 2.56;
let over2FeetCharge =25;
let maxDistance = 2500;
let distance = Math.abs(destination-start);

if (distance <= first400FeetFree){
    return 0;
}
else if(distance <= 2000){
return baseFare + (distance - first400FeetFree) / (feetPerBlock * 0.02);
}
else if(distance > 2000 && distance <= maxDistance){
return over2FeetCharge
}
else {
return 'Cannot travel far'
}
}

console.log(calculatesFarePrice(0, 400));