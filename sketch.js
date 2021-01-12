var PLAY=1
var END=0
var Gamestate=PLAY


var boyImg,boy
var ground,GROUND
var cloud,cloudImg,cloudsGroup
var obstacle,obstacleImg,obstacleGroup


function preload(){
boyImg=loadImage("animated-cat-image-0072.gif")
cloudImg=loadImage("fish-2-cartoon-illustration-hand-drawn-animation-transparent-cartoon-illustration-hand-drawn-animation-transparent_njfhuzh_thumbnail-180_10.jpg")
  obstacleImg=loadImage("download (1).jfif")
}

function setup() {
 createCanvas(400,400)
  
  boy=createSprite(200,200,20,20)
  boy.addImage("boy",boyImg)
  boy.scale=0.3
  

  ground=createSprite(20,350,700,30)
ground.shapeColor="GREEN"

  GROUND=createSprite(400,400,800,70)
  GROUND.shapeColor="BROWN"
    cloudsGroup = new Group();
  obstacleGroup =new Group()
  
  
}

function draw() {
background("white") 
  
  
if(Gamestate===PLAY){
  
   
  if(keyDown("space"))
    {
      boy.velocityY = -10;
    }
  boy.velocityY = boy.velocityY +0.8;
    ground.velocityX = -4

   if (ground.x < 0){
      ground.x = ground.width/6;
    }

 

 
  
}
  if(Gamestate===END){

        if (boy.isTouching(obstacleGroup))   {
     size("20")
  stroke("red")
     text("gameover")
  
    Gamestate=END
  
     obstacleGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0); 
  
        }
        }
  
  
  if(keyDown("space"))
    {
      boy.velocityY = -10;
    }
  boy.velocityY = boy.velocityY +0.8;
    ground.velocityX = -4

   if (ground.x < 0){
      ground.x = ground.width/6;
    }

 
  boy.collide(ground)
   spawncloud();
  spawnobstacle()
  drawSprites()
}
function  spawncloud(){ 
if(frameCount%90===0)  {
  cloud=createSprite(400,200)
    cloud.velocityX = -6; 
  cloud.addImage(cloudImg)
  cloud.scale=0.2
  cloudsGroup.add(cloud)
}
}
function spawnobstacle(){
  if (frameCount%90===0){ 
    obstacle=createSprite(200,300)
    obstacle.velocityX = -7
    obstacle.addImage(obstacleImg)
    obstacle.scale=0.3
   obstacleGroup.add(obstacle)
    
    
  }
}









