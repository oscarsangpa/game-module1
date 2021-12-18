class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.enemies = [
            /*firt line*/
            new Enemies(ctx, 8, 540),
            new Enemies(ctx, 64, 540),
            new Enemies(ctx, 120, 540),
            new Enemies(ctx, 175, 540),
            new Enemies(ctx, 229, 540),
            new Enemies(ctx, 282, 540),
            new Enemies(ctx, 336, 540),
            new Enemies(ctx, 390, 540),
            /*second line*/
            new Enemies(ctx, 8, 480 ),
            new Enemies(ctx, 64, 480),
            new Enemies(ctx, 120, 480),
            new Enemies(ctx, 175, 480),
            new Enemies(ctx, 229, 480),
            new Enemies(ctx, 282, 480),
            new Enemies(ctx, 336, 480),
            new Enemies(ctx, 390, 480),
            /*third line*/
            new Enemies(ctx, 8, 420 ),
            new Enemies(ctx, 64, 420),
            new Enemies(ctx, 120, 420),
            new Enemies(ctx, 175, 420),
            new Enemies(ctx, 229, 420),
            new Enemies(ctx, 282, 420),
            new Enemies(ctx, 336, 420),
            new Enemies(ctx, 390, 420)
        ]

        this.intervalId = undefined;
        
    }

    start() {
        if (!this.intervalId) {
        this.intervalId = setInterval(() => {
        this.clear()
    
        this.move()
    
        this.draw()
        this.checkCollisions()
        }, 1000 / 60)

    }
}

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.height, this.ctx.canvas.width);
      }

      drawScore() {
        this.ctx.fillText(`Score: ${this.score}`, 100, 100)
      }

    draw() {
        this.background.draw();  
        this.player.draw();
        this.enemies.forEach(enemies => enemies.draw());
        
    }

    move() {
        this.background.move();
        this.player.move();
        // this.enemies.move();
    }

    setUpListeners(event) {
        this.player.setUpListeners(event);
    }

    checkCollisions() {
        this.enemies.forEach((enemy, idx) => {
            this.player.laserShots.forEach((laser, laserIdx) => {
                if (laser.collidesWith(enemy)) {
                    this.enemies.splice(idx, 1)
                    this.player.laserShots.splice(laserIdx, 1)
                }
            })
        });
    }

}