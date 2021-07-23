const init = ()=>{
  for(let i = 0; i < noOfBalls; i++){
    const radius = generateRandomFromRange(ballRadiusRange.min, ballRadiusRange.max);
    let x = (Math.random () * (canvas.width - radius * 2)) + radius;
    let y = (Math.random () * (canvas.height - radius * 2)) + radius;
    const color = generateRandomColor();
    if(i != 0){
      for(let j = 0; j < ballArray.length; j++){
        let ballDistance = calculateDistance(x,y,ballArray[j].x,ballArray[j].y);
        if( ballDistance - (radius + ballArray[j].radius) < 0){
          x = (Math.random () * (canvas.width - radius * 2)) + radius;
          y = (Math.random () * (canvas.height - radius * 2)) + radius;
          j = -1;
        }
      }
    }
    ballArray.push(new Ball(x, y, radius, color));
  }
}

const animate= ()=>{
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);
  ballArray.forEach(ball=>{
    ball.update(ballArray);
  })
}

init();
animate();
