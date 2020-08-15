var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
   
  speed = random(55,90);
  weight = random(400, 1500);
  

  car = createSprite(30,200,60,30);
  wall = createSprite(1000,200,60,200);
  wall.shapeColor = color(80,80,80)
  car.velocityX = speed;
  

}

function draw() {
  background(0,0,0);  
  
  
  

  //if (isTouching(car,wall)){
    if (wall.x - car.x < (car.width+wall.width)/2){
      car.velocityX = 0;
      deformation = (0.5*weight*speed*speed)/22509;
      if(deformation>=180){
        car.shapeColor = color(255,0,0);
      }
      else if (deformation>=100){
        car.shapeColor = color(0,255,0);
      }
      else{
        car.shapeColor = color(230,230,0);
      }
  }
  drawSprites();
}

function isTouching(o1, o2){
  if (o2.x - o1.x<o1.width/2+o2.width/2&&
  o1.x-o2.x<o1.width/2+o2.width/2&&
  o1.y-o2.y<o1.height/2+o2.height/2&&
  o2.y-o1.y< o1.height+o2.height/2)
{ 
  return true
}
 else{
   return false
  }
  
  }