const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7,stand8,stand9,stand10;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);

  stand1 = new Division(0, 675, 5, 200);
  stand2 = new Division(80, 675, 10, 200);
  stand3 = new Division(170, 675, 10, 200);
  stand4 = new Division(250, 675, 10, 200);
  stand5 = new Division(330, 675, 10, 200);
  stand6 = new Division(410, 675, 10, 200);
  stand7 = new Division(475, 675, 10, 200);
stand8=new Division(550,675,10,200);
stand9=new Division(620,675,10,200);
stand10=new Division(690,675,10,200);
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }

  

  
  
}

function draw() {
   background("cyan");

   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
stand8.display();
stand9.display();
stand10.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   

}