const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var snow;

function preload(){
  backgroundImg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(1200,600);
  
  //engine = Engine.create();
  //world = engine.world;
  snow = new Snow(random(0,1200),0)
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  /*if(frameCount % 60 === 0){
    snow.push(new Snow (random(0,800),0))
  }
  for (var l = 0 ; l < snow.length; l++){
    snow[l].display();
}*/

  
}