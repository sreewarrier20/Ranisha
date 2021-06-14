var player1, player2,player3,player4, player1image,player2image,player3image, player4image;
var player;
var gameState = 0;
var count = 2;
var trackimg, crosstrackimg, ttrackimg,ytrackimg;
var track;
var op1, op2, op3;
var police;
var play1;
var distance = 0;
var policeimg, image1,image2,image3;
function preload(){

trackimg = loadImage("tracks.png");

player1image = loadImage("whitecar.png");
player2image = loadImage("redcar.png");
player3image = loadImage("yellowcar.png");
player4image = loadImage("bluecar.png");

policeimg = loadImage("policecar.png");

image1 = loadImage("ob1.png");
image2 = loadImage("ob2.png");
image3 = loadImage("ob3.png");


groundimg=loadImage("ground.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
 

 player1 = createSprite(displayWidth/ 4 , displayHeight/2 + 120);
 player1.addImage(player1image)
 player1.scale = 0.07



 player2 = createSprite(displayWidth/ 4 + 210, displayHeight/2 + 120 );
 player2.addImage(player2image)
 player2.scale = 0.07



 player3 = createSprite(displayWidth/ 2 + 100 , displayHeight/2 + 120);
 player3.addImage(player3image)
 player3.scale = 0.07
 


 player4 = createSprite(displayWidth/ 2 + 300 , displayHeight/2 + 120 );
 player4.addImage(player4image)
 player4.scale = 0.6;



ob1 =  createSprite(10,10);
ob1.visible= false;
ob2 = createSprite(10,10);
ob2.visible = false;

ob3 = createSprite(20,20);
ob3.visible= false;
police = createSprite(300,30);
police.visible = false;
 ob1.addImage(image1);
 ob3.addImage(image3);
 ob2.addImage(image2);

 police.addImage(policeimg);

angleMode(DEGREES)
 
}

function draw() {
  background(groundimg);  
  image(trackimg, 0, -10 * height , 5*width , 11 * height);
console.log(mouseX+","+mouseY)
  drawSprites();
  if (gameState === 0){
    textSize(25);
    fill("blue");
  text("Press your most favorite car to start!",displayWidth / 2 + -10 , displayHeight / 2 - 100);
 text("Press B key to apply ",displayWidth / 2, displayHeight / 2 - 70)}
  if (gameState === 0){
  if (mousePressedOver(player1)){
    player2.destroy();
    player3.destroy();
    player4.destroy();
    player1.x = width/5;
    player = player1
    gameState = 1
  }
  if (mousePressedOver(player2)){
    player1.destroy();
    player3.destroy();
    player4.destroy();
    player2.x = width/5;
    player = player2
    gameState = 1
  }

  if (mousePressedOver(player3)){
    player2.destroy();
    player1.destroy();
    player4.destroy();
    player3.x = width/5;
    player = player3;
    gameState = 1;
  }
  if (mousePressedOver(player4)){
    player2.destroy();
    player3.destroy();
    player1.destroy();
    player4.x = width/5;
    player = player4;
    gameState = 1;
  }

}





if ( keyIsDown(UP_ARROW)){
player.y-=5;
player.rotation=0;
camera.position.y = player.y;
camera.position.x = player.x;

}
 
   
if(keyIsDown(RIGHT_ARROW))
{
  player.rotation=90;
  player.x+=5;
  camera.position.x = player.x;
camera.position.y = player.y;

}

if(keyIsDown(LEFT_ARROW))
{
  player.rotation=-90
  player.x-=5
  camera.position.x = player.x;
camera.position.y = player.y;
 
}

if(keyIsDown(DOWN_ARROW))
{
  player.rotation=-180;
  player.y+=5;
  camera.position.x = player.x;
camera.position.y = player.y;

}





   
   if ( keyWentDown("b") && count > 0){
      player.velocityY = 0
      
     count = count - 1;
     }
  

}