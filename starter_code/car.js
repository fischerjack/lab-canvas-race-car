class Car{
  constructor(imgSrc){
    this.x = 250;
    this.y =  375;
    this.xVel = 0;
    this.maxVel = 6;
    this.friction = 0.9;
    this.img = new Image();
    this.img.src = imgSrc;
    this.shake = 0;
    this.frameCount = 0;
    this.height = 100;
    this.width = 100;
  }



  //Move left and right
  drive(keyArr){
    if(keyArr[37] && this.xVel < this.maxVel){
      //Left
      this.xVel--;

    }else if(keyArr[39] && this.xVel > -this.maxVel){
      //Right
      this.xVel++;
    }

    this.xVel *= this.friction;

    this.x += this.xVel;
  }
  //Draw the car
  draw(ctx){

    if(this.x > 400){
      this.x = 400
      this.xVel = 0;
    } 

    if(this.x < 0){
      this.x = 0;
      this.xVel = 0;
    }

    //Draw image
    ctx.drawImage(this.img, this.x + this.shake, this.y, this.width, this.height);

    //Shake the car as an idle animation every 15 frames
    if(this.frameCount == 15){
      if(this.shake > 3) this.shake = 0;
      this.shake += 3;
      this.frameCount = 0;
    }
    this.frameCount++;
  }
}