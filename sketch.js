// create all the variables
var hammer;
var plane;
var stone;
var rubber;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 
  // create the world and engine
    engine = Engine.create();
	world = engine.world;


  
	//Create the Bodies Here.
	plane = new Plane(400, 600, 800, 20);
  
  rubber = new Rubber(400, 100)
  
  
  stone = new Stone(190, 300);

  hammer = new Hammer(200, 200, 100, 20);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
     // show everything
  plane.display();
  hammer.display();
  rubber.display();
  stone.display();
  
  drawSprites();
 
}



