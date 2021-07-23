function Ball(x,y,radius,color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: (Math.random() - 0.5)*2,
    y: (Math.random() - 0.5)*2
  }
  this.mass = radius;

  this.update = (ballArray)=>{
    this.draw();

    for(let i = 0; i < ballArray.length; i++){
      if(this === ballArray[i]) continue;
      if(calculateDistance(this.x,this.y,ballArray[i].x,ballArray[i].y) - (this.radius + ballArray[i].radius) < 0){
        resolveCollision(this,ballArray[i]);
      }
    }

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
      this.velocity.x = -this.velocity.x
    }
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
      this.velocity.y = -this.velocity.y;
    }
    
    this.x += this.velocity.x;
    this.y += this.velocity.y; 
  }

  this.draw = ()=>{
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

const resolveCollision = (ball, anotherBall)=>{
  // let { radius: m1, velocity: v1 } = ball;
  // let { radius: m2, velocity: v2 } = anotherBall;

  // const v1Final = {
	// 	x: ((m1 - m2) / (m1 + m2)) * v1.x + ((2 * m2) / (m1 + m2)) * v2.x,
	// 	y: ((m1 - m2) / (m1 + m2)) * v1.y + ((2 * m2) / (m1 + m2)) * v2.y,
	// };
	// const v2Final = {
	// 	x: ((2 * m1) / (m1 + m2)) * v1.x + ((m2 - m1) / (m2 + m2)) * v2.x,
	// 	y: ((2 * m1) / (m1 + m2)) * v1.y + ((m2 - m1) / (m2 + m2)) * v2.y,
	// };

	// ball.velocity = v1Final;
	// anotherBall.velocity = v2Final;


  const xVelocityDifference = ball.velocity.x - anotherBall.velocity.x;
  const yVelocityDifference = ball.velocity.y - anotherBall.velocity.y;
  
  const xDistance = anotherBall.x - ball.x;
  const yDistance = anotherBall.y - ball.y;

  if(xVelocityDifference * xDistance + yVelocityDifference * yDistance >= 0){
    const angle = -Math.atan2(anotherBall.y - ball.y, anotherBall.x - ball.x);

    const m1 = ball.mass;
    console.log(m1);
    const m2 = anotherBall.mass;
    console.log(m2);

    const u1 = rotate(ball.velocity, angle);
    const u2 = rotate(anotherBall.velocity, angle);

    const v1 = { x:u1.x * (m1-m2) / (m1+m2) + u2.x * 2 * m2 / (m1+m2), y: u1.y};
    const v2 = { x:u2.x * (m1-m2) / (m1+m2) + u1.x * 2 * m2 / (m1+m2), y: u2.y};

    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    ball.velocity.x = vFinal1.x;
    ball.velocity.y = vFinal1.y;

    anotherBall.velocity.x = vFinal2.x;
    anotherBall.velocity.y = vFinal2.y;
  }
}


