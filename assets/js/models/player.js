class Player {
    constructor(ctx, life) {
        this.ctx = ctx;
        this.width = 90;
        this.height = 580;


        this.x = this.ctx.canvas.width /2 - this.width/2;
        this.y = this.ctx.canvas.height - this.height;


        this.size = 50;

        this.speed = 6;


        this.width = 70;
        this.height = 70;


        this.movements = {
            //top: false,
            left: false,
            right: false,
            //down: false,
        }

        this.laserShots = [];

        this.img = new Image()
        this.img.src = './assets/images/X-Wing-sprite.png'
        this.img.isReady = false

        this.img.onload = () => {
          this.img.isReady = true
        }

        this.laserSound = new Audio('/assets/audio/laser-shot.mp3');
        this.laserSound.volume = 0.5;


        this.horizontalFrames = 5;
        this.verticalFrames = 6;

        this.xFrame = 0;
        this.yFrame = 0;

        this.tick = 0;

        this.canShot = true;
    }

    draw() {
      this.laserShots.forEach(shot => shot.draw())

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

      this.tick++;
    }


    setUpListeners(event){
        const status = event.type === 'keydown';

        switch(event.keyCode) {
        /*case TOP_KEY:
          this.movements.top = status;
          break;*/
        case RIGHT_KEY:
          this.movements.right = status;
          break;
        case LEFT_KEY:
          this.movements.left = status;
          break;
        /*case DOWN_KEY:
          this.movements.down = status;
          break;*/
        case SPACE_BAR:
          this.canShot && this.addLaserShot()
          this.laserSound.play();
          this.laserSound.currentTime = 0;
          break;
        default:
          break;
    }
}

    move(){
    if(!this.movements.right && !this.movements.left /*&& !this.movements.top && !this.movements.down*/) {
      this.vx = 0;
      this.vy = 0;
    }
    /*if (this.movements.top){
      this.vy = -this.speed;
    }
    if (this.movements.down) {
      this.vy = this.speed;
    }*/
    if (this.movements.right) {
      this.vx = this.speed;
    }
    if (this.movements.left) {
      this.vx = -this.speed;
    }
      this.x += this.vx;
      this.y += this.vy;


    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.x + this.width >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width;
    }
    if (this.y <= 0) {
      this.y = 0;
    }

    this.laserShots.forEach(shot => shot.move())
 }

 addLaserShot(){
    this.canShot = false;
    setTimeout(() => {
      this.canShot = true;
    }, 500)
    this.laserShots.push(new LaserShot(this.ctx, this.x + (this.width/2 - 12), this.y))

 }

}

