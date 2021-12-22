const canvas = document.getElementById('game')

const ctx = canvas.getContext('2d')

const game = new Game(ctx);

document.getElementById('start-button').onclick = (e) => {
  e.preventDefault();
  startGame();
};

function startGame() {
  game.start();
}

window.addEventListener('keydown',(event) =>{
  game.setUpListeners(event);
})

window.addEventListener('keyup',(event) =>{
  game.setUpListeners(event);
});


