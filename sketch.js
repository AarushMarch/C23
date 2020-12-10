const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2, ground;


function setup() {

  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(500, 100, 50, 100);

  ground = new Ground(200, 20, 800, 20)

  console.log(ground);

  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options:{
      width:800,
    height:400,
    wireframes:false
    }   
  });

    Render.run(render);
}

function draw() {
  background(205,255,255); 
  Engine.update(myEngine);
  box1.display();
  box2.display();
  ground.display();

}