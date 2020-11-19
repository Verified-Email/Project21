var bullet;
var ground;
var wall, thickness;
var weight, speed, damage;


function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  bullet = createSprite(100, 200, 20, 20);
  
  ground = createSprite(400,385,800,30);
  ground.shapeColor = "green";

  wall = createSprite(758.5,185,thickness,370);
  wall.shapeColor = "brown";

  bullet.velocityX = speed;
}

function draw() {
  background(0,255,255); 

  if(hasCollided(bullet,wall)) {
    
    bullet.velocityX = 0;

    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}


function hasCollided(object1,object2) {

  if (object2.x - object1.x < (object1.width + object2.width)/2) {
    return true;
  }
  else {
    return false;
  }
}