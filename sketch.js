 var car, wall;
 var speed , weight;


function setup() {
  createCanvas(800,400);

speed= random(55,90)
weight=random(400,1500)
car = createSprite(50,200,50,50)
wall = createSprite(550,200,60,height/2)



}

function draw() {
  background("black")

  if (car.isTouching(wall)){
    car.velocityX=0
  }
  wall.shapeColour="black";

if (deformation>180){
  car.shapeColour=colour(225,0,0)
  }

  if (deformation<180&& deformation>100){
    car.shapeColour=colour(0,225,0)
    }

    if (deformation<100){
      car.shapeColour=colour(230,230,0)
      }

  background(255,255,255);  
car.velocityX= speed;

if (wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation = 0.5*height *weight *speed/22509;
  }


text("Speed: ", Math.round(speed), 10,10) 

  drawSprites();
}