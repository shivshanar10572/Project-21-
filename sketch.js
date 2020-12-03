var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1200,800);
  wall = createSprite(1200, 200, thickness, height/2);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  hadCollided();

  if(hasCollided(bullet,wall))
  {
  bullet.velocityX=0;
  var damage=0.5 *weight *speed *speed/(thickness* thickness* thickness);
  
  
  if(damage>10)
  {
  wall.shapeColor=color(255,0,0);
  }
  
  
  if(damage<10)
   {
  wall.shapeColor=color(0,255,0);
   }
  
   }

  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{

bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
 return false;


}









