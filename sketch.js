var helicopterIMG, helicopterSprite, packageSprite,packageIMG, rect1, rect2, rect3;
var packageBody,ground, rect1Body, rect2Body, rect3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rect1 = createSprite(300, 610, 20, 100);
	rect2 = createSprite(500, 610, 20, 100);
	rect3 = createSprite(400, height-50, 200, 20);
	rect1.shapeColor = "red";
	rect2.shapeColor = "red";
	rect3.shapeColor = "red";
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	rect1Body = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true});
	World.add(world, rect1Body);

	rect2Body = Bodies.rectangle(500, 610, 20, 100, {isStatic:true});
	World.add(world, rect2Body);

	rect3Body = Bodies.rectangle(400, height-50, 200, 20, {isStatic:true});
	World.add(world, rect3Body);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect3.x = rect3Body.position.x
  rect3.y = rect3Body.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    Matter.Body.setStatic(rect3Body, true);
  }
}


