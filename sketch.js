
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var hg
var vg
var vg2
var ball
var ground1 , ground2 , ground3 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var hgo = {
		isStatic : true
	}
  
	hg = Bodies.rectangle(400,680,800,10 , hgo)
    World.add(world , hg)

	vg = Bodies.rectangle(500,610,10,130 , hgo)
	World.add(world , vg)

	vg2 = Bodies.rectangle(750,600,10,150 , hgo)
	World.add(world , vg2)

	var ballo = {
		restitution : 1
	}

	ball = Bodies.circle(50,380,20,ballo)
World.add(world , ball)

b2 = createImg("rarrow.png")
b2.position(150,30)
b2.size(50,50)
b2.mouseClicked(vf)



  
}


function draw() {
 
  background("black");



  rectMode(CENTER)
  fill("yellow")
  rect(hg.position.x , hg.position.y , 800 , 10)


 


  rectMode(CENTER)
  fill("yellow")
  rect(vg.position.x , vg.position.y , 10 , 130)

  rectMode(CENTER)
  fill("yellow")
  rect(vg2.position.x , vg2.position.y , 10 , 150)

  ellipseMode(RADIUS)
  fill("white")
  ellipse(ball.position.x , ball.position.y , 20 , 20)
  
 
}


function vf(){
    Matter.Body.applyForce(ball , {x:0 , y:0} , {x:0.07 , y:0})
}

