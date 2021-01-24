
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//bodies for mangos
	mango1=new mango(1080,100,30);
	mango2=new mango(950,215,30);
	mango3=new mango(1000,150,25);
	mango4=new mango(1050,200,30);
	mango5=new mango(1200,150,30);
	mango6=new mango(1175,220,25);
	mango7=new mango(1125,165,30);
	mango8=new mango(1010,230,25);
	mango9=new mango(1100,215,25);
	mango10=new mango(915,180,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	//Bodys I added
	stoneObj = new stone(240, 420);
	launcherObject = new slingshot(stoneObj.body, {x:240, y:420})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  textSize(30)
  textFont("bold")
  text("Press Space to get the rock back", 50, 50);
   

  treeObj.display();
  //displays for mangos
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  launcherObject.display();
  stoneObj.display();

  groundObject.display();

  //collision between mangoes and stone

  detectollision(stoneObj, mango1);
  detectollision(stoneObj, mango2);
  detectollision(stoneObj, mango3);
  detectollision(stoneObj, mango4);
  detectollision(stoneObj, mango5);
  detectollision(stoneObj, mango6);
  detectollision(stoneObj, mango7);
  detectollision(stoneObj, mango8);
  detectollision(stoneObj, mango9);
  detectollision(stoneObj, mango10);

}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});

}

function mouseReleased() {
	launcherObject.Release();

}

function detectollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance <= lmango.r+ lstone.r) {
			Matter.Body.setStatic(lmango.body, false);
		}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:240, y:420});
		launcherObject.attach(stoneObj.body);
	}
}
