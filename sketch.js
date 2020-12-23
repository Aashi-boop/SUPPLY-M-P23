



var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;



	myengine = Engine.create();
	myworld = myengine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {isStatic:true});
	World.add(myworld, packageBody);
	

	
	
     base1= new Container(width/2,650,200,20)
	 base2= new Container(width/2-100,610,20,100)
	 base3= new Container(width/2+100,610,20,100)
	 base4= new Container(width/2,635,200,25)  //invisible above bottom

	 ground= new Ground(width/2,660,width,10)

	
	 Engine.run(myengine);
  
} 
  


function draw() {
  rectMode(CENTER);
  background("teal");

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

 

  base1.display()
  base2.display()
  base3.display()
  ground.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
    Matter.Body.setStatic(packageBody,false)
	helicopterSprite.velocityX=4
	
  }
}









  



