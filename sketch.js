var fixedRect,movingRect;
var backgroundimg;
var boyimg;
var bg;
var sea;
var boy;
var ball,ballImg;
var dock1,dock1Img;
var dock2,dock2Img;

function preload() {
  backgroundimg = loadImage("image/background.jpg");
  boyimg = loadImage("image/boy.png");
  ballImg = loadImage("image/ball.png");
  dock1Img = loadImage("image/docks64.jpg");
  dock2Img = loadImage("image/docks64.png")
}

function setup() {
  createCanvas(1200,800);

  bg = createSprite(0,0,1200,800);
 bg.addImage ("bgImg",backgroundimg);
 bg.velocityX=-2;
 bg.x = bg.width/2;
   

 boy = createSprite(100,400,10,10);
 boy.addImage ("boy1",boyimg);
 boy.scale = 0.2;
 
 
 
}

function draw() {
  background(0); 
  
  if(keyDown("up")){
    boy.y=boy.y-5;
  }

  if(keyDown("down")){
    boy.y=boy.y+5;
  }
 
  if (bg.x<0) {
    bg.x=bg.width /2;
  }

  spawnBall();
  spawnDocks();
  
  drawSprites();
}

function spawnBall() {
  if(frameCount%100===0){
  var rand = Math.round(random(10,780))
  ball = createSprite(1200,rand,10,10);
  ball.addImage("ball",ballImg);
  ball.velocityX =-3;
  ball.scale = 0.2;
  ball.lifetime = 450;
  }
}

function spawnDocks() {
  if(frameCount%500===0){
  var rand = Math.round(random(50,750));
  var dockRand =Math.round(random(1,2));
  if(dockRand===1){
    dock1 = createSprite(1200,rand,10,10);
    dock1.addImage("docks",dock1Img);
    dock1.velocityX =-3;
    dock1.scale = 0.5;
    dock1.lifetime = 450;
  }
  else if(dockRand===2){
  dock2 = createSprite(1200,rand,10,10);
  dock2.addImage("docks1",dock2Img);
  dock2.velocityX =-5;
  dock2.scale = 0.5;
  dock2.lifetime = 450;
  }
  
  }
}