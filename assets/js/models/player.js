class Player {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 200;
        this.y = 80;

        this.size = 50;

        this.speed = 3;

        this.vx = 0;

        this.width = 34
        this.height = 47


        this.movements = {
            top: false,
            left: false,
            right: false
        }

        this.img = new Image()
        this.img.src = '/assets/images/PC Computer - Star Wars Galactic Battlegrounds - X-Wing.png'
        this.img.isReady = false
    
        this.img.onload = () => {
          this.img.isReady = true
        }
    

        this.horizontalFrames = 6
        this.verticalFrames = 6

        this.xFrame = 0
        this.yFrame = 0

        this.tick = 0
    }

    draw() {
      this.ctx.drawImage(
        this.img,
        (this.img.width * this.xFrame) / this.horizontalFrames,
        (this.img.height * this.yFrame) / this.verticalFrames,
        this.img.width / this.horizontalFrames,
        this.img.height / this.verticalFrames,
        this.x,
        this.y,
        this.width,
        this.height
      )
  
      this.tick++
    }
        // this.ctx.save();
    
        // this.ctx.fillStyle = '#FFF';
        // this.ctx.fillRect(this.x, this.y, this.size, this.size);
    
        // this.ctx.restore();
      

    setUpListeners(event){
        const status = event.type === 'keydown';

        switch(event.keyCode) {
        case TOP_KEY:
        this.movements.top = status;
        break;
        case RIGHT_KEY:
        this.movements.right = status;
        break;
         case LEFT_KEY:
        this.movements.left = status;
        break;
         default:
        break;
    }
}

    move(){
    if(!this.movements.right && !this.movements.left && !this.movements.top) {
        this.vx = 0;
    }
    if (this.movements.right) {
      this.vx = this.speed;
    }
    if (this.movements.left) {
      this.vx = -this.speed;
    }
    this.x += this.vx;
    if (this.y <= 50) {
      this.y = 50;
    }
    if (this.x >= 410) {
        this.x = 410;
      }
}
}
