
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, tree, ground;
var stone, slingshot;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImg = loadImage("images/boy.png");
	treeImg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200,500);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,475,1200,50);
	
  stone = new Stone(250,340,20);
  slingshot = new SlingShot(stone.body,{x:250,y:340});

  mango1 = new Mango(850,200,20);
	mango2 = new Mango(1020,180,20);
	mango3 = new Mango(800,170,20);
	mango4 = new Mango(900,90,20);
	mango5 = new Mango(940,140,20);

  //tree = new Tree(900,250,350,450);

	Engine.run(engine);
}


function draw() {
  background(65,165,255);
    
  imageMode(CENTER);
  image(boyImg,300,400,180,270);
  image(treeImg,900,250,350,450);

  fill("black")
  textSize(20);
  text("> use SPACE to retry",10,40);
 
  ground.display();

 // tree.display();
  
  stone.display();
  slingshot.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode ===32){
    slingshot.attach(stone.body);
    Matter.Body.setPosition(stone.body,{x:250,y:340});
  }
}

function detectCollision(lstone,lmango){
  mangoPos = lmango.body.position;
  stonePos = lstone.body.position;

  var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
  console.log(lstone.r);
  if(distance<=lstone.r + lmango.r){
    Matter.Body.setStatic(lmango.body,false);
  }


}