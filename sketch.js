
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,paper1;
var bar1,bar2,bar3,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50,650,20);
	bar1 = new Dustbin(600,640,10,70);
	bar2 = new Dustbin(740,640,10,70);
	bar3 = new Dustbin(670,670,150,10);
	ground = new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  paper1.display();
  bar1.display();
  bar2.display();
  bar3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
	}
}


