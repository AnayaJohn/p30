const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  polygon_img= loadImage("polygon.png")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  base= new Ground(400,400,800,10);

  base1= new Ground(390,270,180,20);
  base2= new Ground(560,120,180,20);
  
  //polygon=new Polygon(40,40)
  
  block1= new Box(330,235,30,40);
  block2= new Box(360,235,30,40);
  block3= new Box(390,235,30,40);
  block4= new Box(420,235,30,40);
  block5= new Box(450,235,30,40);

  block6= new Box(360,195,30,40);
  block7= new Box(390,195,30,40);
  block8= new Box(420,195,30,40);

  block9= new Box(390,155,30,40);
  
  block10= new Box(500,100,30,40);
  block20= new Box(530,100,30,40);
  block30= new Box(560,100,30,40);
  block40= new Box(590,100,30,40);
  block50= new Box(620,100,30,40);

  block60= new Box(530,60,30,40);
  block70= new Box(560,60,30,40);
  block80= new Box(590,60,30,40);

  block90= new Box(560,20,30,40);

  polygon= Bodies.circle(50,200,20);
  //polygon= loadImage("polygon.png")
  World.add(world,polygon);

  //slingshot = new SlingShot(polygon.body,{x:200, y:50});
  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  
  

}

function draw() {
  Engine.update(engine);
  background(0); 

  base.display();
  base1.display();
  base2.display();

  //polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block20.display();
  block30.display();
  block40.display();
  block50.display();
  block60.display();
  block70.display();
  block80.display();
  block90.display();

  slingShot.display();

  imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 // polygon.display();
  
  //drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
//mouseReleased : slingShot.fly(); 

function keyPressed(){
  if(keyCode === 32){
      //Matter.Body.setPosition(polygon.body,{x:200, y:50});
     slingShot.attach(this.polygon);
  }
}