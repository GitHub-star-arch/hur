var database;
var form,player,game,gameState=0,playerCount, allPlayers;
var play1, play2, play3, play4, players;
var c1i,c2i,c3i,c4i, trasck;

function preload() {
  c1i = loadImage('image/car1.png');
  c2i = loadImage('image/car2.png');
  c3i = loadImage('image/car3.png');
  c4i = loadImage('image/car4.png');
  trasck = loadImage('image/track.jpg');
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-40,displayHeight-180);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  
}
