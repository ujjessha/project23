var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(width/2,height-50,200,20);
	box1.shapeColor=color("red");

	box2=createSprite(300,585,20,150);
	box2.shapeColor=color("red");

	box3=createSprite(500,585,20,150);
	box3.shapeColor=color("red");

	console.log(box1.y);



	engine = Engine.create();
	world = engine.world;


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = Bodies.rectangle(width/2,height-50,200,20, {isStatic:false} );
	 World.add(world, box1);

	 box2 = Bodies.rectangle(300,585,20,150 , {isStatic:false} );
     World.add(world, box2);


	 box3 = Bodies.rectangle(500,585,20,150 , {isStatic:false} );
     World.add(world, box3);
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
  
  else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)

 } 
 
  else if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)

    
  }

}



