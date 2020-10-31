const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var box1,box2;
var ground1;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 box1=new Box(200,180,20,20); 
 box2=new Box(200,200,90,20);
 ground1 =new Ground();
  
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
  
  
  
}