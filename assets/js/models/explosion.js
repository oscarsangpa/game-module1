class Explosion {
    constructor(ctx, x, y) {

        this.ctx = ctx;
        this.x = x;
        this.y = y
        this.width = 70;
        this.height = 70;

        
        this.img = new Image()
    this.img.src = '/assets/images/explosion-sprite.png'
    this.img.isReady = false
    this.img.onload = () => {
      this.img.isReady = true
    }

    this.horizontalFrames = 5
    this.verticalFrames = 4

    this.xFrame = 0
    this.yFrame = 0

    this.tick = 0
  }

  draw() {
    if (this.img.isReady) {
      console.log('muere');
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
    }

    this.tick++
  }

  move(onGameOver) {
    if (this.tick % 5 === 0) {
      this.xFrame++
      if (this.tick % 25 === 0) {

          this.yFrame++
      }

      if (this.xFrame >= this.horizontalFrames) {
        this.xFrame = 0
      }
      if (this.yFrame >= this.verticalFrames) {
        onGameOver()  
      }
    }
}
}