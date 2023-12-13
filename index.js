// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //distanceFromHqInBlocks(someValue);
    return someValue - 42;

  }
  const headquartersStreet = 42;
  const feetPerBlock = 264; 
  
  function distanceFromHqInBlocks(blocks) {
     const distance = Math.abs(blocks - 42);
      return  distance;
  }
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; 
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264; 
    return distance;
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264; 

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}

// function calculatesFarePrice(feet){
//   if(distanceFromHqInFeet<=400){
//     return "Return fare to the customer";
//   } else if (distanceFromHqInFeet>400 && distanceFromHqInFeet <=2000){
//     return "feet*0.02";
//   } else if (distanceFromHqInFeet>2000 && distanceFromHqInFeet){
//     return "Flat fare";
//   } 
//   }

