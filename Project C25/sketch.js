
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj;	
var world, engine;


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	dustbinObj=new Dustbin(800,650);
	paperObj = new Paper(100, 100, 80);
	groundObject=new Ground(width/2, 670, width, 20);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW);
	Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 130, y: -145});
}

