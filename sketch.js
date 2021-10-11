
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left, right;

function preload()
{
	
}

function setup() {

	var ball_options = {
		isStatic:false,
		restitution:0.75,
		friction:0,
		density:1.3
	}

	var ground_options = {
		isStatic:true,
	}
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,10,ball_options);
  	World.add(world,ball);

	ground = Bodies.rectangle(400,650,800,15,ground_options);
	World.add(world,ground);

	left = Bodies.rectangle(600,600,15,100,ground_options);
	World.add(world,left);

	right = Bodies.rectangle(700,600,15,100,ground_options);
	World.add(world,right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();

  noStroke();

  fill("green");
 
  ellipse(ball.position.x,ball.position.y,10);

  fill("white");


  rect(ground.position.x,ground.position.y,800,15);

  rect(left.position.x,left.position.y,15,100);
  rect(right.position.x,right.position.y,15,100);

  if(keyDown("UP") && ball.position.x<300){
	  propellBall();
  }
}

function propellBall(){
	Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.75,y:-1.25});
}



