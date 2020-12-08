var helicopterIMG, helicopter, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var lineDown, lineLeft;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadAnimation("1.png", "2.png", "3.png", "4.png");
	packageIMG = loadImage("package.png");
	helicopter = loadSound("helicopter.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, height/4 - 90, 10,10);
	helicopterSprite.addAnimation("fly",helicopterIMG)
	helicopterSprite.scale = 1;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width / 2, height / 4 - 90, 50, 50, { restitution: 0.8, isStatic: true });
	World.add(world, packageBody);

	//Create a Objects
	ground = new Ground(width / 2, height - 30, width, 20);

	lineDown = new Box(width / 2, height - 50, 200, 20);
	lineLeft = new Box(width / 2 - 90, height - 90, 20, 100);
	lineRight = new Box(width / 2 + 90, height - 90, 20, 100);

	Engine.run(engine);

	helicopter.play();
	helicopter.loop();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y = packageBody.position.y

  ground.display();
  lineLeft.display();
  lineRight.display();
  lineDown.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	 Matter.Body.setStatic(packageBody, false);
    
  }
}



