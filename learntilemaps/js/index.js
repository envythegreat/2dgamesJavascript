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
        debug: false
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
  this.load.image("terrain-tilemap", "./assets/terrain-tilemap.png");
  this.load.tilemapTiledJSON("map", "./js/map/mapknow.json")
  this.load.spritesheet('player','./assets/dude1.png',{ frameWidth: 32, frameHeight: 48 });
}

function create(){


  this.add.image(0, 0, 'sky').setOrigin(0,0).setScale(2, 0.8)
  map = this.make.tilemap({key:"map"});
  let tileset = map.addTilesetImage("terrain-tilemap");
  let layer = map.createStaticLayer('groun', tileset, 0, 0);
  layer.setCollisionByExclusion(-1, true);
  // map.setCollisionBetween(1, 999, true);
  start = map.objects[0].objects[0];
  player = this.physics.add.sprite(start.x+20, start.y, 'player');
  // this.player.setBounce(0.6);
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, layer);
}


function update(time, delta) {
  // player.body.setVelocity(1)
}