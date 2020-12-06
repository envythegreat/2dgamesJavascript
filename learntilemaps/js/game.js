const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  // zoom:3,
  pixelaArt:true,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 500 },
        debug: true
      }
  }
};

const game = new Phaser.Game(config)
// game-container/
let map;
let player;
let start;


function preload() {
  this.load.image('sky', './assets/sky.png')
  this.load.image("cartoon", "./assets/cartoon.png");
  this.load.tilemapTiledJSON("map", "./js/map/cartoon.json")
  this.load.image('spike', './assets/spike.png')
  this.load.spritesheet('player','./assets/dude.png',{ frameWidth: 32, frameHeight: 48 });
}

function create(){


  this.add.image(0, 0, 'sky').setOrigin(0,0).setScale(2, 0.8)
  map = this.make.tilemap({key:"map"});
  let tileset = map.addTilesetImage("cartoon");
  let layer = map.createStaticLayer('Platform', tileset, 0, 0);
  layer.setCollisionByExclusion(-1, true);
  // map.setCollisionBetween(1, 999, true);
  start = map.objects[0].objects[0]; 
  player = this.physics.add.sprite(start.x+20, start.y, 'player');
  // player.setBounce(false);
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, layer);
}


function update(time, delta) {
  // player.body.setVelocity(1)
}