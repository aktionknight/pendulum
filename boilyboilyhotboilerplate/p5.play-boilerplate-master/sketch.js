const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand,ball,ground;

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  var ground_options=
  {
    isStatic : true
  }


  var stand_options=
  {
    isStatic: true
  }

  //ground = Bodies.rectangle(displayWidth/2,400,400,20,ground_options)
  //World.add(world,ground);

stand = Bodies.rectangle(displayWidth/2,300,200,20,stand_options);
World.add(world,stand);

var ball_options = {

  restitution : 0.5,
  density : 0.85

}

ball  = Bodies.circle(displayWidth/2,600,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : stand,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");
}


function draw() {
  background("olive"); 
  Engine.update(engine);


  text("Press space  to oscillate the pendulum  with mouse",displayWidth/2,20);
  text("Press Enter to stop the Pendulum from oscillating",displayWidth/2,50);

  fill ("white");
rectMode(CENTER);
rect(stand.position.x,stand.position.y,200,20);




fill("red");

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,stand.position.x,stand.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = ball.position.x;

}

}








