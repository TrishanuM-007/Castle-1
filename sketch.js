const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,height,800,40);
  brick1 = new Brick(150,200,30,300);
  brick2 = new Brick(400,200,400,150);
  brick3 = new Brick(650,200,30,300);
  brick4 = new Brick(400,50,80,150);
  brick5 = new Brick(70,50,95,95);
  brick6 = new Brick(730,50,95,95);
  brick7 = new Brick(250,50,50,75);
  brick8 = new Brick(550,50,50,75);
}

function draw() {
  background(0,25,60);
  Engine.update(engine);
  ground.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();

  
}