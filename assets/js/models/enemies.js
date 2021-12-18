class Enemies {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.laserShots = [];

        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 50;

        this.img = new Image();
        this.img.src = './assets/images/Tie-interceptor.png'
        this.img.isReady = false
    
        this.img.onload = () => {
          this.img.isReady = true
        }
    }
    
    draw() {
      this.laserShots.forEach(shot => shot.draw())

      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }

    move(){
      this.laserShots.forEach(shot => shot.move())
    }

  addLaserShot(){
    this.laserShots.push(new LaserShot(this.ctx, this.x + (this.width/2 - 12), this.y, true))
  }
}