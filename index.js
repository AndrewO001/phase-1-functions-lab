// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    distanceFromHqInBlocks = 42 - someValue;  
    
    return Math.abs(distanceFromHqInBlocks);
}


  function distanceFromHqInFeet(someValue) {
    
    return ((Math.abs(42 - someValue))*264);
        
  }


  function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264);
  }



  function calculatesFarePrice(start, destination) {
      const distance = ((Math.abs(start - destination) * 264))
    if (distance < 400){
        return (0)
      } else if (distance < 2000){
        return ((distance-400) * .02)
    }else if (distance < 2500){
        return (25)
    }else 
        return ('cannot travel that far')
}
      
  ;