var car,wall
var speed,weight

function setup() {
  
  speed=random(59,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocity=0
    var deformation=0.5*weight*speed*speed/22509
    if(deformation<180){
      car.shapeColor=colar(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=colar(230,0,0)
    }
    if(deformation<100){
      car.shapeColor=colar(0,255,0)
    }

  }
   

}

function draw() {
  background(255,255,255);  
  drawSprites();
}