const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box5,box6,box7,box8
var backgroundImg,platform;
var box, slingShot;

var polygon;

function preload() {
    backgroundImg = loadImage("images/dark.jpg");
    polygon_img= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
    ground = new Ground(600,600,1200,20);
    platform = new Ground(300, 305, 500, 80);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot=new SlingShot(this.polygon,{x:100,y:200})

    
    
    //level 1//
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);

    //level 2//
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);

    //level 3//
    box9 = new Box(390,155,30,40);
    
    
}

function draw(){
    background(220);
  
    //strokeWeight(4);
    
    platform.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  


function mouseReleased(){
    slingshot.fly();
}
