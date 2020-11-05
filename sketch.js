var bullet,thickness,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  thickness=random(22,83)
  weight=random(400,1500);
  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
  bullet.shapecolor=("white");
 
  wall=createSprite(1400,200,thickness,height/2);
  wall.shapecolor= ("grey");

}

function draw() {
  background("black"); 
 if (collid(bullet,wall)) {
   bullet.velocity=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if (damage>10) {
     wall.shapecolor=("red");
   }
   else{
     wall.shapecolor=("grey");
     bullet.shapecolor=("white");
   }
   if (damage<10) {
    wall.shapecolor=("green");
    bullet.shapecolor=("white");
  }
  else{
    wall.shapecolor=("grey");
  }
 }
  
  drawSprites();
}
function collid(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else{
return false;}