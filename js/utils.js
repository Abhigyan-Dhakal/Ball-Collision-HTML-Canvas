//All necessary utility functions

function generateRandomFromRange(min,max){
  return Math.floor(Math.random() * (max-min) + min);
}

const generateRandomColor = ()=>{
  const colorArrayLength = colorArray.length;
  const randomColorIndex = Math.floor(Math.random() * colorArrayLength);
  return colorArray[randomColorIndex];
}

const calculateDistance= (x1,y1,x2,y2)=>{
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}

const rotate = (velocity,angle)=>{
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

