var ghost, ghostImg
var tower, towerImg
var climber, climberImg, climberGroup
var  door, doorImg, doorGroup
var gameState="play"


function preload(){
  ghostImg= loadImage("ghost-standing.png");
  towerImg= loadImage("tower.png");
  doorImg= loadImage("door.png");
  climberImg= loadImage("climber.png");
  
  
}




function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,10,10);
  tower.addImage(towerImg);
  tower.velocityY=1
ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImg)
  ghost.scale=0.3
  climberGroup=new Group();
  doorGroup=new Group();
  
}

function draw(){
  background(0);
  if (gameState==="play"){
  doors_climbers();
  if(climberGroup.isTouching(ghost)||ghost.y>600) {
    ghost.velocityY=0
    gameState="end"
    
  }
    
  if (tower.y>400){
    tower.y=300
   
  }
   if(keyDown("left_arrow")){
     ghost.x=ghost.x-3
   }
  
   if(keyDown("right_arrow")){
     ghost.x=ghost.x+3
   }
  
   if(keyDown("space")){
     ghost.velocityY=-5
     
     
   }
  
  ghost.velocityY=ghost.velocityY +0.8
  
  
  
  
  
  
  
  
  drawSprites();
    
  }
  if (gameState==="end"){
    textSize(30)
    fill("red")
    text("gameover",250,250)
    
  }
  
  
}

function doors_climbers(){
  if (frameCount%240===0){
         
  door= createSprite(200,-50,10,10);
  door.addImage(doorImg);
  door.velocityY=1
  
  climber=createSprite(200,10,10,10);
  climber.addImage(climberImg);
  climber.velocityY=1
    
     door.x=Math.round(random(120,400))
    climber.x=door.x
    door.lifetime=800
    climber.lifetime=800
    doorGroup.add(door);
    climberGroup.add(climber);
    
    ghost.depth=door.depth
    ghost.depth+=1
    
    
}
}
  


