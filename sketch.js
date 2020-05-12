const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine , world;


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  
}

function draw() {
  background(0 , 0 , 0); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill(255);
  
  rect(100 , 500 , 70 , 200);
  square(75 , 390 , 20);
  square(100 , 390 , 20);
  square(125 , 390 , 20);

  rect(700 , 500 , 70 , 200);
  square(675 , 390 , 20);
  square(700 , 390 , 20);
  square(725 , 390 , 20);

  rect(175 , 490 , 40 , 220);
  rect(625 , 490 , 40 , 220);
  triangle(155 , 380 , 195, 380 , 175 , 320);
  triangle(645 , 380 , 605, 380 , 625 , 320);

  rect(400 , 500 , 100 , 200);
  
  rect(400 , 325 , 20 , 150);
  circle( 400 , 350 , 100);
  triangle(350 , 400 , 350 , 350 , 400 , 400);
  triangle(450 , 400 , 450 , 350 , 400 , 400);
  triangle(390 , 250 , 410 , 250 , 400 , 200);

  square(245 , 580 , 40);
  square(305 , 580 , 40);
  square(555 , 580 , 40);
  square(495 , 580 , 40);
}