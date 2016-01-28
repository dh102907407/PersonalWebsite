
var y1=0,y2=800,speed=1;

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var backgroundImg;

function setup(){
createCanvas(windowWidth, windowHeight);
backgroundImg = loadImage("img/backgroundTest.jpg");
print(windowWidth);
}

function draw(){
print(windowWidth);
      drawBackground();
}

function drawBackground(){
  y1-=speed;
  y2-=speed;
  if (y1<=-800){
  y1+=1600;
  }
  if (y2<=-800){
  y2+=1600;
  }
  push();
  translate(0,y1);
  image(backgroundImg, 0,0);
  pop();
  push();
  translate(0,y2);
  image(backgroundImg, 0,0);
  pop();
  
  
}