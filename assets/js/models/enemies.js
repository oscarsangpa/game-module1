class Enemies {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        // this.enemies = [];

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
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
          )
        }

    move(){
      do {
        this.y--;
      } while (this.ctx.canvas.height !== 300);
}

  enemieShot() {
    addLaserShot()

}
}