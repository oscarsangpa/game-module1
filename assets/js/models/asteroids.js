class Asteroids {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x
        this.y = y
    
        this.width = 25
        this.height = 150
    
        this.vx = -3

        this.img = new Image()
        this.img.src = '/assets/images/asteroid.png'
        this.img.isReady = false
        this.img.onload = () => {
          this.img.isReady = true
        }

      }
    
      draw() {
        this.ctx.save()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()
      }
    
      move() {
        this.x += this.vx
      }
    }
        
