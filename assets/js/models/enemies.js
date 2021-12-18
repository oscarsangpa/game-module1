class Enemies {
    constructor(ctx) {
        this.ctx = ctx;
        this.enemies = [];

        this.x = 30;
        this.y = 30;

        this.width = 40;
        this.height = 40;

        this.img = new Image();
        this.img.src = './assets/images/Tie-Figther.png'
        this.img.isReady = false
    
        this.img.onload = () => {
          this.img.isReady = true
        }
    }
    
    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            550,
            this.width,
            this.height
          )
      
        }
}